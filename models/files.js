import { Schema, mongoose, models, model } from "mongoose";

const fileSchema = new Schema({
    url: {
        type: String,
        required: true
    }
});

const File = models.User || model("File", fileSchema);
export default File;