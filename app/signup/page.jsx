"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Signup = () => {
    const { toast } = useToast();
    const router = useRouter();
    const { data } = useSession();
    if (data) router.push("upload");

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const regesterUser = async (e) => {
        const vEmail = validateEmail(e.target[0].value);
        if (!vEmail) {
            toast({
                title: "Error",
                description: "Invalid Email",
                variant: "destructive",
            });
            return;
        }
        e.preventDefault();
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: e.target[0].value,
                password: e.target[1].value,
            }),
        });

        const data = await res.json();
        console.log(data);
        if (data.email == e.target[0].value) {
            toast({
                title: "Signup Successful",
            });
            router.push("/login");
        } else {
            toast({
                title: "Error",
                description: data.message,
                variant: "destructive",
            });
        }
    };

    return (
        <div>
            <section className="mt-20 mb-20 mx-8">
                <div className="max-w-md flex flex-col justify-center items-center m-auto sm:max-w-sm">
                    <h1 className="text-3xl font-bold mb-8">Create your account<span className="text-primary">.</span></h1>
                    <form className="grid gap-2 w-full" onSubmit={regesterUser}>
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
