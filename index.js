const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const axios = require("axios");
const qs = require("qs");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${req.query.name}&apiKey=${process.env.API_KEY}`
    );
    return res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?title=${req.query.title}&apiKey=${process.env.API_KEY}`
    );
    return res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/comics/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.id}?apiKey=${process.env.API_KEY}`
    );
    return res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
