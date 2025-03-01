import express, { Request, Response } from 'express';
import prisma from './prisma';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
