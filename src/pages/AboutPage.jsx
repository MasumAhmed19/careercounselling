import { Helmet } from "react-helmet-async";
import BannerSection from "../components/BannerSection";
import FAQSections from "../components/FAQSections";
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import TeamSection from "../components/TeamSection";


const AboutPage = () => {

    return (
        <div>
            <Helmet><title>About Us - Career Counseling</title></Helmet>
            <HeaderSection></HeaderSection>
            <BannerSection t="About"/>
            <TeamSection />
            <FAQSections />
            <FooterSection />

        </div>
    );
};

export default AboutPage;