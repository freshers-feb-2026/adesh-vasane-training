import bcrypt from "bcrypt";
import prisma from "../utils/prismaClient.js";
import { generateToken } from "../utils/jwt.js";

const SALT_ROUNDS = 10;

// POST /api/admin/signup
export const adminSignup = async (req, res) => {  
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, and password are required." });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "admin",
      },
    });

    return res.status(201).json({
      message: "Admin registered successfully",
    });
  } catch (error) {
    console.error("adminSignup error:", error);
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// POST /api/admin/signin
export const adminSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.role !== "admin") {
      return res.status(401).json({
        message: "Invalid credentials.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials.",
      });
    }

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
    console.error("adminSignin error:", error);
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// GET /api/admin/users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error("getAllUsers error:", error);
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};