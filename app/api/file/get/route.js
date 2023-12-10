import connectDB from "@/lib/mongodb";
import UserFile from "@/models/userFile";
import mongoose from "mongoose";

export async function POST(request) {
    const {email} = await request.json();
    connectDB();
    const getUser = await UserFile.find({ email: email });
    if (!getUser) {
        return new Response(JSON.stringify({ message: "No files found." }), {
            status: 500,
        });
    }
    return new Response(JSON.stringify(getUser), { status: 200 });
}