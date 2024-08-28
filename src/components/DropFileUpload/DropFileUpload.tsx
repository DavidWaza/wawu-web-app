// @ts-nocheck

"use client";
import { CloudIcon, FileIcon } from "lucide-react";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Typography from "../Typography/Typography";

interface IDropFileUpload2Props {
  supportedFilesTitles: string;
  supportedFiles: string[];
  file?: File | null;
  setFile: (file: File | null) => void;
  max?: boolean
}

const DropFileUpload2 = ({
  supportedFilesTitles,
  supportedFiles,
  file,
  setFile,
  max
}: IDropFileUpload2Props) => {
  const maxSize = 1048576;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, [setFile]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: supportedFiles.reduce((acc, fileType) => {
      switch (fileType) {
        case ".jpeg":
          acc["image/jpeg"] = [];
          break;
        case ".png":
          acc["image/png"] = [];
          break;
        case ".pdf":
          acc["application/pdf"] = [];
          break;
        default:
          break;
      }
      return acc;
    }, {}),
    maxSize,
  });

  return (
    <div className="uploadQestion">
      <div className="uploadWrap">
        <div
          {...getRootProps()}
          className={`dropzone border-[2px] border-dashed border-[#ACA8C8] h-[180px] rounded-[14px] w-full flex flex-col justify-center items-center ${
            isDragReject ? "dropzoneReject" : isDragActive && "dropzoneAccept"
          }`}
        >
          <input {...getInputProps()} />

          {!isDragActive && (
            <>
              <Image
                src={"/icons/fileUpload.svg"}
                alt="logo"
                width={40}
                height={40}
                className="h-auto object-center object-contain cursor-pointer"
              />
              <div>
                <span className="text-[#08A969] text-[16px] font-semibold">
                  Click to upload
                </span>
                <span> or drag and drop</span>
              </div>
              <div>
                <span className="text-[#5E5989] text-[14px] italic">
                  Supports only
                </span>
                <span className="text-[#5E5989] text-[14px] font-semibold italic">
                  {supportedFilesTitles}
                </span>
                <span className="text-[#5E5989] text-[14px] italic"> files</span>
              </div>
            </>
          )}
          <span className="text-[#5E5989] text-[14px] italic"></span>
          {max &&<span className="text-[12px] mt-3">Max size: 1mb</span>}
          {isDragActive && !isDragReject && "Drop it like it's hot!"}
          {isDragReject && "File type not accepted, sorry!"}
        </div>
        {file && (
          <ul className="flex flex-row items-center gap-4 mt-2 flex-wrap ">
            <li className="flex flex-row gap-1 text-[14px] items-center text-[#5E5989]">
              <FileIcon className="w-4 h-4" />
              <div className="max-w-[240px]">{file.name}</div>
             
              <Image
                src={"/icons/closeIcon.svg"}
                alt="logo"
                width={13}
                height={13}
                className="h-auto object-center z-10 object-contain cursor-pointer"
                onClick={() => setFile(null)}
              />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropFileUpload2;
