import { useContext, useEffect, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import ButtonHover from "../components/ButtonHover";

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
    <div className="bg-[#17312F]">
      <HeaderSection />

      {service && (
        <section className="container mx-auto mt-[100px] px-4 py-[70px] pb-[120px] text-white m-2">
          <div className="grid grid-cols-12 gap-10">
            {/* Leftbar */}

            <div className="col-span-12 lg:col-span-8">
              {/* Content */}
              <div className=" flex flex-col gap-5 text-white">
                <h2 className="text-3xl">{service.serviceName}</h2>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-[30px] rounded-full"
                      src="https://cdn.prod.website-files.com/66e9764759fcb42dca63aa60/66e9790b83b0b3f1db914c6b_pete.png"
                      alt=""
                    />
                    <h5 className="linktext">Masum Ahmed</h5>
                  </div>
                  <div>
                    <h5 className="linktext">Aug 16, 2024</h5>
                  </div>
                  <div>
                    <h5 className="linktext">7Min Read</h5>
                  </div>
                </div>
              </div>
              {/* Img */}
              <div className="overflow-hidden rounded-md mt-5">
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-[300px] lg:h-[500px] object-cover rounded-md mb-3 hover:scale-110 duration-200"
                />
              </div>

              {/* Description */}
              <div className="mt-6 text-white rounded-md">
                <h2 className="text-2xl tp1 font-semibold">
                  About the Session
                </h2>
                <p className="mt-4 dt1">{service.longDes}</p>
              </div>
            </div>

            {/* RigthBar */}
            <div className="col-span-12 lg:col-span-4 mt-24 h-full ">
              <div className="m-3 flex flex-col gap-8">
                {/* price */}
                <div className="bg-[#223B39] flex items-start justify-between p-5 rounded-md border-2 border-[#374E4B] hover:border-[#CBFF54] duration-500">
                  <div className="flex flex-col">
                    <span className="uppercase text-[20px] md:text-[25px] tracking-widest">
                      {service.pricing}
                    </span>
                    <span className="uppercase text-[15px] mt-3">
                      <p>
                        <strong>Date:</strong> {service.date}
                      </p>
                      <p>
                        <strong>Time:</strong> {service.time}
                      </p>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="uppercase text-[15px]">
                      Duration: {service.duration}
                    </span>
                  </div>
                </div>

                <div className="bg-[#223B39] flex items-start justify-between p-5 rounded-md border-2 border-[#374E4B] hover:border-[#CBFF54] duration-500">
                  <div className="flex flex-col">
                    <span className="uppercase text-[20px] md:text-[15px] tracking-widest">
                      Mentor: {service.counselor}
                    </span>
                    <span className="uppercase text-[15px] mt-3">
                      <p>Rating: {service.rating} / 5</p>
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="uppercase text-[15px]">
                      {service.reviews} Reviews
                    </span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <Link >
                    <ButtonHover>{service.isJoin ? "Joined" : "Join Now"}</ButtonHover>
                  </Link>
                  <Link >
                    <ButtonHover>{service.isFavourite ? "Favorited" : "Add to Favorites"}</ButtonHover>
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
