import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
const PORT = process.env.PORT || 3000;
const server = app.listen(process.env.PORT || 1234, (err) => {
    if (err) {
        console.log(chalk.red.bold('server crashed...', err));
    } else {
        console.log(chalk.blue.bold('server is running....', server.address().port));
        //createConnection();
    }
})