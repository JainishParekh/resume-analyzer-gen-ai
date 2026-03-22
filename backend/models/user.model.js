import mongoose from "mongoose";

// TODO: Have to add timestamp to this model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
        match: [/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, "Email is invalid"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
})

const userModel = mongoose.model("users", userSchema);
export default userModel;