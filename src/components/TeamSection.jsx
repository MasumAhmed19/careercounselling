import DualHeading from "./DualHeading";

const teamMembers = [
  {
    name: "John Doe",
    role: "Career Counselor",
    description:
      "John has years of experience in guiding professionals to excel in their careers. His expertise includes career coaching, resume building, and interview preparation.",
    photo: "https://i.ibb.co.com/nBVLWVk/1-3.webp", // Placeholder for member's photo
  },
  {
    name: "Jane Smith",
    role: "HR Specialist",
    description:
      "Jane specializes in helping candidates navigate the complexities of the job market, focusing on talent acquisition and career growth.",
    photo: "https://i.ibb.co.com/bW14zHd/1-1.webp", // Placeholder for member's photo
  },
  {
    name: "Michael Lee",
    role: "Workshop Facilitator",
    description:
      "Michael leads dynamic career workshops that help individuals sharpen their professional skills and boost their career trajectory.",
    photo: "https://i.ibb.co.com/YpGzsRk/1-2.webp", // Placeholder for member's photo
  },
];

const TeamSection = () => {
  return (
    <div className="bg-[#17312F] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-semibold">
            <DualHeading
              f="Meet Our"
              s="Team"
            ></DualHeading>
          </div>
          <p className="mt-4 dt2 text-white/80">
            Get to know the experts behind our career counseling services. Our
            team is committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border-2 border-[#374E4B] hover:border-[#CBFF54] duration-500 bg-[#223b39c0] rounded-lg p-6 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 border-2 border-[#CBFF54] bg-[#CBFF54]/10 rounded-full mb-6">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-[#CBFF54] text-xl font-semibold mb-2">
                {member.name}
              </h3>
              <p className="text-[#CBFF54] text-lg mb-2">{member.role}</p>
              <p className="text-white/90 mb-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
