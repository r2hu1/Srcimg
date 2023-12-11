import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AiOutlineEnter } from "react-icons/ai";

const Upgrade = () => {
    return (
        <section className="mt-20 mb-20">
            <div className="md:mx-40 mx-9 max-w-md">
                <h1 className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-primary to-stone-500 text-transparent bg-clip-text">Why you need an upgrade? - its unlimited!<div className="bg-primary opacity-50 h-8 w-14 hidden"></div></h1>
                <p className="text-sm mt-2">
                    Effortlessly upload images and receive instant,
                    shareable links with Srcimg. Simplify your image
                    sharing experience with our lightning-fast platform.
                    Get direct permalinks for quick and easy sharing across the web.
                </p>
                <div className="flex gap-2 mt-8">
                    <Button asChild><Link href="/upload" className="flex items-center justify-center gap-1">Upload <AiOutlineEnter /></Link></Button>
                    <Button asChild variant="outline"><a href="https://rahul.eu.org">Hire Me</a></Button>
                </div>
            </div>
        </section>
    )
};

export default Upgrade;
