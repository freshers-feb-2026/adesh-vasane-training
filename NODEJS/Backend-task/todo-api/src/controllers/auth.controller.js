// src/controllers/auth.controller.js

import bcrypt from "bcrypt";
import prisma from "../utils/prismaClient.js";
import { generateToken } from "../utils/jwt.js";

const SALT_ROUNDS = 10;

// POST /api/auth/signup
export const userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required.",
      });
    }

    // check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email already in use.",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "user",
      },
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });

  } catch (error) {
    console.error("userSignup error:", error);
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};


// POST /api/auth/signin
export const userSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    // find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.role !== "user") {
      return res.status(401).json({
        message: "Invalid credentials.",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials.",
      });
    }

    // generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.error("userSignin error:", error);
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};