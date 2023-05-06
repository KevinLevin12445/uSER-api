const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./Routes/userRoutes");

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/users", userRoutes);

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
