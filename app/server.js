const express = require("express");
const app = express();
const swaggerui = require("swagger-ui-express");
const swaggerDoc = require("swagger-jsdoc");
const http = require("http");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const { allroutes } = require("./routes/allroutes");
const createHttpError = require("http-errors");

module.exports = class application {
  constructor(port, url) {
    this.connectMongoDB(url);
    this.createServer(port);
    this.configApplication();
    this.routes();
    this.errorHandler();
  }

  configApplication() {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(morgan("dev"));
    app.use(express.static(path.join(__dirname, "..", "pulblic")));
    app.use(
      "/api-doc",
      swaggerui.serve,
      swaggerui.setup(
        swaggerDoc({
          swaggerDefinition: {
            info: {
              title: "weblog doc",
              version: "3.0.0",
              license: {
                name: "MIT",
              },
              contact: {
                name: "amir-meghrazi",
                email: "arm131313@gmail.com",
                url: "http://localhost:4000",
              },
              description: "best weblog :)",
            },
            tags: [
              { name: "admin", description: "admin tags is heare" },
              { name: "api", description: "all general api " },
              { name: "auth", description: "all authentication api" },
            ],
          },
          servers: [
            {
              url: "http;//localhost:4000",
            },
          ],

          apis: ["./app/routes/*.js"],
        })
      )
    );
  }

  connectMongoDB(url) {
    mongoose.set("strictQuery", false);
    mongoose.connect(url, (error) => {
      if (!error) return console.log("connected to DB");
      return console.log(error);
    });
    mongoose.connection.on("connected", () => {
      console.log("mongose connected to mongoDB");
    });
  }

  createServer(PORT) {
    http.createServer(app).listen(PORT, (error) => {
      if (!error)
        return console.log(
          `server is up in address : http://localhost:${PORT}`
        );
    });
  }

  routes() {
    app.use(allroutes);
  }

  errorHandler() {
    app.use((req, res, next) => {
      next(createHttpError.NotFound("page not found error-404"));
    });
    app.use((error, req, res, next) => {
      const serverError = createHttpError.InternalServerError;
      const statusCode = error.status || serverError.status || 500;
      const message = error.message || serverError.message;
      return res.status(statusCode).json({
        statusCode,
        message,
      });
    });
  }
};
