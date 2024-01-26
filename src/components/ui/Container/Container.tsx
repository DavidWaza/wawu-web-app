interface containerProps {
  children: React.ReactNode;
  bgColorVariant?: "bg-colorVariance" | "bg-primary";
}
export function Container({ children, bgColorVariant }: containerProps) {
  let backgroundColor = "bg-[#fff]";

  if (bgColorVariant === "bg-primary") {
    backgroundColor = "bg-[#fff]";
  } else {
    return bgColorVariant;
  }
  return (
    <>
      <div className={`px-[5.3rem] text-[#000] ${backgroundColor}`}>
        {children}
      </div>
    </>
  );
}
