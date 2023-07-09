export default {
    name: "houses",
    title: "Lanzamientos exclusivos - Casa para arrendar",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Titulo",
        type: "string",
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      },
      {
        name: "image",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "habitaciones",
        title: "Numero de habitacion",
        type: "string"
      },
      {
        name: "bathroom",
        title: "Numero de baños",
        type: "string"
      },
      {
        name: "cocinas",
        title: "Numero de cocinas",
        type: "string"
      },
      {
        name: "patios",
        title: "Numero de patios",
        type: "string"
      },
      {
        title: 'sala',
        name: 'sala',
        type: 'boolean'
      },
      {
        title: 'comedor',
        name: 'comedor',
        type: 'boolean'
      },
      {
        title: 'parqueadero',
        name: 'parqueadero',
        type: 'boolean'
      },
      {
        title: 'piscina',
        name: 'piscina',
        type: 'boolean'
      },
      {
        name: "address",
        title: "Dirección",
        type: "string"
      },
      {
        name: "price",
        title: "Precio",
        type: "string"
      },
      {
        name: "valoracion",
        title: "valoracion - estrellas",
        type: "number"
      },
      
      {
        name: "order",
        title: "Orden- Describe segun la importancia de inmueble siendo 1 muy importante y entre más grande el numero menor importancia",
        type: "number"
      },
      {
        name: "detalle",
        title: "Detalle de la propiedad",
        type: "string"
      },
      {
        name: "imagedos",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imagetres",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imagecuatro",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imagecinco",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imageseis",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imagesiete",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imageocho",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imagenueve",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: "imagediez",
        title: "Imagen de casa",
        type: "image",
        option: {
          hotspot: true,
        },
      },
    ],
  };
  