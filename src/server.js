const express = require("express");
const IndexRoutes = require("./Routes/index.routes.js");
const cors = require('cors');
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(IndexRoutes);
module.exports = app;