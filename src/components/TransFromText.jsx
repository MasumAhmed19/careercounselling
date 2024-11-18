import PropTypes from "prop-types";

const TransFromText = ({ children }) => {
  return (
    <div>
      <button className="group relative">
        <span className="relative inline-flex overflow-hidden">
          <div className="translate-y-0 transition duration-200 group-hover:-translate-y-[150%]">
            {children || "Contact us"}
          </div>
          <div className="absolute translate-y-[150%] transition duration-200 group-hover:translate-y-0">
            {children || "Contact us"}
          </div>
        </span>
      </button>
    </div>
  );
};

TransFromText.propTypes = {
  children: PropTypes.node,
};

export default TransFromText;
