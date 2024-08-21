"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/pages/api/axiosInstance";
import { fetch_service_categories } from "@/pages/api/endpoints";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICategoryProps {
  uuid: string;
  name: string;
}

const GigPortfolio = () => {
  const [fetchCategories, setFetchCategories] = useState<
    ICategoryProps[] | null
  >(null);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axiosInstance.get(fetch_service_categories);
      setFetchCategories(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const pathname = usePathname();

  return (
    <div className="bg-white lg:flex justify-between px-20 py-10 border border-b hidden overflow-hidden">
      {fetchCategories?.slice(0, 10).map((item) => (
        <div key={item.uuid}>
          <Link href={`/categories/${item.uuid}`}>
            <p
              key={item.uuid}
              className={`text-nowrap sora hover:text-[#290D42] p-3 rounded-lg ${
                pathname.includes(item.uuid) ? "text-[#E54D9A] font-bold" : ""
              }`}
            >
              {item.name}
            </p>
          </Link>
        </div>
      )) || <p className="text-center">No categories available.</p>}
    </div>
  );
};

export default GigPortfolio;
