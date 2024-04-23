import express, { Request, Response } from "express";
import { database } from "../zapatos";
import getPool from "../database/pool";

const posts = express.Router();

posts.get("/posts", async (req, res) => {
  const posts = await database.select("posts", {}).run(getPool(process.env.DATABASE_URL!))
  res.status(200).json({
    status: "success",
    message: "succes get posts",
    data: posts
  })
});

posts.post("/posts", async (req, res) => {
  try {
    const {title, content} = req.body
    
    if (!title || !content) {
      throw {code: 400, message: "all form must be filled"}
    }
    const post = await database.insert("posts", {
      title,
      content,
      created_at: new Date(),
      updated_at: new Date()
    }).run(getPool(process.env.DATABASE_URL!))

    res.status(201).json({
      status: "success",
      message: "post created succesfully",
      data: post
    })
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    })
  }
})

posts.patch("/posts/:id", async (req, res) => {
  try {
    const {id} = req.params
    const {title, content} = req.body
    
    if (!title && !content) {
      throw {code: 400, message: "all form must be filled"}
    }
    const post = await database.update("posts", {
      title,
      content
    }, {
      id: Number(id)
    }).run(getPool(process.env.DATABASE_URL!))

    res.status(200).json({
      status: "success",
      message: "post updated succesfully",
      data: post
    })
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    })
  }
})

export default posts;
