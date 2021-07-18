const express = require("express");
const cors = require('cors');
const IndexRoutes = require("./Routes/index.routes.js");
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use("/", express.static('Public'));
app.use("/api",IndexRoutes);

module.exports = app;