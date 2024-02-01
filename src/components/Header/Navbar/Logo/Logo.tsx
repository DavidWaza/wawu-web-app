import React from "react";

interface LogoProps {
  className: string;
}
const Logo = ({ className }: LogoProps) => {
  return (
    <div>
      <img src="/assets/logo.png" alt="" className={className} />
    </div>
  );
};
export default Logo;
