import PropTypes from "prop-types";
import ButtonHover from "./ButtonHover";

const Card = ({ service }) => {
    // Destructure the properties of `el` safely
    const { image, serviceName, category, pricing, description } = service || {};
    
    return (
        <div className="p-5 border border-[#CBFF54] rounded-md shadow-md space-y-3 ">
            <img src={image} alt={serviceName} className="w-full h-40 object-cover rounded-md mb-3" />
            <h2 className="linktext text-[#cbff54] font-semibold ">{serviceName}</h2>
            <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">{category}</p>
                <p className=" font-medium">Price: {pricing}</p>
            </div>
            <p className="text-sm text-gray-400">{description}</p>
            <ButtonHover>Details</ButtonHover>
        </div>
    );
};

Card.propTypes = {
    service: PropTypes.shape({
        image: PropTypes.string.isRequired,
        serviceName: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        pricing: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
}

export default Card;
