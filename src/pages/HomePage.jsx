import HeaderSection from "../components/HeaderSection";
import HeroBanner from "../components/HeroBanner";
import FooterSection from "../components/FooterSection"
import HowItWorksSection from "../sections/HowItWorksSection";
import FAQSections from "../components/FAQSections";


const HomePage = () => {
  return (

    <>
      <div>

        <HeaderSection />

        {/* Banner Section */}
        <HeroBanner />

        {/* Service Category */}
        <HowItWorksSection />

        {/* faq section */}
        <FAQSections />

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
