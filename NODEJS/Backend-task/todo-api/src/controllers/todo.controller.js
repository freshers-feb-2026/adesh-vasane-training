// src/controllers/todo.controller.js

import prisma from "../utils/prismaClient.js";

// POST /api/todos
export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;

    if (!title) {
      return res.status(400).json({ message: 'Title is required.' });
    }

    await prisma.todo.create({
      data: {
        title,
        description: description || null,
        userId,
      },
    });

    return res.status(201).json({ message: 'Todo created' });
  } catch (error) {
    console.error('createTodo error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// GET /api/todos
export const getTodos = async (req, res) => {
  try {
    const userId = req.user.id;

    const todos = await prisma.todo.findMany({
      where: { userId },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
      },
    });

    return res.status(200).json(todos);
  } catch (error) {
    console.error('getTodos error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// PUT /api/todos/:id
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const { title, description, status } = req.body;

    const todo = await prisma.todo.findUnique({ where: { id: parseInt(id) } });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found.' });
    }

    if (todo.userId !== userId) {
      return res.status(403).json({ message: 'Access denied. You can only update your own todos.' });
    }

    const validStatuses = ['pending', 'completed'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status. Must be pending or completed.' });
    }

    const updated = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: {
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(status && { status }),
      },
    });

    return res.status(200).json({ message: 'Todo updated', todo: updated });
  } catch (error) {
    console.error('updateTodo error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// DELETE /api/todos/:id
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const todo = await prisma.todo.findUnique({ where: { id: parseInt(id) } });

    if (!todo) {
      return res.status(404).json({ message: 'Todo not found.' });
    }

    if (todo.userId !== userId) {
      return res.status(403).json({ message: 'Access denied. You can only delete your own todos.' });
    }

    await prisma.todo.delete({ where: { id: parseInt(id) } });

    return res.status(200).json({ message: 'Todo deleted' });
  } catch (error) {
    console.error('deleteTodo error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};