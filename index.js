
import express from 'express';
import mysql from 'mysql2/promise';
import { config } from 'dotenv';
config();
import cors from 'cors';
import attendanceRouter from './routes/attendanceRouter.js'
import { getAttendance } from './model/attendanceModel.js'
import employeesRouter from './routes/employeesRouter.js';
import { getEmployees } from './model/employeesModel.js';
import reviewRouter from './routes/reviewRoutes.js';
import payrollRoutes from './routes/payrollRouter.js'
app.use('/payroll',payrollRoutes);
app.use('/review',reviewRouter);

const port = process.env.PORT || 3030;  // Updated to use process.env.PORT

 const app = express();
app.use(cors());
app.use(express.json());

app.get('/payroll', async (req, res) => {
    
})

app.get('/Employees', async (req, res) => {  // Await the async function
    try {
        const employees = await getEmployees();  // Await async data
        res.json({ employees });
    } catch (error) {
        res.status(500).json({ error: "Error fetching employees", details: error.message });
    }
});
app.use('/attendance',attendanceRouter)

app.get('/attendance',async (req,res)=>{
    res.json({attendance: await getAttendance()})
});

app.use('/Employees', employeesRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

 

