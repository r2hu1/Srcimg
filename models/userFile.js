import { Schema,mongoose,models,model } from "mongoose";

const userFileSchmea = new Schema({
    email: {
        type: String,
        required: true,
    },
    files:{
        type: String,
        required: true,
    }
});

const UserFile = models.UserFile || model("UserFile", userFileSchmea);
export default UserFile;