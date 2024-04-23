import express, { Request, Response } from "express";

const posts = express.Router();

posts.get("/posts", async (req, res) => {
  res.send("get posts");
});

export default posts;
