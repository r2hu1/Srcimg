"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Login = () => {
    const router = useRouter();
    const { toast } = useToast();
    const { data } = useSession();
    if(data) router.push("upload");

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email : e.target[0].value,
                password: e.target[1].value,
                redirect: false,
            });

            console.log(res);
            if (res.error) {
                toast({
                    title: "Error",
                    description: "User not found",
                    variant: "destructive",
                });
                return;
            }

            toast({
                title: "Login Successful",
            });
            router.replace("upload");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <section className="mt-20 mb-20 mx-8">
                <div className="max-w-md flex flex-col justify-center items-center m-auto sm:max-w-sm">
                    <h1 className="text-3xl font-bold mb-8">Welcome back<span className="text-primary">.</span></h1>
                    <form onSubmit={loginUser} className="grid gap-2 w-full">
                        <Input type="email" placeholder="Email address" className="h-12 pl-4 text-base"></Input>
                        <Input type="password" placeholder="password" className="h-12 pl-4 text-base"></Input>
                        <Button className="mt-4 h-12">Login</Button>
                        <p className="text-sm text-center mt-7">Don't have an account? <Link className="text-primary hover:underline" href="/signup">Sign up</Link></p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
