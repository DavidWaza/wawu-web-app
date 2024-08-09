import React from "react";
import DashboardLayout from "../../layout";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DragDrop from "../../components/DragImageUpload/DragImageUpload";

const CreateBlog = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[28px] font-semibold sora">Blog</p>
          <p className="text-[16px] text-[#5f6d7e] sora">
            Let&apos;s get creative, create new content
          </p>
        </div>
        <div className="relative w-[20%]">
          <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="bg-transparent pl-10 w-full"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="py-10">
        <form>
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="email">Blog Title</Label>
              <Input
                type="text"
                id="blog_title"
                placeholder="Type here"
                className="bg-transparent"
              />
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="email">Select page to post blog</Label>
              <Input
                type="text"
                id="blog_page"
                placeholder="Type here"
                className="bg-transparent"
              />
            </div>
          </div>
          <div className="py-10">
            <DragDrop />
          </div>
          <div className="py-10 flex justify-center">
            <button
              type="submit"
              className="py-3 px-[10rem] rounded-lg bg-[#F497C6] text-white"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateBlog;
