import HeaderSection from "../components/HeaderSection";
import TransFromText from "../components/TransFromText";

const AboutPage = () => {
    return (
        <div>
            <HeaderSection></HeaderSection>
            <h2 className="text-xl">
                <TransFromText>About us </TransFromText>
            </h2>
        </div>
    );
};

export default AboutPage;