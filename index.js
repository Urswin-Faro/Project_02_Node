import express from 'express'
import mysql from 'mysql2/promise'
import {config} from 'dotenv'
config ()
import cors from 'cors'
import employeesRouter from './routes/employeesRouter.js'
// import attendanceRouter from './routes/attendanceRouter.js'

const app = express();
const port =process.env.port || 3030;

app.use(cors())
app.use(express.json());

app.get('/employ',(req,res)=>{
    res.json({message: 'Heyo Vue is working'});
})
app.use('/employees', employeesRouter),
// app.use('/attendance',attendanceRouter)

app.listen(port,()=> {
    console.log(`http://localhost:${port}`);
    
})

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

export {pool}