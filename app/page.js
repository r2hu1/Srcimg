import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AiOutlineEnter } from "react-icons/ai";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <section className="mt-20 mb-20">
      <div className="md:mx-40 mx-9 max-w-md">
        <Alert className="mb-4">
          {/* <AlertTitle>Heads up!</AlertTitle> */}
          <AlertDescription>
            We're working to update our landing page. Stay tuned! 🚀
          </AlertDescription>
        </Alert>
        <h1 className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-primary to-stone-500 text-transparent bg-clip-text">Unleash Your Images with Srcimg - Instant Uploads, Instant Links! <div className="bg-primary opacity-50 h-8 w-14 hidden"></div></h1>
        <p className="text-sm mt-2">
          Effortlessly upload images and receive instant,
          shareable links with Srcimg. Simplify your image
          sharing experience with our lightning-fast platform.
          Get direct permalinks for quick and easy sharing across the web.
        </p>
        <div className="flex gap-2 mt-8">
          <Button asChild><Link href="/login" className="flex items-center justify-center gap-1">Get Started <AiOutlineEnter /></Link></Button>
          <Button asChild variant="outline"><a href="https://github.com/r2hu1/Srcimg">Github</a></Button>
        </div>
      </div>
    </section>
  );
};