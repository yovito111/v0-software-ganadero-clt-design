# Software Ganadero CLT - Product Backlog

## Información del Proyecto

| Campo | Valor |
|-------|-------|
| **Nombre del Proyecto** | Software Ganadero CLT |
| **Versión** | 1.0.0 |
| **Fecha** | 2025 |
| **Product Owner** | CLT S.A. |
| **Mercado Objetivo** | Productores ganaderos de Paraguay |
| **Marco Regulatorio** | Ley 7221/2023 - Trazabilidad Individual Obligatoria |

---

## 1. Visión del Producto

Transformar la gestión ganadera paraguaya mediante una plataforma tecnológica integral que permita la trazabilidad completa, control de stock, sanidad y gestión multi-estancia, cumpliendo con las normativas de SENACSA y facilitando la exportación premium.

---

## 2. Listado de Funcionalidades por Módulos

### 2.1 Módulo Dashboard Gerencial

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| DASH-001 | Vista consolidada multi-estancia | Panel central con KPIs de todas las estancias | Alta |
| DASH-002 | Indicadores en tiempo real | Total animales, ventas, alertas pendientes | Alta |
| DASH-003 | Selector de estancias | Filtro para ver datos individuales o consolidados | Alta |
| DASH-004 | Resumen por estancia | Cards con información de cada propiedad | Media |
| DASH-005 | Sistema de alertas | Notificaciones de vacunación, traslados, inventario | Alta |
| DASH-006 | Exportación de reportes | Descarga de informes en PDF/Excel | Media |
| DASH-007 | Gráficos de tendencias | Visualización de evolución de stock y ventas | Media |

### 2.2 Módulo Stock

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| STK-001 | Inventario de animales | Lista completa con filtros y búsqueda | Alta |
| STK-002 | Ficha individual de animal | Datos completos: ID, raza, sexo, edad, peso, estado | Alta |
| STK-003 | Código QR por animal | Generación y lectura de códigos QR | Alta |
| STK-004 | Trazabilidad genealógica | Registro de madre, padre y descendencia | Alta |
| STK-005 | Estados de animales | Sano, vacunado, preñada, en tratamiento | Alta |
| STK-006 | Historial de movimientos | Registro de todos los eventos del animal | Media |
| STK-007 | Búsqueda avanzada | Filtros por raza, edad, estado, estancia | Media |
| STK-008 | Registro de peso | Historial de pesajes por animal | Media |

### 2.3 Módulo Ventas

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| VEN-001 | Registro de ventas | Alta de operaciones de venta | Alta |
| VEN-002 | Gestión de clientes | Catálogo de compradores (frigoríficos, exportadoras) | Alta |
| VEN-003 | Cálculo de peso total | Sumatoria automática de animales vendidos | Alta |
| VEN-004 | Estados de venta | Completada, pendiente, en proceso | Media |
| VEN-005 | Facturación integrada | Generación de documentos fiscales | Alta |
| VEN-006 | Historial de precios | Registro histórico por kg/animal | Media |
| VEN-007 | Reporte de ventas | KPIs mensuales y anuales | Media |
| VEN-008 | Integración con guías de traslado | Vinculación con documentos de SENACSA | Alta |

### 2.4 Módulo Compras

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| COM-001 | Registro de compras | Alta de adquisiciones de animales | Alta |
| COM-002 | Compra de insumos | Medicamentos, suplementos, alimentos | Media |
| COM-003 | Gestión de proveedores | Catálogo de vendedores | Alta |
| COM-004 | Estados de compra | Recibido, pendiente, en tránsito | Media |
| COM-005 | Órdenes de compra | Generación de documentos de compra | Media |
| COM-006 | Control de costos | Seguimiento de inversiones | Media |
| COM-007 | Recepción de mercadería | Validación de entregas | Media |

### 2.5 Módulo Traslados

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| TRA-001 | Registro de movimientos | Alta de traslados entre estancias | Alta |
| TRA-002 | Selección de origen/destino | Lista de estancias disponibles | Alta |
| TRA-003 | Motivos de traslado | Rotación, servicio, engorde, venta | Media |
| TRA-004 | Estados de traslado | Completado, en tránsito, programado | Media |
| TRA-005 | Guía de traslado | Generación de documento oficial SENACSA | Alta |
| TRA-006 | Seguimiento GPS | Tracking de movimientos en tiempo real | Baja |
| TRA-007 | Integración con SIGOR | Sincronización con sistema oficial | Alta |

