import HeaderSection from "../components/HeaderSection";
import HeroBanner from "../components/HeroBanner";
import FooterSection from "../components/FooterSection"
import HowItWorksSection from "../sections/HowItWorksSection";


const HomePage = () => {
  return (

    <>
      <div>

        <HeaderSection />

        {/* Banner Section */}
        <HeroBanner />

        {/* Service Category */}
        <HowItWorksSection />

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
