import express from "express";
import bcrypt from "bcryptjs";
import { database } from "../zapatos";
import getPool from "../database/pool";
import jwt from "jsonwebtoken";

const users = express.Router();

users.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw {code: 400, message: "all form must be filled"}
    }
    if (email !== "andikaraditya1@gmail.com") {
      throw { code: 400, message: "you are not allowed to register" };
    }
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    
    await database.insert("users", {
      name,
      email,
      password: hash
    }).run(getPool(process.env.DATABASE_URL!))
    res.status(201).json({
      status: "success",
      message: "account has been created"
    })
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    });
  }
});

users.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body
    if (!email || !password) {
      throw { code: 400, message: "all form must be filled" };
    }
    const user = await database.selectOne("users", {
      email
    }).run(getPool(process.env.DATABASE_URL!))
    if (!user) {
      throw {code: 400, message: "email or password are incorrect"}
    }
    const isPasswordMatch = bcrypt.compareSync(password, user.password!)
    if (!isPasswordMatch) {
      throw {code: 400, message: "email or password are incorrect"}
    }
    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!)
    res.status(200).json({
      status: "success",
      message: "login successfull",
      data: token
    })
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    });
  }
})

export default users