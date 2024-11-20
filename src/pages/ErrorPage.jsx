import { Link } from "react-router-dom";
import ButtonHover from "../components/ButtonHover";
import HeaderSection from "../components/HeaderSection";

const ErrorPage = () => {
  return (
    <div>
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://i.ibb.co.com/QkdtCWQ/herobg3.jpg)`,
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="text-center flex flex-col items-center justify-center text-white gap-5 p-5">
            <h2 className=" text-8xl font-bold text-center text-white duration-300 ease-in  rounded-md ">
              OOPS!
            </h2>
            <p className="linktext">404 - page not found</p>
            <p className="md:w-2/3 linktext">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to='/'>
                <ButtonHover >Go to Homepage</ButtonHover>
            </Link>
          </div>
          <h2 className="text-4xl md:text-6xl text-white md:w-2/3 text-center mx-auto"></h2>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
