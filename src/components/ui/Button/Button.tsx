import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large" | "full" | "none";
  state?: "hover" | "pressed" | "disabled";
  icon?: "left" | "right";
  backgroundColor?: string;
  href?: string;
  height?: string;
  width?: string;
  isActive?: boolean;
  onClick?: () => void;
  color?: string;
  prefix?: string;
  suffix?: ReactNode | null;
  children: ReactNode;
}

const Button = ({
  variant = "primary",
  size = "small",
  state,
  className,
  children,
  width = "w-full",
  href = "",
  disabled,
  onClick,
  isActive,
  color = "text-[#fff]",
  prefix,
  suffix,
  ...props
}: ButtonProps) => {
  const maxHeight = "";
  let fontWeight = "font-medium";
  let borderRadius = "rounded-md";
  let backgroundColor = "bg-[#ED459A]";
  const borderWidth = "border";
  let borderColor = "border-[#D1D5DB]";

  // Button Variants
  if (variant === "primary") {
    backgroundColor = "bg-[#ED459A]";
    color = "text-[#fff]";
    fontWeight;
    borderWidth;
    borderColor = "border-[#fff]";
  } else if (variant === "secondary") {
    backgroundColor = "bg-transparent";
    color = "text-[#fff]";
    fontWeight;
    borderWidth;
    borderColor;
  } else if (variant === "tertiary") {
    className = "transition-all ease-in-out py-2";
    backgroundColor =
      "bg-[#810FAF] hover:bg-blue-500 transition-all ease-in-out";
    color = "text-[#fff]";
    borderColor = "border-none";
    fontWeight = "font-medium";
    borderRadius = "rounded-md";
  }

  // Button Sizes
  if (size === "small") {
    width = "w-[8rem]";
  } else if (size === "medium") {
    width = "w-[13rem]";
  } else if (size === "large") {
    width = "w-[20rem]";
  } else if (size === "full") {
    width = "w-full";
  } else if (size === "none") {
    width = "w-none";
  }

  return (
    <Link href={href}>
      <button
        className={`
      ${width} 
      ${maxHeight} 
      ${borderRadius} 
      ${backgroundColor} 
      ${borderWidth} 
      ${borderColor} 
      ${fontWeight} 
      ${color} 
      ${className} 
      ${state}
     flex items-center justify-center`}
        onClick={onClick}
        type="button"
      >
        {prefix && <span className="px-2">{prefix}</span>}
        {children}
        {suffix && <span className="px-2">{suffix}</span>}
      </button>
    </Link>
  );
};

export default Button;
