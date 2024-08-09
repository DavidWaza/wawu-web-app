import React from "react";
import Marquee from "react-fast-marquee";

const portfolios = [
  "Graphics & Design",
  "Programming & Tech",
  "Digital Marketing",
  "Video & Animation",
  "Writing & Translation",
  "Music & Video",
  "Data",
  "Business",
  "Photography",
];

const PortfolioItem = ({ portfolio }: any) => (
  
    <p className="text-black sora">{portfolio}</p>
  
);

const GigPortfolio = () => (
  <div className="bg-white flex justify-between px-5 py-10 border border-b-1">
    {portfolios.map((portfolio, index) => (
      <PortfolioItem key={index} portfolio={portfolio} />
    ))}
  </div>
);

export default GigPortfolio;
