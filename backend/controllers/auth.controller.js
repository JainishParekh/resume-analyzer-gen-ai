import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModel from "../models/user.model.js";


/**
 * @name createToekn
 * @description Helper function to create the token
 * @param {Object} user - the user model object
 * @returns {String} token - the generated JWT token
 */
const createToken = (user) => {
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" })
    return token;
}

/**
 * @name registerUserController
 * @description Controller to handle user registration
 * @route POST /api/auth/register
 * @access Public
 */
const registerUserController = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Bad request. Please, provide username, email and password!" })
    }

    const isUserAlreadyExists = await userModel.findOne({ $or: [{ username }, { email }] })

    if (isUserAlreadyExists) {

        if (isUserAlreadyExists.username === username) {
            return res.status(400).json({ message: "Account with this username already exists!" })
        }

        return res.status(400).json({ message: "Account with this email already exists!" })
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await userModel.create({ username, email, password: passwordHash })

    const token = createToken(user)

    res.cookie("token", token)
    res.status(201).json({ message: "User registered successfully!", user: { id: user._id, username: user.username, email: user.email } })
}

/**
 * @name loginUserController
 * @description Controller to handle user login
 * @route POST /api/auth/login
 * @access Public
 */
const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ mesage: "Bad request. Please provide email and password!" })
    }

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({ mesage: "Invalid email or password!" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({ mesage: "Invalid email or password!" })
    }

    const token = createToken(user)

    res.cookie("token", token)
    res.status(200).json({ message: "User logged in successfully!", user: { id: user._id, username: user.username, email: user.email } })
}

const authControllers ={
    registerUserController,
    loginUserController
}

export default authControllers;