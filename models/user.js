import { Schema,mongoose,models,model } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

const User = models.User || model("User", userSchema);
export default User;