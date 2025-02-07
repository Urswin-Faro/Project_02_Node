import express from 'express';
import positionsRoutes from './routes/positionsRoutes.js'
import cors from 'cors'
// Load environment variables
 

const app = express();
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json())
 
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
    })
    
app.use('/position',positionsRoutes);