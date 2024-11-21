import { Link } from "react-router-dom";
import heroImg from "../assets/herobg2.webp";
import ButtonHover from "../components/ButtonHover";
import ImgSlider from "./ImgSlider";

const HeroBanner = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImg})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 "></div>

      <div className=" text-white container mx-auto relative  p-5 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 items-center py-[120px]">
            {/* content */}
          <div className="order-2 md:order-1 space-y-3 flex flex-col items-start cursor-text">

            <p className="linktext bg-[#bded4f57] duration-300 ease-in backdrop-blur-sm p-2 rounded-md ">Unlock Your Career Potential</p> 
            <h1 className="text-4xl md:text-6xl font-semibold">
              Discover Your Career Path with Expert Guidance
            </h1>
            <p className="dt1">
              Personalized counseling to help you achieve your professional
              dreams.
            </p>
            <Link></Link>
            <ButtonHover className="">Get Started Now</ButtonHover>
          </div>

            {/* slider */}
          <div className="order-1 md:order-2 ">
            <ImgSlider />
            {/* <img className="w-2/3  mx-auto" src="https://i.ibb.co.com/9bLQM7f/sliderimg1.png" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
