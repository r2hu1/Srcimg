"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { BiLoaderAlt } from "react-icons/bi";
import { useToast } from "@/components/ui/use-toast";



const Manage = () => {

    // https://res.cloudinary.com/ddv7gse97/image/upload/

    const [files, setFiles] = useState([]);
    const [clicked, setClicked] = useState(false);
    const { toast } = useToast();
    const { data } = useSession();

    const getFile = async () => {
        toast({
            title: "Loading...",
            description: "Please wait while we load your files.",
            variant: "default",
            isLoading: true
        })
        setClicked(true);
        const res = await fetch("/api/file/get", {
            method: "POST",
            body: JSON.stringify({ email: data?.user?.email }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const respData = await res.json();
        let gotFiles = [];
        for(let i = 0; i < respData.length; i++) {
            gotFiles.push(respData[i].files);
            files.push(`https://res.cloudinary.com/ddv7gse97/image/upload${respData[i].files}`);
        }
        console.log(files);
    };


    return (
        <section className="mt-20 w-full bg-background">
            <div className="md:mx-40 mx-8 max-w-md">
                <div className="text-xs flex items-center gap-2 select-none">
                    <Link href="/" className="hover:underline hover:text-primary">Srcimg</Link> <span className="text-lg font-thin">/</span> Manage
                </div>
                <div className="mt-7 mx-auto min-h-screen scroll-m-1 overflow-y-scroll">
                    {!clicked ? (
                        <div>
                            <div className="mt-4 h-[120px] w-full border rounded flex justify-center items-center text-sm"><Button variant="link" className="no-underline" onClick={getFile}>Click To Refresh</Button></div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {
                                files.length > 0 ? files.map((file, index) => (
                                    <div key={index} className="rounded-lg w-full p-3 animate-in ">
                                        <img className="p-1 rounded-lg max-h-[227px] w-full border mb-3" src={file} alt={"Image"} />
                                        <div className="flex gap-1 w-full">
                                            <Button className="w-full flex gap-1 items-center justify-center outline-none" onClick={() => {navigator.clipboard.writeText(file); toast({title: "Link Copied"});}}>Copy Link<FaRegCopy className="h-[15px] w-[15px]" /></Button>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="w-full h-[120px] flex items-center justify-center">
                                        <BiLoaderAlt className="h-5 w-5 animate-spin ml-2" />
                                    </div>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Manage;