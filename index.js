const application = require("./app/server");

const port = 4000;
const url = "mongodb://localhost:27017/weblogDB";
new application(port, url);
