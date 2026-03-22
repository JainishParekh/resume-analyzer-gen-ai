import { Router } from 'express';

import authControllers from '../controllers/auth.controller.js';

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @description Route to handle user registration
 * @access Public
 */
authRouter.post('/register', authControllers.registerUserController)

/**
 * @route POST /api/auth/login
 * @description Route to handle user login with email and password
 * @access Public
 */
authRouter.post('/login', authControllers.loginUserController)

export default authRouter;