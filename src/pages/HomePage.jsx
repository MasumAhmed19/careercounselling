import HeaderSection from "../components/HeaderSection";
import HeroBanner from "../components/HeroBanner";
import FooterSection from "../components/FooterSection"
import HowItWorksSection from "../sections/HowItWorksSection";
import FAQSections from "../components/FAQSections";
import TeamSection from "../components/TeamSection";


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

        {/* Team Member */}
        <TeamSection/>

        {/* Footer */}
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
