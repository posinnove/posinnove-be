import express from 'express';
import userRoutes from './src/routes/user.routes'; 

const app = express();

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

export default app;