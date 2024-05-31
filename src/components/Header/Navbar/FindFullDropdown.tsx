import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const GuidesLinks = [
  {
    link: "#",
    label: "Post a job and hire a pro",
    children: "Child content for Post a job and hire a pro",
  },
  {
    link: "#",
    label: "Browse and buy projects",
    children: "Child content for Browse and buy projects",
  },
  {
    link: "#",
    label: "Get advice from an industry expert",
    children: "Child content for Get advice from an industry expert",
  },
];

const FindFullNavigation = () => {
  const [activeGuide, setActiveGuide] = useState(null);

  const handleClick = (index: any) => {
    setActiveGuide(index === activeGuide ? null : index);
  };

  return (
    <div className="relative rounded-lg">
      <div className="absolute mt-[70px] z-10 flex w-screen max-w-max -translate-x-[48rem] px-4">
        <div className="w-full max-w-[75rem] flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 py-10 px-20">
          <div className="p-4">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <div>
                  <p className="font-semibold text-black sora">Guides</p>
                </div>
                {GuidesLinks.map((guide, index) => (
                  <div key={index}>
                    <button
                      className="border border-1 px-3 py-2 flex justify-between items-center hover:bg-[#A812E329] transition-all ease-linear cursor-pointer my-2"
                      onClick={() => handleClick(index)}
                    >
                      {guide.label}
                      <MdKeyboardArrowRight
                        size={20}
                        style={{
                          transform:
                            activeGuide === index ? "rotate(90deg)" : "",
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2">
                {activeGuide !== null && (
                  <div>
                    <p>{GuidesLinks[activeGuide].children}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFullNavigation;
