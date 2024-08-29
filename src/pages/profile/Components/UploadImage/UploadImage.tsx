import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Text } from "@/components/ui/Typography/Typography";
import { Trash2 } from "lucide-react";

interface UploadImageProps {
  handleUpload: (file: File | null) => void;
  uploadEndpoint: string;
  maxFileSize: number;
  acceptedFileTypes: string;
  placeholder?: string;
  text?: string;
}

const UploadImage: React.FC<UploadImageProps> = ({
  handleUpload,
  uploadEndpoint,
  maxFileSize,
  acceptedFileTypes,
  placeholder = "/assets/photo.png", // Default placeholder image
  text,
}) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file && file.size <= maxFileSize) {
      setSelectedImage(file);
      handleUpload(file); // Pass the selected file to the handleUpload function
    } else {
      console.error("File size exceeds the limit.");
    }
  };

  return (
    <div className="border border-gray-400 rounded-md lg:w-[40%] my-5">
      <div className="flex justify-end p-3">
        <Trash2 className="text-black" onClick={() => handleUpload(null)} />
      </div>
      <div className="text-center">
        <div className="py-10">
          <input
            type="file"
            accept={acceptedFileTypes}
            onChange={handleImageChange}
            className="hidden"
            id="fileInput"
          />
          <label htmlFor="fileInput">
            <Image
              src={
                selectedImage ? URL.createObjectURL(selectedImage) : placeholder // Use the placeholder prop if no image is selected
              }
              alt="Selected Image"
              className="w-7 h-full m-auto"
              width={500}
              height={500}
            />
            <Text variant="small">{text}</Text>
            <Text variant="small">500kb</Text>
          </label>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
