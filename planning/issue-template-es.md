# Plantilla de Issue

## Título
_¿Cuál es el título corto y descriptivo para este issue o funcionalidad?_

### Descripción
_Describe la funcionalidad o issue en detalle._

**Ejemplo Narrativo:**
Jane es una clienta frecuente que a menudo olvida lo que pidió la última vez. Cuando inicia sesión, debe ver una lista de sus pedidos anteriores, cada uno con detalles y un botón de "Volver a pedir". Esto le ayudará a repetir rápidamente compras pasadas, mejorando su experiencia y aumentando las ventas.
<small>(Solo ejemplo. Reemplaza con tu propia descripción y narrativa.)</small>

---

## Historias de Usuario Cubiertas
_¿Qué historias de usuario aborda este issue? Enumera por número y copia su texto de user-stories-template-es.md._

- US-001: Como cliente, quiero ver mis pedidos anteriores para recordar qué compré.  
- US-005: Como cliente, quiero ver los detalles de un pedido específico.  
  <small>(Solo ejemplos. Reemplaza con tus propias historias de usuario.)</small>

_Ve `user-stories-template-es.md`._

---

## Requisitos y Documentos de Apoyo
_¿Qué documentos o secciones apoyan este issue?_
- project-requirements-es.md, sección [sección o encabezado relevante]
- ui-wireframes-es.md, wireframes [1 y 2] para diseños y flujo
- database-schema-es.md, entidades: Pedido, Usuario
- api.md, endpoints: `/orders`, `/orders/{id}`
  <small>(Solo ejemplos. Reemplaza con tus propias historias de usuario.)</small>
---

## Criterios de Aceptación
_¿Qué debe ser cierto para que este issue se considere completo?_
- [ ] Todas las historias de usuario listadas arriba están completamente implementadas y testeables.
- [ ] La interfaz coincide con los wireframes proporcionados.
- [ ] Los datos se cargan desde el backend, usando el esquema y contratos API especificados.
- [ ] Gestiona correctamente los estados de carga, error y vacío.
- [ ] (Agrega cualquier criterio adicional relevante para esta funcionalidad.)
  <small>(Solo ejemplos. Reemplaza con tus propias historias de usuario.)</small>
---

## Dependencias
_¿Qué otros issues o funcionalidades deben completarse primero?_
- Depende de:
  - US-008: Autenticación de usuarios
  - US-010: Backend API de pedidos disponible  
    <small>(Solo ejemplo. Reemplaza según sea necesario.)</small>

---

## Stubbing y Mocks
_Si las dependencias no están listas, ¿qué stubs o datos mock se pueden usar para avanzar? Usa la documentación como contrato_