### 2.6 Módulo Nacimientos

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| NAC-001 | Registro de nacimientos | Alta de nuevas crías | Alta |
| NAC-002 | Vinculación con madre | Asociación automática de genealogía | Alta |
| NAC-003 | Datos de nacimiento | Peso, sexo, estado de salud | Alta |
| NAC-004 | Generación de ID | Código único para trazabilidad | Alta |
| NAC-005 | Alertas de atención | Notificación de crías que requieren cuidado | Media |
| NAC-006 | Tasa de supervivencia | KPI de nacimientos exitosos | Media |
| NAC-007 | Calendario de partos | Proyección de nacimientos esperados | Media |

### 2.7 Módulo Mortalidad

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| MOR-001 | Registro de mortalidad | Alta de bajas en el inventario | Alta |
| MOR-002 | Causas de muerte | Enfermedad, accidente, vejez, otros | Alta |
| MOR-003 | Información del animal | Vinculación con ficha del animal | Alta |
| MOR-004 | Reporte veterinario | Registro del profesional que reporta | Media |
| MOR-005 | Alertas sanitarias | Detección de patrones de mortalidad | Alta |
| MOR-006 | Estadísticas de mortalidad | KPIs por causa, estancia, período | Media |
| MOR-007 | Captura de ubicación GPS | Registro de lugar del evento | Media |
| MOR-008 | Adjuntar fotografías | Evidencia del evento | Media |

### 2.8 Módulo Ferias

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| FER-001 | Registro de ferias | Alta de eventos comerciales | Media |
| FER-002 | Inscripción de animales | Selección para participación | Media |
| FER-003 | Categorías de participación | Reproductores, novillos, terneros | Media |
| FER-004 | Estados de participación | Confirmado, pendiente, premiado | Baja |
| FER-005 | Calendario de ferias | Agenda de eventos próximos | Baja |
| FER-006 | Resultados y premios | Registro de logros obtenidos | Baja |

### 2.9 Módulo Proveedores

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| PRO-001 | Catálogo de proveedores | Lista de proveedores activos | Alta |
| PRO-002 | Datos de contacto | Teléfono, email, dirección | Alta |
| PRO-003 | Tipo de proveedor | Reproductores, medicamentos, suplementos | Media |
| PRO-004 | Estados de proveedor | Activo, inactivo, bloqueado | Media |
| PRO-005 | Historial de compras | Registro de operaciones por proveedor | Media |
| PRO-006 | Evaluación de proveedores | Calificación de servicio | Baja |

### 2.10 Módulo Consolidación

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| CON-001 | Vista multi-estancia | Dashboard unificado | Alta |
| CON-002 | Comparativo de estancias | Métricas lado a lado | Media |
| CON-003 | Reportes consolidados | Informes de todo el grupo | Alta |
| CON-004 | Balance de movimientos | Flujo entre estancias | Media |
| CON-005 | Proyecciones | Estimaciones de producción | Baja |

### 2.11 Módulo Sanidad

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| SAN-001 | Calendario de vacunación | Programación de vacunas obligatorias | Alta |
| SAN-002 | Registro de vacunaciones | Historial por animal | Alta |
| SAN-003 | Control de lotes | Trazabilidad de medicamentos | Alta |
| SAN-004 | Tratamientos médicos | Registro de intervenciones veterinarias | Media |
| SAN-005 | Alertas de vacunación | Notificaciones de fechas próximas | Alta |
| SAN-006 | Reportes para SENACSA | Documentación oficial | Alta |
| SAN-007 | Integración con SIAP | Sincronización con sistema oficial | Alta |

### 2.12 Módulo Contable (Integración Starsoft)

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| CTB-001 | Asientos automáticos | Generación desde ventas/compras | Alta |
| CTB-002 | Plan de cuentas ganadero | Cuentas específicas del sector | Alta |
| CTB-003 | Sincronización Starsoft | Conexión bidireccional | Alta |
| CTB-004 | Balance General | Estado patrimonial | Media |
| CTB-005 | Estado de Resultados | P&G del período | Media |
| CTB-006 | Libro Diario | Registro cronológico | Media |
| CTB-007 | Libro Mayor | Movimientos por cuenta | Media |
| CTB-008 | Declaración IVA | Formulario 110 SET | Alta |
| CTB-009 | Centro de costos | Asignación por estancia | Media |
| CTB-010 | Conciliación bancaria | Cruce con extractos | Baja |

