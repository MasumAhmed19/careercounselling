import { Link, NavLink } from "react-router-dom";
import TransFromText from "./TransFromText";
import { FaUserAlt } from "react-icons/fa";

const HeaderSection = () => {
  const link = <>
    <li className="hover:text-[#CBFF54]"><NavLink to='/' className={({isActive})=> isActive? "text-[#CBFF54]":""}><TransFromText>Home</TransFromText></NavLink></li>
    <li className="hover:text-[#CBFF54]"><NavLink to='/about' className={({isActive})=> isActive? "text-[#CBFF54]":""}><TransFromText>About</TransFromText></NavLink></li>
    <li className="hover:text-[#CBFF54]"><NavLink to='/service' className={({isActive})=> isActive? "text-[#CBFF54]":""}><TransFromText>Service</TransFromText></NavLink></li>
    <li className="hover:text-[#CBFF54]"><NavLink to='/blog' className={({isActive})=> isActive? "text-[#CBFF54]":""}><TransFromText>Blog</TransFromText></NavLink></li>
    <li className="hover:text-[#CBFF54]"><NavLink to='/contact' className={({isActive})=> isActive? "text-[#CBFF54]":""}><TransFromText>Contact</TransFromText></NavLink></li>
  </>


  return (
    <div className="py-3 relative z-20 -mb-[95px]">
      <div className="navbar container mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                  className="tp1"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow linktext"
            >
              {
                link
              }
            </ul>
          </div>
          <Link to='/' className="uppercase text-xl font-semibold tracking-tighter"><span className="tp1">Career</span>Counseling</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 backdrop-blur-sm linktext">
            {
              link
            }
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div><FaUserAlt className="text-md text-[#BDED4F]" /></div>
          <Link to='/login' className="linktext bg-[#BDED4F] px-2 py-2 text-black rounded-sm"><TransFromText>Login</TransFromText></Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
