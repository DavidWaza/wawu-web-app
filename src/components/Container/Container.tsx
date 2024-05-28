import { ReactNode } from "react";

interface containerProps {
  children: ReactNode;
}
const Container = ({ children }: containerProps) => {
  return (
    <>
      <div className="md:px-20 text-center md:text-left">{children}</div>
    </>
  );
};
export default Container;
