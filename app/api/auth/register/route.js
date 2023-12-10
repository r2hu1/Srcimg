import connectDB from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(request) {
    const { email, password } = await request.json();
    connectDB();
    try{
        // if (User.findOne({ email }).email == email) {
        //     return new Response(JSON.stringify({ message: "User already exists" }), { status: 409 });
        // }
        const createUser = await User.create({ email, password });
        if (!createUser) {
            return new Response(JSON.stringify({ message: "An error occurred" }), { status: 500 });
        }
        return new Response(JSON.stringify(createUser), { status: 200 });
    }
    catch(error){
        return new Response(JSON.stringify({ message: "User already exists" }), { status: 500 });
    }
}