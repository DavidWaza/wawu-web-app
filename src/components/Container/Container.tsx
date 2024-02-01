import { ReactNode } from "react";

interface containerProps {
  children: ReactNode;
}
const Container = ({ children }: containerProps) => {
  return (
    <>
      <div className="px-20">{children}</div>
    </>
  );
};
export default Container;