### 2.13 Módulo App Móvil (Capataces)

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| MOB-001 | Modo offline | Funcionamiento sin conexión | Alta |
| MOB-002 | Registro de mortalidad | Alta rápida en campo | Alta |
| MOB-003 | Registro de nacimientos | Alta de crías | Alta |
| MOB-004 | Lectura QR/RFID | Escaneo de animales | Alta |
| MOB-005 | Captura de GPS | Ubicación automática | Media |
| MOB-006 | Captura de fotos | Evidencia de eventos | Media |
| MOB-007 | Sincronización automática | Envío al conectar | Alta |
| MOB-008 | Registro de sanidad | Vacunas y tratamientos | Alta |
| MOB-009 | Control de traslados | Movimientos internos | Media |
| MOB-010 | Reporte diario | Resumen de actividades | Media |

### 2.14 Integraciones Oficiales

| ID | Funcionalidad | Descripción | Prioridad |
|----|---------------|-------------|-----------|
| INT-001 | Integración SIAP | Sistema de información agropecuaria | Alta |
| INT-002 | Integración SIGOR | Sistema de guías de remisión | Alta |
| INT-003 | Integración COTAs | Certificados de origen | Alta |
| INT-004 | Integración SET | Facturación electrónica | Alta |
| INT-005 | Integración Starsoft | Sistema contable | Alta |

---

## 3. Épicas del Proyecto

### EPIC-001: Gestión de Inventario Ganadero
**Descripción:** Como productor ganadero, necesito un sistema completo para gestionar mi inventario de animales con trazabilidad individual, cumpliendo con la Ley 7221/2023.

**Alcance:**
- Registro y mantenimiento de fichas de animales
- Generación y lectura de códigos QR/RFID
- Control de estados sanitarios
- Trazabilidad genealógica
- Historial completo de movimientos

**Criterios de Aceptación:**
- 100% de animales con identificación única
- Trazabilidad completa desde nacimiento
- Cumplimiento de normativas SENACSA

---

### EPIC-002: Operaciones Comerciales
**Descripción:** Como productor, necesito gestionar todas mis operaciones de compra y venta de ganado con documentación oficial.

**Alcance:**
- Registro de ventas con facturación
- Registro de compras con proveedores
- Gestión de clientes y compradores
- Generación de documentos fiscales
- Historial de precios y transacciones

**Criterios de Aceptación:**
- Todas las operaciones con respaldo documental
- Integración con facturación electrónica SET
- Reportes financieros precisos

---

### EPIC-003: Control de Movimientos
**Descripción:** Como productor multi-estancia, necesito controlar todos los movimientos de animales entre mis propiedades y hacia terceros.

**Alcance:**
- Registro de traslados internos
- Generación de guías de remisión
- Integración con SIGOR
- Seguimiento de estados de traslado

**Criterios de Aceptación:**
- Guías oficiales generadas automáticamente
- Sincronización con SIGOR
- Trazabilidad completa de movimientos

---

### EPIC-004: Gestión Reproductiva
**Descripción:** Como productor, necesito controlar el ciclo reproductivo de mi rodeo, incluyendo nacimientos y genealogía.

**Alcance:**
- Registro de nacimientos
- Vinculación con progenitores
- Proyección de partos
- Indicadores de fertilidad

**Criterios de Aceptación:**
- Registro automático de genealogía
- Alertas de partos próximos
- KPIs de reproducción

---

### EPIC-005: Control Sanitario
**Descripción:** Como productor, necesito gestionar la sanidad de mi rodeo cumpliendo con las campañas obligatorias de SENACSA.

**Alcance:**
- Calendario de vacunación
- Registro de tratamientos
- Control de mortalidad
- Alertas sanitarias
- Reportes oficiales

**Criterios de Aceptación:**
- 100% cumplimiento de vacunación obligatoria
- Trazabilidad de lotes de medicamentos
- Reportes listos para SENACSA

---

### EPIC-006: Gestión Multi-Estancia
**Descripción:** Como productor con múltiples propiedades, necesito una vista consolidada de todas mis operaciones.

**Alcance:**
- Dashboard multi-estancia
- Reportes consolidados
- Comparativos de rendimiento
- Balance de movimientos

**Criterios de Aceptación:**
- Vista unificada de todas las estancias
- Drill-down por propiedad
- Reportes consolidados precisos

---

### EPIC-007: Integración Contable
**Descripción:** Como administrador, necesito que todas las operaciones ganaderas se reflejen automáticamente en mi sistema contable Starsoft.

**Alcance:**
- Asientos automáticos
- Plan de cuentas ganadero
- Sincronización bidireccional
- Reportes fiscales

**Criterios de Aceptación:**
- Asientos generados automáticamente
- Sincronización en tiempo real
- Cumplimiento tributario SET

