# Plantilla de Issue

## Título
Definir el esquema de base de datos para LEXI

### Descripción
Diseñar y documentar el modelo de datos principal para LEXI, incluyendo entidades, atributos y relaciones necesarias para soportar el historial de aprendizaje, progreso y recomendaciones personalizadas.

**Ejemplo Narrativo:**  
Valentina es una usuaria de LEXI que espera que su progreso y recomendaciones se almacenen correctamente. El sistema debe permitir registrar usuarios, lecciones, progreso y recomendaciones, asegurando integridad y escalabilidad.

---

## Historias de Usuario Cubiertas
- US-001: Como usuario, quiero que mi progreso se guarde para poder continuar donde lo dejé.
- US-002: Como usuario, quiero recibir recomendaciones personalizadas basadas en mi historial.

_Ve `user-stories-template-es.md`._

---

## Requisitos y Documentos de Apoyo
- project-requirements-es.md, sección “Modelo de datos”
- database-schema-template-es.md, entidades: Usuario, Lección, Progreso, Recomendación
- ui-wireframes-template-es.md, wireframes de historial y recomendaciones

---

## Criterios de Aceptación
- [ ] El diagrama ER refleja todas las entidades y relaciones necesarias.
- [ ] La documentación describe claramente cada entidad y su propósito.
- [ ] El modelo soporta las funcionalidades de historial y recomendaciones.
- [ ] (Agrega cualquier criterio adicional relevante para esta funcionalidad.)

---

## Dependencias
- Depende de:
  - US-001: Definición de requerimientos funcionales

---

## Stubbing y Mocks
- Se pueden usar ejemplos ficticios de usuarios, lecciones y progreso para validar el modelo.
