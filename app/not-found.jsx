import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="global h-screen flex justify-center items-center">
            <div className="-mt-32">
                <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-primary to-stone-500 text-transparent bg-clip-text">Not Found</h1>
                <Button asChild><Link href="/">Return Home</Link></Button>
            </div>
        </div>
    )
}