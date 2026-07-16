# Colección de Códigos USSD – Cuba

> **Transfermóvil · ETECSA · Telefonía fija y móvil**

🌐 **[Ver página web interactiva](https://rodnye.github.io/ussd-codes-cuba/)** - Busca, filtra y exporta códigos USSD como contactos directamente a tu teléfono.

Esta guía reúne los códigos USSD más útiles para operar en Cuba desde cualquier teléfono móvil (Android, iOS o dispositivos no inteligentes).  
No necesitas tener saldo de datos ni la aplicación Transfermóvil instalada.

> [!warning]
> Los códigos pueden cambiar por parte de los bancos o ETECSA.  
> Si encuentras errores o faltantes, contribuye en la sección **[Contribuciones](#contribuciones)**.

<!-- USSD -->

## Índice

- [Transfermóvil](#transfermóvil)
  - [BANMET](#banmet)
    - [Sesión](#banmet---sesión)
    - [Consultas](#banmet---consultas)
    - [Operaciones](#banmet---operaciones)
    - [Configuración](#banmet---configuración)
  - [BANDEC](#bandec)
    - [Sesión](#bandec---sesión)
    - [Consultas](#bandec---consultas)
    - [Operaciones](#bandec---operaciones)
    - [Facturas](#bandec---facturas)
- [ETECSA](#etecsa)
  - [Consultas de saldo y bonos](#consultas-de-saldo-y-bonos)
  - [Recargas de saldo](#recargas-de-saldo)
  - [Planes y bolsas](#planes-y-bolsas)
  - [Internet en el móvil](#internet-en-el-móvil)
  - [Otros servicios móviles](#otros-servicios-móviles)
- [General](#general)
  - [Identificador del equipo](#identificador-del-equipo)
  - [Llamadas anónimas](#llamadas-anónimas)
  - [Desvío de llamadas](#desvío-de-llamadas)
  - [Restricción de llamadas](#restricción-de-llamadas)

## Transfermóvil

### 🏦 BANMET

#### BANMET -> Sesión

| Nombre        | Código        | Descripción                    |
| ------------- | ------------- | ------------------------------ |
| Autenticarse  | `*444*40*03#` | Autenticarse en Transfermóvil  |
| Desconectarse | `*444*70#`    | Desconectarse de Transfermóvil |

#### BANMET -> Consultas

| Nombre                  | Código     | Descripción                   |
| ----------------------- | ---------- | ----------------------------- |
| Saldo                   | `*444*46#` | Consultar saldo               |
| Servicio                | `*444*47#` | Consultar servicio            |
| ONAT                    | `*444*56#` | Consultar ONAT                |
| ONAT Anual              | `*444*57#` | Consultar ONAT anual          |
| Últimas operaciones     | `*444*48#` | Consultar últimas operaciones |
| Límites                 | `*444*62#` | Consultar límites             |
| Todas las cuentas       | `*444*58#` | Consultar todas las cuentas   |
| Giro postal             | `*444*65#` | Consultar giro postal         |
| Localizar transferencia | `*444*73#` | Localizar transferencia       |
| Tipo de cambio          | `*444*85#` | Consultar tipo de cambio      |

#### BANMET -> Operaciones

| Nombre                       | Código     | Descripción                    |
| ---------------------------- | ---------- | ------------------------------ |
| Transferir efectivo          | `*444*45#` | Transferir efectivo            |
| Pagar teléfono               | `*444*42#` | Pagar teléfono                 |
| Electricidad                 | `*444*41#` | Pagar electricidad             |
| Agua                         | `*444*51#` | Pagar agua                     |
| Gas                          | `*444*67#` | Pagar gas                      |
| Pago ONAT                    | `*444*43#` | Pagar ONAT                     |
| Recarga saldo móvil (propio) | `*444*54#` | Recargar saldo móvil propio    |
| Giro postal                  | `*444*64#` | Realizar giro postal           |
| Recarga Nauta                | `*444*59#` | Recargar Nauta                 |
| Pagar cuota Nauta Hogar      | `*444*84#` | Pagar cuota de Nauta Hogar     |
| Pago deuda Nauta Hogar       | `*444*86#` | Pagar deuda de Nauta Hogar     |
| Recarga tarjeta propia       | `*444*77#` | Recargar tarjeta propia        |
| Recarga cuentas Joven Club   | `*444*93#` | Recargar cuentas de Joven Club |

#### BANMET -> Configuración

| Nombre                  | Código                                    | Descripción                                        |
| ----------------------- | ----------------------------------------- | -------------------------------------------------- |
| Registrarse             | `*444*49*03*número de tarjeta Telebanca#` | Registrarse en Transfermóvil con tarjeta Telebanca |
| Cambio de límites       | `*444*61#`                                | Cambiar límites                                    |
| Eliminar registro       | `*444*68*03#`                             | Eliminar registro                                  |
| Cambio de PIN           | `*444*69#`                                | Cambiar PIN                                        |
| Asociar cuenta          | `*444*60#`                                | Asociar cuenta                                     |
| Actualizar cuenta       | `*444*53#`                                | Actualizar cuenta                                  |
| Reimpresión de tarjetas | `*444*74#`                                | Reimpresión de tarjetas                            |
| PIN digital             | `*444*79#`                                | PIN digital                                        |
| Apertura cuenta MLC     | `*444*76#`                                | Apertura cuenta MLC                                |

### 🏦 BANDEC

#### BANDEC -> Sesión

| Nombre            | Código            | Descripción                          |
| ----------------- | ----------------- | ------------------------------------ |
| Registrar         | `*444*49*02*PAN#` | Registrarse en Transfermóvil con PAN |
| Autenticarse      | `*444*40*02#`     | Autenticarse en Transfermóvil        |
| Cerrar sesión     | `*444*70#`        | Cerrar sesión                        |
| Cambio de PIN     | `*444*69#`        | Cambiar PIN                          |
| Eliminar registro | `*444*68*02#`     | Eliminar registro                    |

#### BANDEC -> Consultas

| Nombre              | Código          | Descripción                   |
| ------------------- | --------------- | ----------------------------- |
| Saldo               | `*444*46#`      | Consultar saldo               |
| Servicio            | `*444*47#`      | Consultar servicio            |
| Todas las cuentas   | `*444*58#`      | Consultar todas las cuentas   |
| Límite de tarjeta   | `*444*62#`      | Consultar límite de tarjeta   |
| Últimas operaciones | `*444*48#`      | Consultar últimas operaciones |
| Últimos pagos       | `*444*63#`      | Consultar últimos pagos       |
| Consulta ONAT       | `*444*56*RC05#` | Consultar ONAT                |

#### BANDEC -> Operaciones

| Nombre                    | Código     | Descripción               |
| ------------------------- | ---------- | ------------------------- |
| Transferencia             | `*444*45#` | Realizar transferencia    |
| Pago electricidad         | `*444*41#` | Pagar electricidad        |
| Pago teléfono             | `*444*42#` | Pagar teléfono            |
| Pago ONAT                 | `*444*43#` | Pagar ONAT                |
| Recarga saldo móvil       | `*444*54#` | Recargar saldo móvil      |
| Cambio de límite diario   | `*444*61#` | Cambiar límite diario     |
| Amortizar créditos BANDEC | `*444*55#` | Amortizar créditos BANDEC |

#### BANDEC -> Facturas

| Nombre   | Código     | Descripción                                    |
| -------- | ---------- | ---------------------------------------------- |
| Facturas | `*444*52#` | Adicionar, consultar, pagar o eliminar factura |

## ETECSA

### 📡 Consultas de saldo y bonos

| Nombre                    | Código      | Descripción                                                                            |
| ------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| Saldo y vigencia          | `*222#`     | Saldo principal, voz, SMS, datos y vigencia                                            |
| Límite de recarga         | `*222*732#` | Consultar cuánto puedes recargar en el mes (límite 360 CUP) y cuándo puedes la próxima |
| Bono de recargas          | `*222*266#` | Consultar bono de recargas en promoción (también para bonos y planes en USD)           |
| Paquete de datos comprado | `*222*328#` | Consultar paquete de datos comprado (sin bono)                                         |
| Crédito plan de voz       | `*222*869#` | Crédito del plan de voz (si lo compraste)                                              |
| Crédito plan de SMS       | `*222*767#` | Crédito del plan de SMS (si lo compraste)                                              |
| Saldo telefonía fija      | `*118#`     | Consultar saldo de telefonía fija                                                      |
| Tarifa diferenciada       | `*111*6#`   | Saber si tu línea tiene tarifa diferenciada (te llega un SMS)                          |
| MB Cubacel                | `*222*887#` | Consultar megas disponibles                                                            |
| Plan Amigos               | `*222*264#` | Consultar el estado del Plan Amigos                                                    |
| Bolsa de correo Nauta     | `*222*328#` | Estado del paquete de bolsa de correo Nauta                                            |

### 📡 Recargas de saldo

| Nombre                              | Código                    | Descripción                                                                          |
| ----------------------------------- | ------------------------- | ------------------------------------------------------------------------------------ |
| Recarga con tarjeta de cupón        | `*666`                    | Marcar \*666 y seguir instrucciones                                                  |
| Recarga rápida con cupón            | `*662*código de recarga#` | Recarga rápida con cupón, ejemplo *662*123456789012#                                 |
| Transferencia de saldo entre líneas | `*234#`                   | Transferencia de saldo entre líneas, menú o directamente *234*1*número*clave\*monto# |
| Adelanto de saldo                   | `*222*233#`               | Adelanto de saldo, opción 3 en *234# o *222\*233#                                    |

### 📡 Planes y bolsas

| Nombre             | Código      | Descripción                                                       |
| ------------------ | ----------- | ----------------------------------------------------------------- |
| Comprar servicios  | `*133#`     | Comprar servicios (datos, SMS, voz, Plan Amigos) menú interactivo |
| Estado plan de voz | `*222*869#` | Consultar estado del plan de voz                                  |
| Estado plan de SMS | `*222*767#` | Consultar estado del plan de SMS                                  |
| Estado Plan Amigos | `*222*264#` | Consultar estado del Plan Amigos                                  |

### 📡 Internet en el móvil

| Nombre                   | Código      | Descripción                                                |
| ------------------------ | ----------- | ---------------------------------------------------------- |
| Activar plan de datos    | `*133#`     | Activar plan de datos, opción de datos en menú             |
| Validación datos móviles | `*222*468#` | Saber si tu línea está validada para datos móviles en Cuba |
| Estado paquete de datos  | `*222*328#` | Consultar estado del paquete de datos                      |

### 📡 Otros servicios móviles

| Nombre                 | Código        | Descripción                                    |
| ---------------------- | ------------- | ---------------------------------------------- |
| Atención telefónica    | `*2266`       | Atención telefónica (ETECSA)                   |
| Buzón de voz           | `*123`        | Acceder al buzón de voz y seguir instrucciones |
| Buzón de voz directo   | `*80`         | Buzón de voz directo                           |
| Centro de servicio SMS | `+5372640004` | Centro de servicio de SMS (SMSC)               |
| Código de red          | `36801`       | Código de red (información de Cubacel)         |

## General

### 📡 Identificador del equipo

| Nombre | Código  | Descripción                  |
| ------ | ------- | ---------------------------- |
| IMEI   | `*#06#` | Mostrar el IMEI del teléfono |

### 📡 Llamadas anónimas

| Nombre                  | Código       | Descripción                                                 |
| ----------------------- | ------------ | ----------------------------------------------------------- |
| Ocultar número          | `#31#numero` | Ocultar mi número para una llamada, marcar antes del número |
| Desactivar ocultamiento | `*31#`       | Desactivar ocultamiento permanente (mostrar ID)             |

### 📡 Desvío de llamadas

| Nombre           | Código        | Descripción                                        |
| ---------------- | ------------- | -------------------------------------------------- |
| Activar desvío   | `*21*número#` | Activar desvío de todas las llamadas a otro número |
| Cancelar desvíos | `#21#`        | Cancelar todos los desvíos                         |

### 📡 Restricción de llamadas

| Nombre                      | Código       | Descripción                                                        |
| --------------------------- | ------------ | ------------------------------------------------------------------ |
| Cancelar todos los bloqueos | `#330*0000#` | Cancelar todos los bloqueos (entrantes y salientes) con clave 0000 |
| Cancelar bloqueo entrantes  | `#35*0000#`  | Cancelar bloqueo de llamadas entrantes con clave 0000              |
| Cancelar bloqueo salientes  | `#33*0000#`  | Cancelar bloqueo de llamadas salientes con clave 0000              |

<!-- /end USSD -->

## Notas importantes

- Todos los códigos USSD se marcan como una **llamada normal** (presiona "llamar" después de escribir el código).
- **Límite de recarga nacional:** 360 CUP cada 30 días (vía Transfermóvil, Servicios En Línea, Monedero, oficinas).  
  Las **transferencias de saldo entre líneas** y las **recargas internacionales** no tienen ese límite.
- Puedes comprar la cantidad de paquetes que desees, siempre que tengas saldo principal suficiente.
- Para comprar un plan (datos, voz, SMS) la línea debe estar activa y con saldo ≥ precio del plan.
- Los códigos de Transfermóvil son específicos para cada banco. Verifica con tu banco antes de operar.

## Contribuciones

Si tienes:

- ✅ Un código nuevo (para otro banco, otro servicio de ETECSA, etc.)
- ❌ Una corrección
- 🔁 Un código que ya no funciona

Abre un **issue** o envía un **pull request** con:

- Categoría (Transfermóvil / ETECSA / General)
- Banco o servicio
- Código USSD
- Breve descripción
- Fuente (si la tienes)

## Fuentes

- https://portal.bandec.cu/uploads/pdf/Transferm%C3%B3vil.pdf
- https://www.facebook.com/bpa.cu/posts/m%C3%A1s-actualizadoc%C3%B3digos-ussd-m%C3%A1s-usados-en-cuba-que-debes-conocerlos-c%C3%B3digos-ussd/1130244395786667/
- https://www.facebook.com/groups/transfermovil.actualizacion/posts/2069087253916580/
- https://www.youtube.com/watch?v=yDUVoHFms5s
- https://www.tienda.etecsa.cu/visitantes/moviles/servicios

---

**¿Falta algo?** crea una issue o contribuye carajo! :D
