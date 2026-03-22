import express from 'express';

import authRouter from '../routes/auth.routes.js';

const app = express();

app.use(express.json());

/** 
 * Using all the required routers here
*/
app.use("/api/v1/auth", authRouter);

export default app;