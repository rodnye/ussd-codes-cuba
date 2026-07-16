const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "ussd.json");
const readmePath = path.join(__dirname, "..", "README.md");

const ussdData = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Group by group, then by bank, then by subgroup
const groups = {};
ussdData.forEach((item) => {
  const group = item.group;
  const bank = item.bank || null;
  const subgroup = item.subgroup;
  if (!groups[group]) groups[group] = {};
  if (!groups[group][bank]) groups[group][bank] = {};
  if (!groups[group][bank][subgroup]) groups[group][bank][subgroup] = [];
  groups[group][bank][subgroup].push(...item.codes);
});

// Helper: generate ID from text
function idFrom(text) {
  return text.toLowerCase().replace(/[^a-z0-9À-ÿ]/g, "-");
}

let md = "";

// --- Index ---
md += "## Índice\n\n";
for (const group of Object.keys(groups)) {
  const groupId = idFrom(group);
  md += `- [${group}](#${groupId})\n`;
  const banks = groups[group];

  for (const bank of Object.keys(banks)) {
    if (bank !== "null") {
      const bankId = idFrom(bank);
      md += `  - [${bank}](#${bankId})\n`;
      const subgroups = banks[bank];
      for (const subgroup of Object.keys(subgroups)) {
        const subId = idFrom(`${bank} ->${subgroup}`);
        md += `    - [${subgroup}](#${subId})\n`;
      }
    } else {
      const subgroups = banks[bank];
      for (const subgroup of Object.keys(subgroups)) {
        const subId = idFrom(subgroup);
        md += `  - [${subgroup}](#${subId})\n`;
      }
    }
  }
}
md += "\n";

// --- Sections ---
for (const group of Object.keys(groups)) {
  md += `## ${group}\n\n`;
  const banks = groups[group];
  for (const bank of Object.keys(banks)) {
    if (bank !== "null") {
      md += `### ${bank}\n\n`;
      const subgroups = banks[bank];
      for (const subgroup of Object.keys(subgroups)) {
        md += `#### ${bank} -> ${subgroup}\n\n`;
        md += "| Nombre | Código | Descripción |\n";
        md += "|--------|--------|-------------|\n";
        subgroups[subgroup].forEach((code) => {
          const name = code.name.replace(/\|/g, "\\|");
          const desc = code.description.replace(/\|/g, "\\|");
          const codeStr = code.code.replace(/\|/g, "\\|");
          md += `| ${name} | \`${codeStr}\` | ${desc} |\n`;
        });
        md += "\n";
      }
    } else {
      const subgroups = banks[bank];
      for (const subgroup of Object.keys(subgroups)) {
        const subId = idFrom(subgroup);
        md += `### ${subgroup} {#${subId}}\n\n`;
        md += "| Nombre | Código | Descripción |\n";
        md += "|--------|--------|-------------|\n";
        subgroups[subgroup].forEach((code) => {
          const name = code.name.replace(/\|/g, "\\|");
          const desc = code.description.replace(/\|/g, "\\|");
          const codeStr = code.code.replace(/\|/g, "\\|");
          md += `| ${name} | \`${codeStr}\` | ${desc} |\n`;
        });
        md += "\n";
      }
    }
  }
}

// Read README and replace markers
let readme = fs.readFileSync(readmePath, "utf8");
const startMarker = "<!-- USSD -->";
const endMarker = "<!-- /end USSD -->";
const startIdx = readme.indexOf(startMarker);
const endIdx = readme.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) {
  console.error(
    "Markers <!-- USSD --> and <!-- /end USSD --> not found in README.md",
  );
  process.exit(1);
}
const before = readme.substring(0, startIdx + startMarker.length);
const after = readme.substring(endIdx);
const newReadme = before + "\n" + md + "\n" + after;
fs.writeFileSync(readmePath, newReadme, "utf8");
console.log("README updated successfully.");
