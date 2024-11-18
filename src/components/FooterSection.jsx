import ButtonHover from "./ButtonHover";
import footerImg from '../assets/footer2.webp';
import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${footerImg})`,
                backgroundSize: 'cover',  // Ensure the image covers the entire section
                backgroundPosition: 'center', // Center the image
            }}
        >
            <div className="text-white container mx-auto p-5 flex flex-col py-[50px] pt-[100px] gap-10">
                <div className="backdrop-blur-sm border-2 border-[#374E4B] p-10 rounded-md flex flex-col md:flex-row gap-5 md:w-2/3 mx-auto items-left md:items-center justify-between">
                    <div className="space-y-3">
                        <h2 className="text-xl md:text-3xl font-semibold md:w-4/5">
                            Have an epic product or startup idea you are looking to build and scale?
                        </h2>
                        <p className="dt1">Apply to be a part of our January cohort.</p>
                    </div>
                    <div className="">
                        <ButtonHover className="">Contact Now</ButtonHover>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-5  mt-5">
                    <div>
                        <Link to='/' className="uppercase text-xl font-semibold tracking-tighter"><span className="tp1">Career</span>Counseling</Link>
                    </div>

                    <div className="flex gap-2 ">
                        <Link to='/' className="linktext">Home</Link>
                        <Link to='/about' className="linktext">About</Link>
                        <Link to='/service' className="linktext">Service</Link>
                        <Link to='/blog' className="linktext">Blog</Link>
                        <Link to='/contact' className="linktext">Contact</Link>
                    </div>
                    
                    <div className="">
                        <h2 className="linktext">Privacy & Polocy</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
