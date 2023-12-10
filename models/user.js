import { Schema,mongoose,models,model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    files:{
        type: Object,
    }
});

const User = models.User || model("User", userSchema);
export default User;