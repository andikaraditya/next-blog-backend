import express from "express";
import cors from "cors";
import posts from "./routers/posts";
const app = express();
const port = 3000;

(async function () {
  app.use(cors());
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use(posts);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`http://localhost:${port}/`);
  });
})();
