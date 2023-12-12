"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { RiLoader4Fill } from "react-icons/ri";
import validateEmail from "./emailValidator";

const Signup = () => {
    const { toast } = useToast();
    const router = useRouter();
    const { data } = useSession();
    const [signing, setSigning] = useState(false);
    if (data) router.push("upload");

    validateEmail("newasram8ty6@gmail.com")

    const regesterUser = async (e) => {
        e.preventDefault();
        setSigning(true);
        const vEmail = validateEmail(e.target[0].value);
        if (!vEmail || !e.target[0].value.includes("gmail.com") || e.target[0].value.length < 17) {
            toast({
                title: "Invalid Email",
                description: "Please enter an valid gmail address.",
                variant: "destructive",
            });
            setSigning(false);
            return;
        }
        if (e.target[1].value.length < 8) {
            toast({
                title: "Error",
                description: "Password must be at least 8 characters",
                variant: "destructive",
            });
            setSigning(false);
            return;
        }
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
        if (data.email == e.target[0].value) {
            setSigning(true);
            toast({
                title: "Signup Successful",
            });
            setSigning(false);
            router.push("/login");
        } else {
            toast({
                title: "Error",
                description: data.message,
                variant: "destructive",
            });
            setSigning(false);
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
                        <Button className="mt-4 h-12" disabled={signing}>{signing ? (<RiLoader4Fill className="w-5 h-5 animate-spin" />) : "Signup"}</Button>
                        <p className="text-sm text-center mt-7">Already have an account? <Link className="text-primary hover:underline" href="/login">Login</Link></p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Signup;
