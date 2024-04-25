import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import posts from "./routers/posts";
import users from "./routers/users";
const app = express();
const port = 3000;

(async function () {
  app.use(cors());
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use(users);
  app.use(posts);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`http://localhost:${port}/`);
  });
})();
