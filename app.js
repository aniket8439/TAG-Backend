import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { createConnection } from './src/shared/db/connection.js';
import registerRoutes from './src/modules/Authentication/register/routes/register-routes.js';
import loginRoutes from './src/modules/Authentication/login/routes/login-routes.js';
import postRoutes from './src/modules/Post/routes/post-routes.js';
// import likeRoutes from './src/modules/Likes/routes/like-routes.js';
// import commentRoutes from './src/modules/comments/routes/comment-routes.js';


const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/',registerRoutes);
app.use('/',loginRoutes);
app.use('/',postRoutes);
// app.use('/',likeRoutes);
// app.use('/',commentRoutes);
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// Start server
const PORT = process.env.PORT || 1234;
const server = app.listen(process.env.PORT || 1234, (err) => {
    if (err) {
        console.log(chalk.red.bold('server crashed...', err));
    } else {
        console.log(chalk.blue.bold('server is running....', server.address().port));
        createConnection();
    }
})