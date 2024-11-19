import PropTypes from "prop-types";
import ButtonHover from "./ButtonHover";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  // Destructure the properties of `el` safely
  const { id, image, serviceName, pricing, description, rating } = service || {};

  return (
    <div className="p-5 bg-[#2D4542] border border-[#2D4542] hover:border-[#CBFF54] duration-500 rounded-md shadow-md space-y-3 ">
      <div className="overflow-hidden rounded-md">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-40 object-cover rounded-md mb-3 hover:scale-110 duration-200"
        />
      </div>
      <h2 className="linktext text-[#cbff54] font-semibold ">{serviceName}</h2>
      <div className="flex justify-between items-center">
        <p className="linktext text-white p-1 rounded-md flex gap-2 items-center justify-center">
          <ReactStars
            count={5}
            value={rating}
            size={20}
            edit={false}
            color2="#cbff54"
          />
          {rating}
        </p>
        <p className="linktext font-medium">{pricing}</p>
      </div>
      <p className="dt1">{description}</p>
      <div className="mt-10">
        <Link to={`/detail/${id}`} >
          <ButtonHover>Details</ButtonHover>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pricing: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
