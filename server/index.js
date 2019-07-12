require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controllers/controller.js");
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
    session({
      secret: SESSION_SECRET,
      resave: true,
      saveUninitialized: false
    })
  );

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/house', ctrl.addHouse)

app.listen(SERVER_PORT, () => {
  console.log(`Cruisin for a bruisin on port ${SERVER_PORT}`);
});
