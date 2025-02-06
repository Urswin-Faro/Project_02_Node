import express from 'express';
import mysql from 'mysql2/promise';
import { config } from 'dotenv';
config();
import cors from 'cors';
import employeesRouter from './routes/employeesRouter.js';
import { getEmployees } from './model/employeesModel.js';

const app = express();
const port = process.env.PORT || 3030;  // Updated to use process.env.PORT

app.use(cors());
app.use(express.json());

app.get('/Employees', async (req, res) => {  // Await the async function
    try {
        const employees = await getEmployees();  // Await async data
        res.json({ employees });
    } catch (error) {
        res.status(500).json({ error: "Error fetching employees", details: error.message });
    }
});

app.use('/Employees', employeesRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
