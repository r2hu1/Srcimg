"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { useSession } from "next-auth/react";

const Manage = () => {
    const [files, setfiles] = useState([""]);
    return (
        <section className="mt-20 mb-20">
            <div className="md:mx-40 mx-8 max-w-md">
                <div className="text-xs flex items-center gap-2 select-none">
                    <Link href="/" className="hover:underline hover:text-primary">Srcimg</Link> <span className="text-lg font-thin">/</span> Manage
                </div>
                <div className="mt-7">
                    {!files.length ? (
                        <div>
                            <div className="mt-4 h-[120px] w-full border rounded flex justify-center items-center text-sm">No files uploaded.</div>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">

                            <div className="rounded-lg w-full p-3">
                                <img className="p-1 rounded-lg h-40 w-full border mb-3" src="https://i.postimg.cc/HsmwGfkH/Screenshot-2023-12-08-235237.png" />
                                <div className="flex gap-1 w-full">
                                    <Button className="w-full flex gap-1 items-center justify-center">Copy Link<FaRegCopy className="h-[15px] w-[15px]" /></Button>
                                </div>
                            </div>

                            <div className="rounded-lg w-full p-3">
                                <img className="p-1 rounded-lg h-40 w-full border mb-3" src="https://i.postimg.cc/HsmwGfkH/Screenshot-2023-12-08-235237.png" />
                                <div className="flex gap-1 w-full">
                                    <Button className="w-full flex gap-1 items-center justify-center">Copy Link<FaRegCopy className="h-[15px] w-[15px]" /></Button>
                                </div>
                            </div>

                            <div className="rounded-lg w-full p-3">
                                <img className="p-1 rounded-lg h-40 w-full border mb-3" src="https://i.postimg.cc/HsmwGfkH/Screenshot-2023-12-08-235237.png" />
                                <div className="flex gap-1 w-full">
                                    <Button className="w-full flex gap-1 items-center justify-center">Copy Link<FaRegCopy className="h-[15px] w-[15px]" /></Button>
                                </div>
                            </div>

                            <div className="rounded-lg w-full p-3">
                                <img className="p-1 rounded-lg h-40 w-full border mb-3" src="https://i.postimg.cc/HsmwGfkH/Screenshot-2023-12-08-235237.png" />
                                <div className="flex gap-1 w-full">
                                    <Button className="w-full flex gap-1 items-center justify-center">Copy Link<FaRegCopy className="h-[15px] w-[15px]" /></Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Manage;