---

### EPIC-008: Movilidad en Campo
**Descripción:** Como capataz, necesito una aplicación móvil para registrar eventos en el campo sin necesidad de conexión a internet.

**Alcance:**
- App móvil offline-first
- Registro de mortalidad en campo
- Registro de nacimientos
- Lectura de identificación
- Sincronización automática

**Criterios de Aceptación:**
- Funcionamiento 100% offline
- Sincronización automática al conectar
- Interfaz optimizada para campo

---

### EPIC-009: Integraciones Oficiales
**Descripción:** Como productor, necesito que el sistema se integre con todos los sistemas oficiales de Paraguay para cumplimiento regulatorio.

**Alcance:**
- Integración SIAP
- Integración SIGOR
- Integración COTAs
- Integración SET

**Criterios de Aceptación:**
- Sincronización automática
- Documentos oficiales generados
- Cumplimiento 100% regulatorio

---

## 4. Features por Épica

### EPIC-001: Gestión de Inventario Ganadero

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-001.1 | Gestión de Fichas de Animales | CRUD completo de animales con todos sus atributos |
| FEAT-001.2 | Sistema de Identificación QR/RFID | Generación y lectura de códigos únicos |
| FEAT-001.3 | Control de Estados Sanitarios | Gestión de estados de salud de animales |
| FEAT-001.4 | Trazabilidad Genealógica | Árbol genealógico de cada animal |
| FEAT-001.5 | Búsqueda y Filtrado Avanzado | Motor de búsqueda con múltiples filtros |

### EPIC-002: Operaciones Comerciales

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-002.1 | Gestión de Ventas | Registro completo de operaciones de venta |
| FEAT-002.2 | Gestión de Compras | Registro de adquisiciones |
| FEAT-002.3 | Catálogo de Clientes | Gestión de compradores |
| FEAT-002.4 | Catálogo de Proveedores | Gestión de vendedores |
| FEAT-002.5 | Facturación Electrónica | Integración con SET |

### EPIC-003: Control de Movimientos

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-003.1 | Registro de Traslados | Alta de movimientos entre estancias |
| FEAT-003.2 | Guías de Remisión | Generación de documentos oficiales |
| FEAT-003.3 | Integración SIGOR | Sincronización con sistema oficial |
| FEAT-003.4 | Seguimiento de Traslados | Estados y tracking |

### EPIC-004: Gestión Reproductiva

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-004.1 | Registro de Nacimientos | Alta de nuevas crías |
| FEAT-004.2 | Vinculación Genealógica | Asociación con progenitores |
| FEAT-004.3 | Calendario de Partos | Proyección de nacimientos |
| FEAT-004.4 | Indicadores Reproductivos | KPIs de fertilidad |

### EPIC-005: Control Sanitario

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-005.1 | Calendario de Vacunación | Programación de campañas |
| FEAT-005.2 | Registro de Tratamientos | Historial médico por animal |
| FEAT-005.3 | Control de Mortalidad | Registro de bajas |
| FEAT-005.4 | Alertas Sanitarias | Sistema de notificaciones |
| FEAT-005.5 | Reportes SENACSA | Documentación oficial |

### EPIC-006: Gestión Multi-Estancia

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-006.1 | Dashboard Consolidado | Vista unificada de KPIs |
| FEAT-006.2 | Reportes Multi-Estancia | Informes consolidados |
| FEAT-006.3 | Comparativo de Rendimiento | Análisis entre estancias |
| FEAT-006.4 | Balance de Movimientos | Flujo entre propiedades |

### EPIC-007: Integración Contable

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-007.1 | Asientos Automáticos | Generación desde operaciones |
| FEAT-007.2 | Plan de Cuentas Ganadero | Estructura contable específica |
| FEAT-007.3 | Sincronización Starsoft | Conexión bidireccional |
| FEAT-007.4 | Reportes Fiscales | Formularios SET |

### EPIC-008: Movilidad en Campo

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-008.1 | App Móvil Offline | Funcionamiento sin conexión |
| FEAT-008.2 | Registro en Campo | Alta de eventos operativos |
| FEAT-008.3 | Lectura de Identificación | Scanner QR/RFID |
| FEAT-008.4 | Sincronización Automática | Envío de datos al conectar |

### EPIC-009: Integraciones Oficiales

| ID | Feature | Descripción |
|----|---------|-------------|
| FEAT-009.1 | Integración SIAP | Conexión con sistema agropecuario |
| FEAT-009.2 | Integración SIGOR | Guías de remisión oficiales |
| FEAT-009.3 | Integración COTAs | Certificados de origen |
| FEAT-009.4 | Integración SET | Facturación electrónica |

