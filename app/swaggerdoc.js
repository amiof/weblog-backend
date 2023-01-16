const swaggerDoc = require("swagger-jsdoc");
const swaggerdoc = swaggerDoc({
  swaggerDefinition: {
    openapi: "3.0.3",

    info: {
      title: "weblog doc",
      version: "1.0.0",
      license: {
        name: "BSD",
      },
      contact: {
        name: "amir-meghrazi",
        email: "arm131313@gmail.com",
        url: "http://localhost:4000",
      },
      description: "best weblog :)",
    },
    tags: [
      { name: "category", description: "category of blog " },
      { name: "admin", description: "admin tags is heare" },
      { name: "api", description: "all general api " },
      { name: "user", description: "all user api" },
    ],
  },
  servers: [
    {
      url: "http;//localhost:4000",
    },
  ],

  apis: ["./app/routes/**/*.js"],
});

module.exports = {
  swaggerdoc,
};
