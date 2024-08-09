"use client";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useState } from "react";
import { useDropzone, DropzoneOptions } from "react-dropzone";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop: DropzoneOptions["onDrop"] = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
    // Call your backend API endpoint to upload files
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="space-y-5">
      <Label htmlFor="email">Add cover image</Label>
      <div
        {...getRootProps()}
        className="border-4 border-[#AFAFB9] rounded-xl text-center p-20 border-dotted"
      >
        <input {...getInputProps()} />
        <Image
          src={"/assets/dragNdrop.svg"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-[7%] m-auto h-auto object-contain object-center"
        />
        <p className="sora text-[20.61px] py-2">Drag and drop your image</p>
        <p className="sora text-[16.61px] py-8">
          or <span className="text-[#117DB7]">browse files</span> on your
          computer
        </p>

        <ul>
          {uploadedFiles.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DragDrop;
