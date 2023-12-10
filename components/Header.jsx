"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    // SheetDescription,
    SheetFooter,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RiMenuFoldLine } from "react-icons/ri";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


const Header = () => {
    const { data } = useSession();
    return (
        <header className="bg-background h-20 border-b flex items-center">
            <div className="flex items-center justify-between w-full md:mx-14 mx-7">
                <Link href="/">
                    <h1 className="text-3xl font-bold select-none cursor-pointer"><span className="text-primary">Src</span>img<span className="text-primary">.</span></h1>
                </Link>
                <div className="flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <RiMenuFoldLine className="h-[22px] w-[22px] cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent>
                            <div className="grid mb-8 mt-24">
                                <SheetClose asChild>
                                    <ul className="text-center grid gap-4 w-full">
                                        <li>
                                            <Button className="w-full" asChild variant="ghost"><Link href="/upload">Upload</Link></Button>
                                        </li>
                                        <li>
                                            <Button className="w-full" asChild variant="ghost"><Link href="/manage">Manage Files</Link></Button>
                                        </li>
                                        <li>
                                            <Button className="w-full" asChild variant="ghost"><Link href="/upgrade">Upgrade</Link></Button>
                                        </li>
                                        <li>
                                            <Button className="w-full" asChild variant="ghost"><Link href="https://rahu.eu.org">Contact Us</Link></Button>
                                        </li>
                                    </ul>
                                </SheetClose>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    {!data ? (
                                        <div className="grid gap-2 w-full">
                                            <Button variant="outline" asChild><Link href="/login">Get Started</Link></Button>
                                            <Button asChild><Link href="/login">Login</Link></Button>
                                        </div>
                                    ) : (
                                        <div className="grid gap-2 w-full">
                                            <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>Logout</Button>
                                            <Button asChild><Link href="/upload">Dashboard</Link></Button>
                                        </div>
                                    )}
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
};

export default Header;