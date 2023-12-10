"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { BiLoaderAlt } from "react-icons/bi";

const Manage = () => {
    const [files, setFiles] = useState([]);
    // https://res.cloudinary.com/ddv7gse97/image/upload/

    const { data: userData } = useSession();
    const getFile = () => {
        fetch("/api/file/get", {
            method: "POST",
            body: JSON.stringify({ email: userData.user.email }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setFiles([...data]);
                console.log(files);
            });
    };

    return (
        <section className="mt-20 mb-20">
            <div className="md:mx-40 mx-8 max-w-md">
                <div className="text-xs flex items-center gap-2 select-none">
                    <Link href="/" className="hover:underline hover:text-primary">Srcimg</Link> <span className="text-lg font-thin">/</span> Manage
                </div>
                <div className="mt-7">
                    {files.length < 1 ? (
                        <div>
                            <div className="mt-4 h-[120px] w-full border rounded flex justify-center items-center text-sm"><Button variant="link" className="no-underline" onClick={getFile}>Click To Refresh <BiLoaderAlt className="h-5 w-5 animate-spin ml-2"/></Button></div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {
                                files.map((file, index) => (
                                    <div key={index} className="rounded-lg w-full p-3">
                                        <img className="p-1 rounded-lg h-40 w-full border mb-3" src={`https://res.cloudinary.com/ddv7gse97/image/upload${file.url}`} alt={file.name} />
                                        <div className="flex gap-1 w-full">
                                            <Button className="w-full flex gap-1 items-center justify-center outline-none">Copy Link<FaRegCopy className="h-[15px] w-[15px]" /></Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Manage;