---

## 5. Historias de Usuario

### EPIC-001: Gestión de Inventario Ganadero

#### FEAT-001.1: Gestión de Fichas de Animales

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-001.1.1 | Como encargado de estancia, quiero registrar un nuevo animal en el sistema para mantener actualizado mi inventario | - Formulario con campos: ID, raza, sexo, fecha nacimiento, peso, estado<br>- Validación de ID único<br>- Asignación automática de estancia<br>- Confirmación visual de registro exitoso | 5 |
| US-001.1.2 | Como encargado, quiero editar los datos de un animal existente para corregir información o actualizar estados | - Acceso desde lista de animales<br>- Formulario pre-cargado con datos actuales<br>- Historial de cambios registrado<br>- Validación de campos obligatorios | 3 |
| US-001.1.3 | Como encargado, quiero ver la ficha completa de un animal para consultar toda su información | - Vista detallada con todos los atributos<br>- Historial de movimientos<br>- Árbol genealógico<br>- Historial sanitario | 5 |
| US-001.1.4 | Como encargado, quiero dar de baja un animal del inventario registrando el motivo | - Selección de motivo: venta, muerte, traslado<br>- Registro de fecha y observaciones<br>- Animal marcado como inactivo<br>- Actualización automática de conteo | 3 |

#### FEAT-001.2: Sistema de Identificación QR/RFID

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-001.2.1 | Como encargado, quiero generar un código QR único para cada animal para facilitar su identificación | - QR generado automáticamente al registrar animal<br>- Código incluye ID único del sistema<br>- Posibilidad de imprimir etiqueta<br>- QR vinculado a ficha del animal | 5 |
| US-001.2.2 | Como capataz, quiero escanear el QR de un animal para acceder rápidamente a su información | - Lector integrado en app móvil<br>- Apertura automática de ficha<br>- Funcionamiento offline<br>- Historial de escaneos | 5 |
| US-001.2.3 | Como encargado, quiero registrar chips RFID de animales importados para mantener su trazabilidad | - Campo para ingreso de código RFID<br>- Validación de formato<br>- Vinculación con ficha existente<br>- Búsqueda por RFID | 3 |

#### FEAT-001.3: Control de Estados Sanitarios

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-001.3.1 | Como encargado, quiero actualizar el estado sanitario de un animal para reflejar su condición actual | - Estados disponibles: Sano, Vacunado, En tratamiento, Preñada, Cuarentena<br>- Registro de fecha de cambio<br>- Observaciones opcionales<br>- Notificación a supervisores | 3 |
| US-001.3.2 | Como veterinario, quiero ver todos los animales que requieren atención sanitaria para planificar intervenciones | - Filtro por estado sanitario<br>- Lista de animales en tratamiento<br>- Próximas vacunaciones<br>- Exportación de lista | 3 |

#### FEAT-001.4: Trazabilidad Genealógica

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-001.4.1 | Como encargado, quiero registrar la madre de un animal recién nacido para mantener la genealogía | - Selección de madre desde inventario<br>- Validación de sexo (hembra)<br>- Vinculación automática<br>- Actualización de ficha de madre | 3 |
| US-001.4.2 | Como encargado, quiero ver el árbol genealógico de un animal para conocer su linaje | - Vista de ascendencia (padres, abuelos)<br>- Vista de descendencia (crías)<br>- Navegación entre generaciones<br>- Exportación de árbol | 5 |

#### FEAT-001.5: Búsqueda y Filtrado Avanzado

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-001.5.1 | Como encargado, quiero buscar animales por su ID para encontrarlos rápidamente | - Campo de búsqueda en header<br>- Búsqueda en tiempo real<br>- Resultados con información básica<br>- Acceso directo a ficha | 3 |
| US-001.5.2 | Como encargado, quiero filtrar animales por múltiples criterios para analizar grupos específicos | - Filtros: raza, sexo, edad, estado, estancia<br>- Combinación de filtros<br>- Contador de resultados<br>- Guardado de filtros frecuentes | 5 |

---

### EPIC-002: Operaciones Comerciales

