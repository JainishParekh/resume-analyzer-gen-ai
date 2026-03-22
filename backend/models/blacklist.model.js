import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required"]
    }
}, {
    timestamps: true
})

const blacklistTokenModel = mongoose.model("blacklistTokens", blacklistSchema);

export default blacklistTokenModel