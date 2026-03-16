// src/index.js

import 'dotenv/config';
import express from 'express';

import authRoutes from './routes/auth.routes.js';
import todoRoutes from './routes/todo.routes.js';
import adminRoutes from './routes/admin.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Todo API is running.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/admin', adminRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});


app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});