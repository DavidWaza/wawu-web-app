interface containerProps {
  children: React.ReactNode;
  backgroundColor?: string;
}
export function Container({ children }: containerProps) {
  let backgroundColor = "bg-[#fff]";
  return (
    <>
      <div className={`px-[5.3rem] text-[#000] ${backgroundColor}`}>
        {children}
      </div>
    </>
  );
}
