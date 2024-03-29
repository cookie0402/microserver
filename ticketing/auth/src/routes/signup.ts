import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { User } from '../models/user';
import { InvalidRequestError } from "../errors/invalid-request-error";

import { validateRequest } from '../middlewares/validate-request';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Email must be valid"),

    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {


    // console.log("Creating a user...");
    // throw new DatabaseConnectionError();

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (existingUser) {
        throw new InvalidRequestError('Email in use');
      }
    }

    const user = User.build({ email, password });
    await user.save();
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt
    };

    res.status(201).send(user);

    res.send({});
  }
);

export { router as signupRouter };
