import { Link } from "react-router-dom";
import ButtonHover from "../components/ButtonHover";
import DualHeading from "../components/DualHeading";

const HowItWorksSection = () => {
    return (
        <div className="bg-[#17312F] py-[110px] -mt-[5px] relative" 
          >
            <div className="container mx-auto">
                <div className="text-center space-y-5">
                    <DualHeading f="Our Service" s="Category"/>
                    <p className="dt1 md:w-1/3 mx-auto">Explore our range of personalized and professional career counseling services designed to empower your career journey.</p>
                </div>

                <div className="lg:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px]">
                    <div className="backdrop-blur-md border-2 hover:border-[#CBFF54] duration-500 bg-[#223b39c0] border-[#374E4B] rounded-md p-8 text-white flex flex-col items-start gap-2 m-4 md:m-1">
                        <div>
                            <img src="https://i.ibb.co.com/JC3wnbR/img1.png" alt="" />
                        </div>
                        <h5 className="linktext text-[#CBFF54]">ONLINE</h5>
                        <h2 className="text-xl font-semibold">Schedule a session from anywhere</h2>
                        <div className="dt1 space-y-3">
                            <p>We’ll guide you remotely to:</p>
                            <ul className="list-disc list-inside">
                                <li>Access expert advice via video calls.</li>
                                <li>Explore flexible scheduling options.</li>
                                <li>Receive personalized career plans at your convenience.</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <Link to='/service/online'>
                                <ButtonHover>View All</ButtonHover>
                            </Link>
                        </div>



                    </div>

                    <div className="backdrop-blur-md border-2 hover:border-[#CBFF54] duration-500 bg-[#223b39c0] border-[#374E4B] rounded-md p-8 text-white flex flex-col items-start gap-2 m-4 md:m-1">
                        <div>
                            <img src="https://i.ibb.co.com/nm3XdhX/img2.png" alt="" />
                        </div>
                        <h5 className="linktext text-[#CBFF54]">OFFLINE</h5>
                        <h2 className="text-xl font-semibold">Meet face-to-face with our counselors
                        </h2>
                        <div className="dt1 space-y-3">
                            <p>We’ll provide in-person support to:</p>
                            <ul className="list-disc list-inside">
                                <li>Build a personalized connection.</li>
                                <li>Access interactive career workshops.</li>
                                <li>Engage in focused sessions.</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <Link to='/service/offline'>
                                <ButtonHover>View All</ButtonHover>
                            </Link>
                        </div>
                    </div>

                    <div className="backdrop-blur-md border-2 hover:border-[#CBFF54] duration-500 bg-[#223b39c0] border-[#374E4B] rounded-md p-8 text-white flex flex-col items-start gap-2 m-4 md:m-1">
                        <div>
                            <img src="https://i.ibb.co.com/V9gmYBN/img3.png" alt="" />
                        </div>
                        <h5 className="linktext text-[#CBFF54]">GROUP</h5>
                        <h2 className="text-xl font-semibold">Collaborate and grow with peers</h2>
                        <div className="dt1 space-y-3">
                            <p>Join a group session to:</p>
                            <ul className="list-disc list-inside">
                                <li>Gain insights from shared experiences.</li>
                                <li>Learn from others' challenges and solutions.</li>
                                <li>Network with like-minded individuals.</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <Link to='/service/group'>
                                <ButtonHover>View All</ButtonHover>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HowItWorksSection;



// style={{
//     backgroundImage: `url(https://i.ibb.co.com/QKqgQFL/elements-fotor-2024111921330.webp)`,
//     backgroundPosition: "bottom", 
//     backgroundSize: "contain", 
//     backgroundRepeat: "no-repeat" 
//   }}