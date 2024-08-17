import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "@/components/Cards/Card";
import DigitalReality from "@/components/DigitalReality/DigitalReality";
import { Text } from "@/components/ui/Typography/Typography";
import SkillsHero from "../skills-profile/Components/SkillsHero";
import RelatedArticles from "../skills-profile/Components/RelatedArticles";
import axiosInstance from "../api/axiosInstance";
import { fetch_service_categories } from "../api/endpoints";
import Header from "../sellers/Components/Header/Header";
import Graphics from "../skills-profile/Components/Graphics";
import DigitalMarket from "../skills-profile/Components/DigitalMarket";
import Programing from "../skills-profile/Components/Programing";
import Writing from "../skills-profile/Components/Writing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ICategoryDetails {
  uuid: string;
  name: string;
}

const DigitalMarketing = () => {
  const router = useRouter();
  const { uuid } = router.query;

  const [categoryDetails, setCategoryDetails] =
    useState<ICategoryDetails | null>(null);

  useEffect(() => {
    if (uuid) {
      const uuidString = Array.isArray(uuid) ? uuid[0] : uuid;
      fetchCategoryDetails(uuidString);
    }
  }, [uuid]);

  const fetchCategoryDetails = async (uuid: string) => {
    try {
      const response = await axiosInstance.get(fetch_service_categories);
      console.log("Full response:", response);

      const category = response.data.data.find(
        (cat: ICategoryDetails) => cat.uuid === uuid
      );

      if (category) {
        setCategoryDetails(category);
      } else {
        console.log("Category not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!categoryDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className="pt-10">
        {categoryDetails?.name === "Graphics & Design" ? (
          <SkillsHero
            bgColor="bg-[#290D43]"
            leadingText={categoryDetails?.name}
            text="Who is your girl?"
            buttonPresent
            imgSrc="/assets/graphics-girl.svg"
          />
        ) : categoryDetails?.name === "Digital Marketing" ? (
          <SkillsHero
            bgColor="bg-[#A812E3]"
            leadingText={categoryDetails?.name}
            text="Who is your girl?"
            buttonPresent
            imgSrc="/assets/digital-girl.svg"
          />
        ) : categoryDetails?.name === "Programming & Tech" ? (
            <SkillsHero
            bgColor="bg-[#471471]"
            leadingText={categoryDetails?.name}
            text="Who is your girl?"
            buttonPresent
            imgSrc="/assets/tech-girl.svg"
          />
        ) : categoryDetails?.name === "Writing & Translation" ? (
            <SkillsHero
            bgColor="bg-[#F497C6]"
            leadingText={categoryDetails?.name}
            text="Who is your girl?"
            buttonPresent
            imgSrc="/assets/writing-girl.svg"
          />
        ) : null}
      </div>

      <div className="px-10 lg:px-[5rem]">
        {categoryDetails?.name === "Graphics & Design" ? (
          <Graphics />
        ) : categoryDetails?.name === "Digital Marketing" ? (
          <DigitalMarket />
        ) : categoryDetails?.name === "Programming & Tech" ? (
          <Programing />
        ) : categoryDetails?.name === "Writing & Translation" ? (
          <Writing />
        ) : null}
      </div>
      <div className="py-20">
        <RelatedArticles category={categoryDetails?.name} />
      </div>
      <div>
        <div className="text-center">
          <Text className="text-black">{categoryDetails?.name} FAQs</Text>
        </div>
        <div className="px-10 lg:px-[5rem] py-20">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="px-[5rem] py-20 bg-white">
        <Text className="text-black">Recommended for you</Text>
        <div className="grid grid-cols-4 gap-5 py-5">
          <Card name="name for you" />
          <Card name="name for you" />
          <Card name="name for you" />
          <Card name="name for you" />
        </div>
      </div>
      <div>
        <DigitalReality backgroundColor="bg-[#290D43]" placeholder={""} />
      </div>
    </div>
  );
};
export default DigitalMarketing;
