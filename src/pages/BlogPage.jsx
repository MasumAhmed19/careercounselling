import { Link } from "react-router-dom";
import BannerSection from "../components/BannerSection";
import HeaderSection from "../components/HeaderSection";

const BlogPage = () => {
    return (
        <div>
            <HeaderSection />
            <BannerSection t="Your Path to Success: Blog and Resources"/>

            <Link to='/service/all'  >Hello</Link>
        </div>
    );
};

export default BlogPage;