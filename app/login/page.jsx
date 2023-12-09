"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"

const Login = () => {
    const [logged,setLogged] = useState(false);
    const [uEmail,setUemail] = useState("");
    const [uPassword,setUpassword] = useState("");
    const { toast } = useToast();

    const loginUser = (e) => {
        e.preventDefault();
        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: e.target[0].value,
                password: e.target[1].value,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.email == e.target[0].value){
                    toast({
                        title: "Login Successful",
                    });
                    setUemail(e.target[0].value);
                    setUpassword(e.target[1].value);
                    setLogged(true);
                }
                else{
                    toast({
                        title: "Error",
                        description: data.message,
                        variant: "destructive",
                    })
                }
            });
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
