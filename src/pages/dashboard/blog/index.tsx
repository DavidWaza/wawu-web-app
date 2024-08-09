import React from "react";
import DashboardLayout from "../layout";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const Blog = () => {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);
  const currentPath =
    pathParts.length > 0 ? pathParts[pathParts.length - 1] : "";
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[28px] font-semibold sora capitalize">
            {currentPath}
          </p>
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
      <div className="py-20">
        <p className="text-[20px] text-[#030309] sora py-2">Create</p>
        <div className="border rounded-lg p-5 w-[20%] hover:ring-2 hover:ring-[#A812E3]">
          <Link href={"/dashboard/blog/create-blog"}>
            <Image
              src={"/assets/Create.svg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain object-center"
            />
          </Link>
        </div>
      </div>
      <div className="py-10">
        <Separator />
      </div>
      <div>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Blogs</TabsTrigger>
            <TabsTrigger value="password">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Blog;
