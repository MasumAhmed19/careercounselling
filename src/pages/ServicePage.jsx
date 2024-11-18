import { Outlet } from "react-router-dom";
import BannerSection from "../components/BannerSection";
import HeaderSection from "../components/HeaderSection";

const ServicePage = () => {
    return (
        <div>
            <HeaderSection />
            <BannerSection t="Professional Guidance, Personal Growth" />
            {/* Dynamic */}
            <section className="bg-[#17312F] py-[100px]">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default ServicePage;