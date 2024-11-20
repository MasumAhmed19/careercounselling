import { useContext, useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import ButtonHover from "../components/ButtonHover";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";

const DetailPage = () => {
  const { serviceData } = useContext(AuthContext);
  const { detID } = useParams();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    if (Array.isArray(serviceData)) {
      setTemp(serviceData.filter((el) => el.id.toString() === detID));
    }
  }, [detID, serviceData]);

  const service = temp[0];

  return (
    <div className="bg-[#17312F] min-h-screen">
      <HeaderSection />

      {service && (
        <section className="container mx-auto px-4 py-16 mt-[100px] md:py-[70px] mb-[100px] text-white">
          <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Leftbar */}
            <div className="lg:col-span-8">
              {/* Content */}
              <div className="flex flex-col gap-5 text-white">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  {service.serviceName}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[35px] h-[35px] object-cover rounded-full border-2 border-[#CBFF54]"
                      src="https://i.ibb.co.com/jJmZXB1/IMG-20231025-120729-726.jpg"
                      alt="Masum Ahmed"
                    />
                    <h5 className="linktext">Masum Ahmed</h5>
                  </div>
                  <div className="flex gap-4 sm:gap-6">
                    <h5 className="linktext flex items-center gap-2 text-sm">
                      <SlCalender className="flex-shrink-0" /> Aug 16, 2024
                    </h5>
                    <h5 className="linktext flex items-center gap-2 text-sm">
                      <FaRegClock className="flex-shrink-0" /> 7Min Read
                    </h5>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mt-6 overflow-hidden rounded-md">
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-[300px] lg:h-[500px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Description */}
              <div className="mt-8 text-white">
                <h2 className="text-xl md:text-2xl tp1 font-semibold mb-4">
                  About the Session
                </h2>
                <p className="dt1 leading-relaxed opacity-90">
                  {service.longDes}
                </p>
              </div>
            </div>

            {/* Rightbar */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-6 mt-5 lg:mt-28">
                {/* Price Card */}
                <div className="bg-[#223B39] p-5 rounded-lg border-2 border-[#374E4B] hover:border-[#CBFF54] transition-colors duration-300">
                  <div className="flex flex-row justify-between gap-4">
                    <div className="space-y-2 text-sm md:text-base uppercase text-[12px] md:text-[14px] tracking-wider">
                      <p>
                        Date: {service.date}
                      </p>
                      <p>
                        Time: {service.time}
                      </p>
                      <p>
                        Duration:{service.duration}
                      </p>
                    </div>
                    <span className="text-xl linktext uppercase md:text-2xl font-semibold tracking-wide">
                      {service.pricing}
                    </span>
                  </div>
                </div>

                {/* Mentor Card */}
                <div className="bg-[#223B39] p-5 rounded-lg border-2 border-[#374E4B] hover:border-[#CBFF54] transition-colors duration-300">
                  <div className="flex flex-col gap-4">
                    <span className="text-lg font-medium linktext">
                      Mentor: {service.counselor}
                    </span>
                    <div className="flex justify-between items-center text-sm linktext">
                      <span>Rating: {service.rating} / 5</span>
                      <span>{service.reviews} Reviews</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-5">
                  <Link>
                    <ButtonHover>
                      {service.isJoin ? "Joined" : "Join Now"}
                    </ButtonHover>
                  </Link>
                  <Link>
                    <ButtonHover>
                      {service.isFavourite ? "Favorited" : "Add to Favorites"}
                    </ButtonHover>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <FooterSection />
    </div>
  );
};

export default DetailPage;
