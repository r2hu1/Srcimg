import { Schema, mongoose, models, model } from "mongoose";

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    }
});

const File = models.User || model("File", fileSchema);
export default File;