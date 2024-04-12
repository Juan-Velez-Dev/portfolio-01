# Documentación Portfolio Juan Velez -->

## Bottones

### Componente boton

Este componente se hizo de tal forma que se pudiera reutilizar en diferentes partes del codigo, modularizando asi el componente con su logica.

```java
├── components
│   ├── common
│   │ └── button
│   │ │ ├── button-string
│   │ │ │ └── button-string.ts
│   │ │ ├── button-types
│   │ │ │ └── button-types.ts
│   │ │ ├── helpers
│   │ │ │ └── button-string-create.ts
│   │ │ │ └── button-href-create.ts
│   │ │ └── Button.txt
└── ...
```

**button-string.ts**: En este archivo es donde se modifica el valor del string que tiene el boton, o añadir directamente mas valores del string. Se debe de añadir en la logica de la funcion button-string-create.ts ubicado en la carpeta de helpers.

**button-types.ts**: Estan los tipos del boton, "contact", "more".

**button-string-create.ts**: Esta la logica, para reenderiza el string del boton.

**button-href-create.ts**: Esta la logica, para agregar el valor al href.