#### FEAT-002.1: Gestión de Ventas

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-002.1.1 | Como encargado de ventas, quiero registrar una nueva venta de animales para documentar la operación | - Selección de cliente<br>- Selección de animales (múltiple)<br>- Cálculo automático de peso y precio<br>- Generación de comprobante | 8 |
| US-002.1.2 | Como encargado, quiero ver el historial de ventas para analizar el rendimiento comercial | - Lista de ventas con filtros de fecha<br>- KPIs: total vendido, cantidad animales<br>- Detalle por operación<br>- Exportación a Excel | 5 |
| US-002.1.3 | Como encargado, quiero actualizar el estado de una venta para reflejar su progreso | - Estados: Pendiente, En proceso, Completada, Cancelada<br>- Registro de cambios<br>- Notificaciones automáticas<br>- Actualización de inventario al completar | 3 |

#### FEAT-002.2: Gestión de Compras

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-002.2.1 | Como encargado, quiero registrar una compra de animales para incorporarlos al inventario | - Selección de proveedor<br>- Registro de cantidad y tipo<br>- Precio de compra<br>- Alta automática en inventario | 8 |
| US-002.2.2 | Como encargado, quiero registrar compras de insumos para control de gastos | - Categorías: Medicamentos, Alimentos, Suplementos<br>- Cantidad y precio<br>- Fecha de vencimiento si aplica<br>- Vinculación con proveedor | 5 |

#### FEAT-002.3: Catálogo de Clientes

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-002.3.1 | Como encargado de ventas, quiero registrar un nuevo cliente para futuras operaciones | - Datos: Nombre, RUC, teléfono, email, dirección<br>- Tipo: Frigorífico, Exportadora, Particular<br>- Validación de RUC<br>- Estado activo/inactivo | 3 |
| US-002.3.2 | Como encargado, quiero ver el historial de compras de un cliente para analizar la relación comercial | - Lista de operaciones con el cliente<br>- Total histórico<br>- Últimas transacciones<br>- Condiciones de pago | 3 |

---

### EPIC-003: Control de Movimientos

#### FEAT-003.1: Registro de Traslados

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-003.1.1 | Como encargado, quiero registrar un traslado de animales entre estancias para control de movimientos | - Selección de origen y destino<br>- Selección de animales (múltiple)<br>- Motivo del traslado<br>- Fecha programada o inmediata | 5 |
| US-003.1.2 | Como encargado, quiero actualizar el estado de un traslado para reflejar su progreso | - Estados: Programado, En tránsito, Completado, Cancelado<br>- Actualización automática de ubicación de animales<br>- Notificación a estancias involucradas | 3 |
| US-003.1.3 | Como administrador, quiero ver todos los traslados del período para control operativo | - Lista con filtros de fecha y estancia<br>- KPIs: cantidad de movimientos, animales trasladados<br>- Exportación de reporte | 3 |

#### FEAT-003.2: Guías de Remisión

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-003.2.1 | Como encargado, quiero generar una guía de remisión oficial para cumplir con SENACSA | - Generación automática desde traslado<br>- Formato oficial SENACSA<br>- Datos completos de animales<br>- Código único de guía | 8 |
| US-003.2.2 | Como transportista, quiero imprimir la guía de remisión para llevar durante el traslado | - Formato imprimible PDF<br>- Incluye código de barras/QR<br>- Espacio para firmas<br>- Copia para cada parte | 3 |

---

### EPIC-004: Gestión Reproductiva

#### FEAT-004.1: Registro de Nacimientos

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-004.1.1 | Como capataz, quiero registrar un nacimiento en campo para documentar la cría | - Identificación de madre (QR/búsqueda)<br>- Datos: sexo, peso, observaciones<br>- Captura de foto opcional<br>- Funcionamiento offline | 5 |
| US-004.1.2 | Como encargado, quiero ver los nacimientos del período para análisis reproductivo | - Lista con filtros de fecha y estancia<br>- KPIs: tasa de nacimientos, machos/hembras<br>- Tasa de supervivencia<br>- Comparativo con períodos anteriores | 3 |

---

### EPIC-005: Control Sanitario

#### FEAT-005.1: Calendario de Vacunación

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-005.1.1 | Como veterinario, quiero programar una campaña de vacunación para planificar la logística | - Selección de vacuna y fecha<br>- Selección de animales o grupos<br>- Cálculo automático de dosis necesarias<br>- Notificación a responsables | 5 |
| US-005.1.2 | Como encargado, quiero ver las vacunaciones pendientes para cumplir con el calendario | - Lista de próximas vacunaciones<br>- Animales pendientes por vacuna<br>- Alertas de fechas críticas<br>- Exportación de lista | 3 |

