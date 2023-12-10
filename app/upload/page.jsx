"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { useToast } from "@/components/ui/use-toast"



const Upload = () => {

    const [file, setFile] = useState("");
    const [bfile, setBfile] = useState("");
    const [IsUploading, setIsUploading] = useState(false);
    const [uploadedb, setUploadedb] = useState(false);
    const { toast } = useToast();

    const handleFileInput = (e) => {
        e.preventDefault();
        setFile(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () => {
            setBfile(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const uploadImage = async (e) => {
        e.preventDefault();
        if(!file) return;
        setIsUploading(true);

        const uploadResponse = await fetch(
            `https://api.cloudinary.com/v1_1/srcimg/image/upload`,
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        file: bfile,
                        upload_preset: "srcimg",
                        api_key: "478292776746713",
                    }
                ),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const uploadedImageData = await uploadResponse.json();
        toast({
            title: "Image Uploaded",
            description: "Your image has been uploaded successfully.",
            status: "success",
        });
        console.log(uploadedImageData.secure_url);
        if (uploadedImageData.secure_url.length > 0 || uploadedImageData.secure_url != undefined) {
            setFile(uploadedImageData.secure_url);
            setUploadedb(true);
            fetch("/api/file/update",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    file: uploadedImageData.secure_url,
                    email:"22@rahul.eu.org"
                })
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        setIsUploading(false);
    };

    return (
        <section className="mt-20 mb-20">
            <div className="md:mx-40 mx-9 max-w-md">
                <div className="text-xs flex items-center gap-2 select-none">
                    <Link href="/" className="hover:underline hover:text-primary">Srcimg</Link> <span className="text-lg font-thin">/</span> Upload
                </div>
                <form className="mt-7" onSubmit={uploadImage}>
                    <input onChange={handleFileInput} hidden type="file" accept="image/png, image/jpeg, image/jpg, image/webp" id="fileInput" />
                    <label htmlFor="fileInput">
                        <div className="mt-4 h-[120px] w-full border-2 rounded flex justify-center items-center text-sm cursor-pointer">Choose Image To Upload</div>
                    </label>
                    <p className="text-xs mt-1 text-center opacity-80">Supported: png, jpg, jpeg, webp</p>
                    <div className="min-h-[50px] border border-dashed rounded mt-6">
                        {!file ? (
                            <p className="text-sm text-center mt-[14px]">
                                No files choosen
                            </p>
                        ) :
                            !uploadedb ? (
                                <img className="p-1 rounded-lg hover:opacity-95 hover:transform hover:scale-[0.98] transition-transform duration-200" src={URL.createObjectURL(file)}></img>
                            ) : (
                                <p className="text-sm text-center mt-[14px]">
                                    No files choosen
                                </p>
                            )
                        }
                    </div>
                    <Button className="mt-4 h-11 w-full" type="submit" disabled={IsUploading}>{
                        IsUploading ? (<BiLoaderAlt className="animate-spin h-5 w-5" />) : "Upload"
                    }</Button>
                </form>
            </div>
        </section>
    );
};

export default Upload;