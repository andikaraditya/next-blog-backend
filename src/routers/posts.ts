import express, { Request, Response } from "express";
import { database } from "../zapatos";
import getPool from "../database/pool";
import authentication from "../middlewares/authentication";

const posts = express.Router();

posts.get("/posts", async (req, res) => {
  const { page = 1 } = req.query;
  const posts = await database
    .select(
      "posts",
      {},
      {
        offset: Number((Number(page) - 1) * 5),
        limit: 5,
        order: {
          by: "created_at",
          direction: "DESC"
        }
      }
    )
    .run(getPool(process.env.DATABASE_URL!));
  res.status(200).json({
    status: "success",
    message: "success get posts",
    data: posts
  });
});

posts.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const post = await database
      .selectOne("posts", {
        id: Number(id)
      })
      .run(getPool(process.env.DATABASE_URL!));
    if (!post) {
      throw { code: 404, message: "post not found" };
    }
    res.status(200).json({
      status: "success",
      message: "success get post by id",
      data: post
    });
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    });
  }
});

posts.use(authentication);

posts.post("/posts", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      throw { code: 400, message: "all form must be filled" };
    }
    const post = await database
      .insert("posts", {
        title,
        content,
        created_at: new Date(),
        updated_at: new Date()
      })
      .run(getPool(process.env.DATABASE_URL!));

    res.status(201).json({
      status: "success",
      message: "post created succesfully",
      data: post
    });
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    });
  }
});

posts.patch("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const post = await database
      .update(
        "posts",
        {
          ...body,
          updated_at: new Date()
        },
        {
          id: Number(id)
        }
      )
      .run(getPool(process.env.DATABASE_URL!));

    res.status(200).json({
      status: "success",
      message: "post updated succesfully",
      data: post
    });
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    });
  }
});

export default posts;
