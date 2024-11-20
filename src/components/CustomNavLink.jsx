import { NavLink } from 'react-router-dom';
import TransFromText from './TransFromText'; // Import your TransFromText component

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `bg-[#CBFF54] py-2 px-2 rounded-md duration-300 linktext ${
          isActive ? '' : ''
        }`
      }
    >
      {({ isActive }) => (
        <TransFromText>
          {children} {isActive ? '*' : ''}
        </TransFromText>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
