const mongoose = require("mongoose");

// creating user schema for user model

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            trim: true,
            private: true
        },
        role: {
            type: String,
            enum: ['user', 'owner', 'admin'],
            default: 'user'
        },
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const user = mongoose.model("user", userSchema);
module.exports = user;

