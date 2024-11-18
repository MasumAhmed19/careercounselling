import PropTypes from "prop-types";

const ButtonHover = ({ children }) => {
  return (
    <>
      <button className=" group relative md:h-12 h-10 rounded-md px-5 text-neutral-950 bg-[#CBFF54] linktext">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 transition duration-200 group-hover:-translate-y-[150%]">
            {children || "Contact us"}
          </div>
          <div className="absolute translate-y-[120%] transition duration-200 group-hover:translate-y-0">
            {children || "Contact us"}
          </div>
        </span>
      </button>
    </>
  );
};

ButtonHover.propTypes = {
  children: PropTypes.string,
};

export default ButtonHover;
