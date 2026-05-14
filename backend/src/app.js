import express from 'express';
import cors from "cors";
import CookieParser from 'cookie-parser';

import authRouter from '../routes/auth.routes.js';

const app = express();

const dynamicCORSConfig = (req, callback) => {
    let corsOptions = { origin: "http://localhost:5173", methods: ['GET', 'PUT', 'POST', 'PATCH'] }
    if (req.path.startsWith("/api/v1/auth/")) {
        corsOptions["credentials"] = true
    }
    callback(null, corsOptions);
}

app.use(express.json());
app.use(CookieParser());
app.use(cors(dynamicCORSConfig))
/** 
 * Using all the required routers here
*/
app.use("/api/v1/auth", authRouter);

export default app;