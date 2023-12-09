import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Signup = () => {
    return (
        <div>
            <section className="mt-20 mb-20 mx-8">
                <div className="max-w-md flex flex-col justify-center items-center m-auto sm:max-w-sm">
                    <h1 className="text-3xl font-bold mb-8">Create your account<span className="text-primary">.</span></h1>
                    <form className="grid gap-2 w-full">
                        <Input type="email" placeholder="Email address" className="h-12 pl-4 text-base"></Input>
                        <Input type="password" placeholder="password" className="h-12 pl-4 text-base"></Input>
                        <Button className="mt-4 h-12">Signup</Button>
                        <p className="text-sm text-center mt-7">Already have an account? <Link className="text-primary hover:underline" href="/login">Login</Link></p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Signup;
