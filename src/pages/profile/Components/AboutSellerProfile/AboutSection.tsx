import { Text } from "@/components/ui/Typography/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AboutSection = () => {
  const router = useRouter();
  const { about } = router.query;
  return (
    <div className="py-4 border rounded-xl bg-[#f4f6f7] px-10">
      <Text className="text-black !sora !text-[16px]" variant="small">
        {about}
      </Text>
    </div>
  );
};

export default AboutSection;
