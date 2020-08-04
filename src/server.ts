import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import Routes from './routes/route';

dotenv.config();

const app = express()

app.use(express.json());
app.use(Routes);

app.get('/', (req, res) => {
 return res.json({ message: 'Proffy API em execução' })
});

app.listen(process.env.API_PORT, () => {
 console.log(`listem in port: ${process.env.API_PORT}`);
});


