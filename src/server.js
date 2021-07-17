const express = require("express");
const IndexRoutes = require("./Routes/index.routes.js");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 3000);
app.use(IndexRoutes);
module.exports = app;