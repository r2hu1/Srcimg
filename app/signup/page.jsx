"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"

const Signup = () => {
    const { toast } = useToast();

    const regesterUser = (e) => {
        e.preventDefault();
        fetch("/api/auth/create", {
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
                console.log(data);
                if(data.email == e.target[0].value){
                    toast({
                        title: "Signup Successful",
                    });
                    // setUemail(e.target[0].value);
                    // setUpassword(e.target[1].value);
                    // setLogged(true);
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
