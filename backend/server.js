import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
import { notFound , errorHandler} from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 6000;



const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready')
})
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>console.log(`Server started on port ${port}`));

/**
 *  -POST  /api/users - Register a user
 *   POST  /api/users/auth - Authenticate  a user and get token
 *   POST  /api/users/logout - Logout user and clear cookie
 *   GET /api/users/profile - Get user profile
 *   PUT /api/users/profile - update profile
 * 
 */