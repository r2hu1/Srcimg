import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { RiMenuFoldLine } from "react-icons/ri";


const Header = () => {
    return (
        <header className="h-20 border-b flex items-center">
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
                            <div className="grid mb-8 mt-20">
                                <ul className="text-md text-center grid gap-4 w-full">
                                    <li>
                                        <Button className="w-full" asChild variant="ghost"><a href="#">Github Repo</a></Button>
                                    </li>
                                    <li>
                                        <Button className="w-full" asChild variant="ghost"><a href="#">Contribution Guide</a></Button>
                                    </li>
                                    <li>
                                        <Button className="w-full" asChild variant="ghost"><a href="#">Api Guide</a></Button>
                                    </li>
                                    <li>
                                        <Button className="w-full" asChild variant="ghost"><a href="#">Developer</a></Button>
                                    </li>
                                </ul>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <div className="grid gap-2 w-full">
                                        <Button variant="outline" asChild><Link href="/login">Get Started</Link></Button>
                                        <Button asChild><Link href="/login">Login</Link></Button>
                                    </div>
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