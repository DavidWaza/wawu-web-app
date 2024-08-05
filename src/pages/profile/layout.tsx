import Header from "../sellers/Components/Header/Header";


interface AuthWrapperProps {
  children: React.ReactNode;
}
const LayoutProfile = ({ children }: AuthWrapperProps) => {
  return (
    <div>
      <div>
        <Header />
        <div className="w-full pb-10 bg-white lg:px-20 px-10 pt-20">{children}</div>
      </div>
    </div>
  );
};
export default LayoutProfile;
