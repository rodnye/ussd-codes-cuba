document.addEventListener("alpine:init", () => {
  Alpine.data("ussdApp", () => ({
    ussdData: [],
    searchQuery: "",
    cart: [],
    prefix: "USSD - ",
    loading: true,
    allExpanded: false,

    async init() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/rodnye/ussd-codes-cuba/refs/heads/main/data/ussd.json",
        );
        if (!response.ok) throw new Error("Network response was not ok");
        this.ussdData = await response.json();
      } catch (e) {
        console.error("Error loading data", e);
      } finally {
        this.loading = false;
      }
    },

    get filteredData() {
      if (!this.searchQuery) return this.ussdData;
      const q = this.searchQuery.toLowerCase();
      return this.ussdData
        .map((group) => {
          const filteredCodes = group.codes.filter(
            (code) =>
              code.name.toLowerCase().includes(q) ||
              code.description.toLowerCase().includes(q) ||
              code.code.toLowerCase().includes(q),
          );
          if (filteredCodes.length > 0) {
            return { ...group, codes: filteredCodes };
          }
          return null;
        })
        .filter(Boolean);
    },

    addToCart(code) {
      if (code.vcf === false) return;
      if (
        !this.cart.find((c) => c.code === code.code && c.name === code.name)
      ) {
        this.cart.push({ ...code });
      }
    },

    removeFromCart(index) {
      this.cart.splice(index, 1);
    },

    isInCart(code) {
      return this.cart.some(
        (c) => c.code === code.code && c.name === code.name,
      );
    },

    toggleAll() {
      const collapses = document.querySelectorAll(
        "#ussdAccordion .accordion-collapse",
      );
      if (collapses.length === 0) return;

      this.allExpanded = !this.allExpanded;

      collapses.forEach((el) => {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(el, {
          toggle: false,
        });
        if (this.allExpanded) {
          bsCollapse.show();
        } else {
          bsCollapse.hide();
        }
      });
    },

    downloadVcf() {
      if (this.cart.length === 0) return;

      let vcfContent = "";
      this.cart.forEach((item) => {
        const name = this.prefix + item.name;
        vcfContent += "BEGIN:VCARD\n";
        vcfContent += "VERSION:3.0\n";
        vcfContent += "FN:" + name + "\n";
        vcfContent += "TEL;TYPE=CELL:" + item.code + "\n";
        vcfContent += "END:VCARD\n";
      });

      const blob = new Blob([vcfContent], { type: "text/vcard;charset=utf-8" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ussd_contacts.vcf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    },
  }));
});
