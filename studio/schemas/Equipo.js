export default {
    name: "equipo",
    title: "Equipo",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Nombre - integrante del equipo",
        type: "string",
      },
      {
        name: "image",
        title: "Imagen del integrante del equipo",
        type: "image",
        option: {
          hotspot: true,
        },
      },
      {
        name: 'descripcion',
        title: 'Descripción del cargo de trabajo',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },
      
      {
        name: "order",
        title: "Order",
        type: "number"
      },
    ],
  };
  