const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const app = express();
const port = 3003;

app.use(cors());

const url = "mongodb://database:27017";
const client = new MongoClient(url, { useUnifiedTopology: true });

app.get("/users", async (req, res) => {
  await client.connect();
  const users = await client.db("test").collection("users").find().toArray();
  console.log(users);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