#### FEAT-005.2: Registro de Tratamientos

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-005.2.1 | Como capataz, quiero registrar la aplicación de una vacuna para documentar el evento | - Selección de animal (QR/búsqueda)<br>- Selección de vacuna y lote<br>- Fecha y responsable<br>- Funcionamiento offline | 5 |
| US-005.2.2 | Como veterinario, quiero registrar un tratamiento médico para historial del animal | - Diagnóstico y tratamiento<br>- Medicamentos aplicados con lote<br>- Próxima revisión si aplica<br>- Adjuntar documentos | 5 |

#### FEAT-005.3: Control de Mortalidad

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-005.3.1 | Como capataz, quiero registrar una mortalidad en campo para baja del inventario | - Identificación del animal (QR/búsqueda)<br>- Causa de muerte<br>- Captura de ubicación GPS<br>- Foto opcional<br>- Funcionamiento offline | 5 |
| US-005.3.2 | Como administrador, quiero analizar las causas de mortalidad para tomar acciones preventivas | - Reporte por causa de muerte<br>- Tendencias por período<br>- Comparativo por estancia<br>- Alertas de patrones anormales | 5 |

---

### EPIC-006: Gestión Multi-Estancia

#### FEAT-006.1: Dashboard Consolidado

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-006.1.1 | Como propietario, quiero ver un resumen de todas mis estancias para tener visión global | - KPIs consolidados: animales, ventas, alertas<br>- Resumen por estancia<br>- Gráficos de tendencias<br>- Selector de período | 8 |
| US-006.1.2 | Como propietario, quiero comparar el rendimiento entre estancias para identificar oportunidades | - Métricas lado a lado<br>- Indicadores de variación<br>- Ranking por métrica<br>- Exportación de comparativo | 5 |

---

### EPIC-007: Integración Contable

#### FEAT-007.1: Asientos Automáticos

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-007.1.1 | Como contador, quiero que las ventas generen asientos automáticos para evitar carga manual | - Asiento al completar venta<br>- Cuentas correctas (Caja/Ventas)<br>- Referencia a operación<br>- Estado de sincronización | 8 |
| US-007.1.2 | Como contador, quiero que las compras generen asientos automáticos para control financiero | - Asiento al registrar compra<br>- Cuentas correctas (Activo/Proveedores)<br>- Clasificación por tipo de compra<br>- Vinculación con factura | 8 |

#### FEAT-007.3: Sincronización Starsoft

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-007.3.1 | Como contador, quiero sincronizar los asientos con Starsoft para contabilidad unificada | - Botón de sincronización manual<br>- Sincronización automática programable<br>- Log de sincronización<br>- Manejo de errores | 8 |
| US-007.3.2 | Como contador, quiero ver el estado de sincronización para identificar pendientes | - Lista de asientos pendientes<br>- Estado por asiento<br>- Reintento de fallidos<br>- Reporte de inconsistencias | 5 |

---

### EPIC-008: Movilidad en Campo

#### FEAT-008.1: App Móvil Offline

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-008.1.1 | Como capataz, quiero usar la app sin conexión para trabajar en zonas sin señal | - Todas las funciones operativas sin internet<br>- Datos almacenados localmente<br>- Indicador de modo offline<br>- Cola de sincronización visible | 13 |
| US-008.1.2 | Como capataz, quiero que mis registros se sincronicen automáticamente al conectar | - Detección automática de conexión<br>- Sincronización en background<br>- Confirmación de envío exitoso<br>- Resolución de conflictos | 8 |

#### FEAT-008.2: Registro en Campo

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-008.2.1 | Como capataz, quiero registrar mortalidad desde el campo para documentación inmediata | - Formulario simplificado<br>- Scanner QR integrado<br>- Captura de foto<br>- GPS automático<br>- Confirmación visual | 5 |
| US-008.2.2 | Como capataz, quiero registrar nacimientos desde el campo para alta inmediata | - Identificación de madre por QR<br>- Datos básicos de cría<br>- Foto opcional<br>- Generación de ID temporal | 5 |
| US-008.2.3 | Como capataz, quiero registrar vacunaciones aplicadas para cumplimiento sanitario | - Scanner de animal y lote<br>- Selección de vacuna<br>- Fecha y hora automática<br>- Contador de aplicaciones | 5 |

---

### EPIC-009: Integraciones Oficiales

#### FEAT-009.2: Integración SIGOR

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-009.2.1 | Como encargado, quiero enviar las guías de remisión a SIGOR para cumplimiento legal | - Envío automático al generar guía<br>- Confirmación de recepción<br>- Código de SIGOR almacenado<br>- Manejo de rechazos | 13 |
| US-009.2.2 | Como encargado, quiero consultar el estado de mis guías en SIGOR para seguimiento | - Consulta desde el sistema<br>- Estados actualizados<br>- Historial de envíos<br>- Alertas de vencimiento | 5 |

