import AuthHeader from "./Components/Header/Header";
import { Illustrator } from "./Components/Illustrator/Illustrator";
import LoginForm from "./Components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className="bg-white">
      <AuthHeader
        id={0}
        href={""}
        link={""}
        isCaret={false}
        bgColor="!#290D43"
      />
      <div className="grid md:grid-cols-2 px-12">
        <Illustrator />
        <div className="flex justify-center items-center w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
