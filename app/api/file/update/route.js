import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import UserFile from "@/models/userFile";
import mongoose from "mongoose";

export async function POST(request) {
    const { file, email } = await request.json();
    connectDB();
    const createUserFile = UserFile.create({ 
        email: email,
        files: file
     });
    if (!createUserFile) {
        return new Response(JSON.stringify({ message: "An error occurred" }), {
            status: 500,
        });
    }
    return new Response(JSON.stringify(createUserFile), { status: 200 });
}