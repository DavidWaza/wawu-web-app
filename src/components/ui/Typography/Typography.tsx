import React from "react";

// Header component
interface HeadingProps {
  variant: "small" | "medium" | "large" | "xlarge";
  fontColor: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ variant, children, fontColor }) => {
  let fontSize = "text-[36px]";
  let lineHeight = "leading-[36px]";
  let letterSpacing = `tracking[-1.125px]`;
  let fontWeight = "font-extabold";
  let textColor = "secondary";

  if (variant === "small") {
    fontSize = "text-[18px]";
    lineHeight = "leading-[27px]";
    fontWeight = "font-semibold";
    letterSpacing = "tracking-normal";
  } else if (variant === "medium") {
    fontSize = "2xl:text-[33px] lg:text-[20px] text-[20px]";
    lineHeight = "leading-[30px] lg:leading-[46px]";
    letterSpacing = "tracking-normal";
    fontWeight = "font-semibold";
  } else if (variant === "large") {
    fontSize = "text-[40px] 2xl:text-[5rem]";
    lineHeight = "leading-[30px] lg:leading-[67px]";
    letterSpacing = "tracking-normal";
    fontWeight = "2xl:font-extrabold";
  } else if (variant === "xlarge") {
    fontSize = "text-[31px] lg:text-[6rem]";
    lineHeight = "leading-[46px] lg:leading-[83px]";
    fontWeight = "font-extrabold";
  }
  if (fontColor === "primary") {
    textColor = "text-[#fff]";
  } else {
    textColor = "text-[#000]";
  }
  return (
    <h1
      className={` ${fontSize} ${lineHeight} ${letterSpacing} ${fontWeight} ${textColor}`}
    >
      {children}
    </h1>
  );
};

// Title component

interface Titleprops {
  children: React.ReactNode;
  small?: boolean;
}

const Title: React.FC<Titleprops> = ({ children, small }) => {
  let fontSize = "text-[45px]";
  const lineHeight = "leading-[67px]";
  const letterSpacing = "tracking[-1.125px]";

  if (small) {
    fontSize = "text-[24px]";
  }

  return (
    <h2 className={`font-semibold ${fontSize} ${letterSpacing} ${lineHeight}`}>
      {children}
    </h2>
  );
};

// Text component
interface TextProps {
  children: React.ReactNode;
  variant?: "tiny" | "extrasmall" | "small" | "base" | "largeText" | "medium" | "large";
  textWeight?: "medium" | "semi-bold" | "bold" | "normal";
  hover?: boolean;
  textCenter?: boolean;
  textLink?: boolean;
  className?: string;
  textColor?: String;
  // font?: string
}

const Text: React.FC<TextProps> = ({
  children,
  textWeight,
  variant = "medium",
  hover = false,
  textCenter = false,
  textColor = "#576266",
  textLink = false,
  className,
}) => {
  let fontSize = "text-[20px]";
  let lineHeight = "leading-[30px]";
  let fontWeight = "font-normal";
  let color = `text-[${textColor}]`;
  // let textAlign = "text-start";
  if (variant === "tiny") {
    lineHeight = "leading-[16px]";
    fontSize = "text-[12px]";
  } else if (variant === "extrasmall") {
    fontSize = "text-[14px]";
    lineHeight = "leading-[21px]";
    color = "text-[#4E5058]";
  } else if (variant === "small") {
    fontSize = "md:text-[16px] text-sm";
    lineHeight = "leading-[21px]";
    color = "text-[#4E5058]";
  } else if (variant === "medium") {
    fontSize = "text-[18px] lg:text-[28px]";
    lineHeight = "leading-[24px] lg:leading-[30px]";
    color = "text-[#fff]";
    fontWeight = "font-bold";
  } else if (variant === "base") {
    fontSize = "text-[18px]";
    lineHeight = "leading-[20px]";
  } else if (variant === "largeText") {
    fontSize = "2xl:text-[28px]";
    lineHeight = "leading-[20px]";
  } else if (variant === "large") {
    fontSize = "lg:text-[30px] text-[25px]";
    lineHeight = "lg:leading-[46px] leading-[30px]";
    fontWeight = "font-extrabold";
  }

  if (textWeight === "semi-bold") {
    fontWeight = "font-semibold";
    color = "text-[#191C2D]";
  } else if (textWeight === "bold") {
    fontWeight = "font-bold";
  } else if (textWeight === "medium") {
    fontWeight = "font-medium";
  }
  if (hover) {
    color = "group-hover:text-green-400";
  }

  if (textLink) {
    color = "text-green-400";
  }

  return (
    <p
      className={` ${fontWeight} ${color} ${lineHeight} ${fontSize} ${className}`}
    >
      {children}
    </p>
  );
};

export { Heading, Title, Text };
