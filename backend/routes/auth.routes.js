import { Router } from 'express';

import authControllers from '../controllers/auth.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';

const authRouter = Router();

/**
 * @route POST /auth/register
 * @description Route to handle user registration
 * @access Public
 */
authRouter.post('/register', authControllers.registerUserController)

/**
 * @route POST /auth/login
 * @description Route to handle user login with email and password
 * @access Public
 */
authRouter.post('/login', authControllers.loginUserController)

/**
 * @route GET /auth/logout
 * @description Route to handle user logout by clearing the token cookie and blacklisting the token
 * @access Public
 */
authRouter.get('/logout', authControllers.logoutUserController)

/**
 * @route GET /auth/profile
 * @description Route to get the authenticated user's profile information
 * @access Private (requires authentication)
 */
authRouter.get("/profile", authUser, authControllers.getUserProfileController)

export default authRouter;