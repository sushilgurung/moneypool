import express, { NextFunction, Request, Response } from 'express';
import { userRouter } from './interfaces/routes/user';
import { AuthService} from './application/services/auth';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});