#### FEAT-009.4: Integración SET

| ID | Historia de Usuario | Criterios de Aceptación | Story Points |
|----|---------------------|------------------------|--------------|
| US-009.4.1 | Como contador, quiero emitir facturas electrónicas para cumplimiento tributario | - Generación desde venta<br>- Formato oficial SET<br>- Timbrado automático<br>- Almacenamiento de CDC | 13 |
| US-009.4.2 | Como contador, quiero consultar el estado de mis facturas en SET para control | - Estado de timbrado<br>- Facturas rechazadas<br>- Reenvío de pendientes<br>- Reporte de facturación | 5 |

---

## 6. Roadmap de Desarrollo

### Fase 1: MVP (Q1-Q2 2025)
**Objetivo:** Sistema operativo básico con trazabilidad

| Épica | Features Incluidas | Prioridad |
|-------|-------------------|-----------|
| EPIC-001 | FEAT-001.1, FEAT-001.2, FEAT-001.3 | Alta |
| EPIC-002 | FEAT-002.1, FEAT-002.2 | Alta |
| EPIC-003 | FEAT-003.1 | Alta |
| EPIC-004 | FEAT-004.1, FEAT-004.2 | Alta |
| EPIC-005 | FEAT-005.1, FEAT-005.3 | Alta |

### Fase 2: Integración SIGOR (Q3 2025)
**Objetivo:** Cumplimiento regulatorio completo

| Épica | Features Incluidas | Prioridad |
|-------|-------------------|-----------|
| EPIC-003 | FEAT-003.2, FEAT-003.3 | Alta |
| EPIC-005 | FEAT-005.2, FEAT-005.4, FEAT-005.5 | Alta |
| EPIC-009 | FEAT-009.1, FEAT-009.2, FEAT-009.3 | Alta |

### Fase 3: Multi-Estancia y Contable (Q4 2025)
**Objetivo:** Gestión empresarial completa

| Épica | Features Incluidas | Prioridad |
|-------|-------------------|-----------|
| EPIC-006 | FEAT-006.1, FEAT-006.2, FEAT-006.3 | Alta |
| EPIC-007 | FEAT-007.1, FEAT-007.2, FEAT-007.3, FEAT-007.4 | Alta |
| EPIC-009 | FEAT-009.4 | Alta |

### Fase 4: Movilidad y IA (2026)
**Objetivo:** Operaciones de campo y análisis predictivo

| Épica | Features Incluidas | Prioridad |
|-------|-------------------|-----------|
| EPIC-008 | FEAT-008.1, FEAT-008.2, FEAT-008.3, FEAT-008.4 | Alta |
| EPIC-010 (Futuro) | IA Predictiva Sanitaria | Media |

---

## 7. Métricas de Éxito

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| Adopción de usuarios | 50 productores en 6 meses | Usuarios activos |
| Trazabilidad | 100% de animales registrados | Cobertura de inventario |
| Cumplimiento SENACSA | 0 multas por incumplimiento | Auditorías pasadas |
| Eficiencia administrativa | +40% vs. método manual | Tiempo de operaciones |
| Errores en stock | -90% vs. método manual | Discrepancias en auditoría |
| Satisfacción del usuario | NPS > 50 | Encuestas trimestrales |

---

## 8. Glosario

| Término | Definición |
|---------|------------|
| **SENACSA** | Servicio Nacional de Calidad y Salud Animal |
| **SIAP** | Sistema de Información Agropecuaria Paraguayo |
| **SIGOR** | Sistema de Guías de Remisión Oficiales |
| **COTAs** | Certificados de Origen y Tránsito de Animales |
| **SET** | Subsecretaría de Estado de Tributación |
| **Starsoft** | Sistema contable popular en Paraguay |
| **Ley 7221/2023** | Ley de Trazabilidad Individual Obligatoria |
| **RFID** | Identificación por Radio Frecuencia |
| **QR** | Quick Response Code |

---

## 9. Apéndice: Definición de Prioridades

| Prioridad | Descripción | Criterio |
|-----------|-------------|----------|
| **Alta** | Funcionalidad esencial para el MVP o cumplimiento legal | Sin esta feature el sistema no es viable |
| **Media** | Funcionalidad importante para la experiencia completa | Mejora significativamente la operación |
| **Baja** | Funcionalidad deseable pero no crítica | Nice-to-have, puede esperar |

---

*Documento generado por Product Owner - CLT S.A.*
*Última actualización: 2025*
