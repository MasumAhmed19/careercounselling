import { Outlet } from "react-router-dom";
import ButtonHover from "../components/ButtonHover";
import HeaderSection from "../components/HeaderSection";

const AuthPage = () => {
  return (
    <div>
      <HeaderSection />
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.ibb.co.com/QkdtCWQ/herobg3.jpg)`,
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content */}
        <Outlet />
        
      </div>
    </div>
  );
};

export default AuthPage;
