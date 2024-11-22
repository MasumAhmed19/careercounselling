import { Outlet } from "react-router-dom";
import BannerSection from "../components/BannerSection";
import HeaderSection from "../components/HeaderSection";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FooterSection from "../components/FooterSection";

const ServicePage = () => {
  const { serviceData } = useContext(AuthContext);
  console.log(serviceData);


  const link = <>
     <NavLink
                to="/service/online"
                className={({ isActive }) =>
                    `py-4 px-5 rounded-sm join-item flex items-center gap-5 ${
                        isActive ? "bg-[#405753]" : ""
                    }`
                }
            >
                <img
                    className="w-[40px] bg-[#BDED4F] rounded-md p-1"
                    src="/src/assets/online.svg"
                    alt=""
                />
                Online
            </NavLink>
            
            <NavLink
                to="/service/offline"
                className={({ isActive }) =>
                    `py-4 px-5 rounded-sm join-item flex items-center gap-5 ${
                        isActive ? "bg-[#405753]" : ""
                    }`
                }
            >
                <img
                    className="w-[40px] bg-[#BDED4F] rounded-md p-1"
                    src="/src/assets/offline.svg"
                    alt=""
                />
                Offline
            </NavLink>
            
            <NavLink
                to="/service/group"
                className={({ isActive }) =>
                    `py-4 px-5 rounded-sm join-item flex items-center gap-5 ${
                        isActive ? "bg-[#405753]" : ""
                    }`
                }
            >
                <img
                    className="w-[40px] bg-[#BDED4F] rounded-md p-1"
                    src="/src/assets/group.svg"
                    alt=""
                />
                Group
            </NavLink>
  </>

  return (
    <div>
      <HeaderSection />
      <BannerSection t="Our Services" />

      {/* Service Section */}
      <section className="bg-[#17312F] py-[100px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 text-white rounded-md overflow-hidden m-5">
            {/* left bar */}
            <div className="col-span-12 md:col-span-3 bg-[#2D4542] space-y-5 p-5 md:p-8">
              <h2 className="tp1 text-2xl">Counselling Category</h2>
              <hr className="border-[1px] border-white mt-3 w-2/3"></hr>

              <div className="join join-vertical w-full linktext">
                {link}
              </div>
            </div>

            <div className="col-span-12 md:col-span-9 bg-[#223B39] space-y-5 p-5 md:p-8">
              {/* dynamic category */}
              <Outlet />
            </div>
          </div>
        </div>
      </section>

      <FooterSection/>
    </div>
  );
};

export default ServicePage;
