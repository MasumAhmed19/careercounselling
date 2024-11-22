import HeaderSection from "../components/HeaderSection";
import HeroBanner from "../components/HeroBanner";
import FooterSection from "../components/FooterSection"
import HowItWorksSection from "../sections/HowItWorksSection";
import FAQSections from "../components/FAQSections";
import TeamSection from "../components/TeamSection";
import { Helmet } from "react-helmet-async";


const HomePage = () => {

  
  return (
    
    <>
      <div>
    <Helmet><title>Home - Career Counseling</title></Helmet>

        <HeaderSection />

        {/* Banner Section */}
        <HeroBanner />

        {/* Service Category */}
        <HowItWorksSection />

        {/* faq section */}
        <FAQSections />

        {/* Team Member */}
        <TeamSection/>

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
