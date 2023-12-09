import connectDB from "@/lib/mongodb";
import User from "@/models/user";
import mongoose from "mongoose";

export async function POST(request) {
    connectDB();
    const { email, password } = await request.json();
    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({message:"User not found"}), { status: 404 });
    }
    if (user.password !== password) {
        return new Response(JSON.stringify({message:"Invalid password"}), { status: 401 });
    }
    return new Response(JSON.stringify(user), { status: 200 });
}
