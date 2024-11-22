import { useState } from "react";
import DualHeading from "./DualHeading";

const FAQSections = () => {
  const temp = [
    {
      ques: "What services do you provide?",
      ans: "We provide a range of services tailored to help you excel in your career. These include career counseling sessions to guide you through choosing the right career path or advancing in your current field, resume building to craft compelling resumes that highlight your skills and achievements, interview preparation to help you build confidence and perform well in job interviews, and professional development workshops designed to improve your soft skills, such as communication, teamwork, and leadership.",
    },
    {
      ques: "How long are the counseling sessions?",
      ans: "Our standard counseling sessions typically last 60 minutes, allowing us to address your primary concerns and goals thoroughly. However, we understand that some topics or challenges may require more time, so we also offer extended sessions. These can be scheduled based on your individual needs, ensuring you have enough time to discuss your career goals, seek advice, and explore personalized strategies for success.",
    },
    {
      ques: "Do you offer online sessions?",
      ans: "Yes, we offer flexible online counseling sessions via video conferencing to accommodate clients who prefer remote support or cannot attend in person due to location or schedule constraints. These online sessions are conducted with the same professionalism and attention as in-person sessions. Additionally, for those who prefer face-to-face interactions, we provide in-person sessions at our designated offices. You can choose the option that best suits your needs and availability.",
    },
    {
      ques: "What is your cancellation policy?",
      ans: "We understand that unforeseen circumstances may require you to reschedule or cancel an appointment. To ensure fairness and efficient scheduling, we have a 24-hour cancellation policy. This means you need to notify us at least 24 hours in advance if you wish to cancel or reschedule your session. Failing to provide sufficient notice may result in a late cancellation fee, as it affects the availability of that slot for others who might need assistance.",
    },
  ];

  return (
    <div className="bg-[#17312F] py-[110px] -mt-[5px] relative">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="text-center font-semibold">
          <DualHeading
            f="Frequently Asked "
            s="Questions"
          />
        </div>
        <div className="md:w-3/4 mx-auto flex flex-col gap-5 m-5">
          {temp.map((item, index) => (
            <div
              key={index}
              className="bg-[#17312F] border border-[#CBFF54] collapse"
            >
              <input
                type="checkbox"
                className="peer"
              />
              <div className="collapse-title bg-[#17312F] text-white peer-checked:bg-[#CBFF54] peer-checked:text-[#17312F] font-semibold text-xl">
                {item.ques}
              </div>
              <div className="collapse-content bg-[#17312F] text-white peer-checked:bg-[#CBFF54] peer-checked:text-[#17312F]">
                <p>{item.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSections;
