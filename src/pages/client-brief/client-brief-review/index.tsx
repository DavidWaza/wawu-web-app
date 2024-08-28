import { Heading, Text } from "@/components/ui/Typography/Typography";

import Button from "@/components/ui/Button/Button";

import UploadImage from "../../profile/Components/UploadImage/UploadImage";
import Header from "@/pages/sellers/Components/Header/Header";
import { useState } from "react";



const ClientBriefReview = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleUpload = (file: File | null) => {
    setSelectedImage(file);
  };
  return (
    <>
      <Header />
      <div className="lg:px-[8rem] px-10 my-10">
        <div className="bg-[#A812E3] w-full py-10 rounded-md !p-0">
          <div className="py-20 px-10">
            <Heading fontColor="primary" variant="medium">
              Let&apos;s the matching begin...
            </Heading>
            <Text variant="small" className="text-white my-5">
              This is where you fill us in one of the big picture?
            </Text>
          </div>
        </div>
        <div className="my-10">
          <div>
            <Heading fontColor="secondary" variant="small">
              Brief Title
            </Heading>
            <Text variant="small" className="text-black">
              Social media marketing for my buisness
            </Text>
          </div>
          <div className="grid lg:grid-cols-2 my-10 space-y-5">
            <div>
              <Heading fontColor="secondary" variant="small">
                Industry
              </Heading>
              <Text variant="small" className="text-black">
                Photography and videography
              </Text>
            </div>
            <div>
              <Heading fontColor="secondary" variant="small">
                Digital marketing
              </Heading>
              <Text variant="small" className="text-black">
                Social media marketing for my buisness
              </Text>
            </div>
          </div>
          <div className=" my-10">
            <div>
              <Heading fontColor="secondary" variant="small">
                Description
              </Heading>
              <Text variant="small" className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                nobis quae enim, alias eaque quam officia, pariatur facere ad
                nesciunt molestiae nemo dignissimos earum impedit numquam
                architecto perferendis amet illo.
              </Text>
            </div>
          </div>
          <div className=" my-10">
            <div>
              <Heading fontColor="secondary" variant="small">
                Attachments
              </Heading>
              <div>
              <UploadImage
                  handleUpload={handleUpload}
                  uploadEndpoint="/api/upload"
                  maxFileSize={500 * 1024} // 500KB
                  acceptedFileTypes="image/*"
                />
              </div>
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 my-10">
            <div>
              <Heading fontColor="secondary" variant="small">
                Budget
              </Heading>
              <Text variant="small" className="text-black">
                $10000
              </Text>
            </div>
            <div>
              <Heading fontColor="secondary" variant="small">
                Deliver By
              </Heading>
              <Text variant="small" className="text-black">
                10th Sept, 2023.
              </Text>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-between my-20">
          <Button
            size="small"
            variant="primary"
            href={'/client-brief'}
            className="p-2 !bg-[#151B28] mb-5 gap-3 flex items-center justify-center"
          >
          
            Back
          </Button>
          <Button size="large" className="p-2">
            Submit & get matched
          </Button>
        </div>
      </div>
    </>
  );
};
export default ClientBriefReview;
