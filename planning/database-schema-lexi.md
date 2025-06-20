# Esquema de Base de Datos para LEXI

## Entidades Principales
- **USUARIO**: id, nombre, correo, rol
- **LECCION**: id, titulo, descripcion, nivel
- **PROGRESO**: id, usuario_id, leccion_id, fecha, puntaje
- **RECOMENDACION**: id, usuario_id, leccion_id, motivo

## Diagrama ER
```mermaid
erDiagram
  USUARIO {
    int id
    string nombre
    string correo
    string rol
  }
  LECCION {
    int id
    string titulo
    string descripcion
    string nivel
  }
  PROGRESO {
    int id
    int usuario_id
    int leccion_id
    date fecha
    float puntaje
  }
  RECOMENDACION {
    int id
    int usuario_id
    int leccion_id
    string motivo
  }
  USUARIO ||--o{ PROGRESO : tiene
  LECCION ||--o{ PROGRESO : es_parte_de
  USUARIO ||--o{ RECOMENDACION : recibe
  LECCION ||--o{ RECOMENDACION : sugerida_en
```

## Descripción
El modelo permite registrar usuarios, lecciones, el progreso de cada usuario en cada lección y recomendaciones personalizadas. Así, LEXI puede ofrecer aprendizaje adaptativo, seguimiento y motivación personalizada.
