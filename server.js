/* username: admin
 password: 7I2T9qfFSDHHXngb */

import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Card from "./models/Card.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:7I2T9qfFSDHHXngb@cluster0.63ce3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  // useNewUrlParser: true,
  // useCreateIndex: true,
  // useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Success"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Card.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`Listen on localhost ${port}`));
