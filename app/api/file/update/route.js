import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import mongoose from "mongoose";

export async function POST(request) {
    const { file,email } = await request.json();
    connectDB();
    const updateFile = await User.findOneAndUpdate(
        { email },
        { $push: { files: file } }
    );
    if (!updateFile) {
        return new Response(JSON.stringify({ message: "An error occurred" }), {
            status: 500,
        });
    }
    return new Response(JSON.stringify(updateFile), { status: 200 });
}