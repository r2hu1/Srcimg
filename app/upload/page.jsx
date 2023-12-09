"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Upload = () => {

    const [file,setFile] = useState("");
    const handleFileInput = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
    };

    return (
        <section className="mt-20 mb-20">
            <div className="md:mx-40 mx-9 max-w-md">
                <div className="text-xs flex items-center gap-2 select-none">
                    <Link href="/" className="hover:underline hover:text-primary">Srcimg</Link> <span className="text-lg font-thin">/</span> Upload
                </div>
                <form className="mt-7">
                    <input onChange={handleFileInput} hidden type="file" accept="image/png, image/jpeg, image/jpg, image/webp" id="fileInput" />
                    <label htmlFor="fileInput">
                        <div className="mt-4 h-[120px] w-full border rounded flex justify-center items-center text-sm">Choose Image To Upload</div>
                    </label>
                        <p className="text-xs mt-1 text-center opacity-80">Supported: png, jpg, jpeg, webp</p>
                    <div className="min-h-[50px] border border-dashed rounded mt-5">
                        {!file ? (<p className="text-sm text-center mt-[14px]">
                            No files choosen
                        </p>) : (
                            <img className="p-1 rounded-lg hover:opacity-95 hover:transform hover:scale-[0.98] transition-transform duration-200" src={URL.createObjectURL(file)}></img>
                        )}
                    </div>
                    <Button className="mt-4 h-11 w-full" type="submit">Upload</Button>
                </form>
            </div>
        </section>
    );
};

export default Upload;