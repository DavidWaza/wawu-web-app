import React from "react";

interface IbadgeProps {
  status: "Verify" | "Blocked" | "Pending";
}
const CustomBadge: React.FC<IbadgeProps> = ({ status }) => {
  return (
    <div
      className={`rounded-lg text-center font-semibold flex items-center justify-center gap-2 p-2 ${
        status === "Verify"
          ? "bg-[#F0FAF0] text-[#2D8A39] "
          : status === "Pending"
          ? "bg-[#FFF8EB] text-[#EEA23E]"
          : status === "Blocked"
          ? "bg-[#FFF2F0] text-[#E2341D]"
          : ""
      }`}
    >
      <div
        className={`w-2 h-2 animate-pulse rounded-full ${
          status === "Verify"
            ? "bg-[#2D8A39]"
            : status === "Pending"
            ? "bg-[#EEA23E]"
            : status === "Blocked"
            ? "bg-[#E2341D]"
            : ""
        }`}
      ></div>
      {status === "Verify"
        ? "Verify"
        : status === "Pending"
        ? "Pending"
        : status === "Blocked"
        ? "Blocked"
        : null}
    </div>
  );
};

export default CustomBadge;
