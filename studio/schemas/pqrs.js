export default {
  title: "PQRS",
  name: "pqrs",
  type: "document",
  fields: [
    {
      title: "Preguntas",
      name: "preguntas",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "preguntas",
        maxLength: 96,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
        title: "Poster",
        name: "poster",
        type: "image",
        options: {
            hotspot: true,
          },
      },
  ],
};
