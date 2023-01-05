const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4004/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4005/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.listen(4006, () => {
  console.log("Listening on 4006");
});