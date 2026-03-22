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

/**
 * @route GET /api/auth/logout
 * @description Route to handle user logout by clearing the token cookie and blacklisting the token
 * @access Public
 */
authRouter.get('/logout', authControllers.logoutUserController)

export default authRouter;