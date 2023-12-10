import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import mongoose from "mongoose";

export async function POST(request) {
    const {email} = await request.json();
    connectDB();
    const getUser = await User.findOne({ email: email });
    if (!getUser) {
        return new Response(JSON.stringify({ message: "An error occurred" }), {
            status: 500,
        });
    }
    return new Response(JSON.stringify(getUser), { status: 200 });
}