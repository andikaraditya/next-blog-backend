import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { database } from "../zapatos";
import { pool } from "../database/pool";

export default async function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw { code: 401, message: "authentication failed" };
    }
    const decoded = <{ userId: string; iat: number }>(
      jwt.verify(authorization!, process.env.JWT_SECRET!)
    );

    const user = await database
      .selectOne("users", {
        id: decoded.userId!
      })
      .run(pool);
    if (!user) {
      throw { code: 401, message: "authentication failed" };
    }
    next();
  } catch (error) {
    res.status(error.code).json({
      status: "error",
      message: error.message
    });
  }
}
