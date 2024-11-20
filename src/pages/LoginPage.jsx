import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonHover from "../components/ButtonHover";
import CustomNavLink from "../components/CustomNavLink";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {

  const {user, setUser, userLogin, loginGoogle} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const [error, setError] = useState({})

  const handleSubmit = (e)=>{
    e.preventDefault();

    const form = e.target
    const email =  form.email.value
    const password = form.password.value
    userLogin(email, password)
    .then((res)=>{
      setUser(res.user)
      navigate(location?.state ? location.state : "/")
      // alert notification
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      setError({...error, login:err.code})
      // alert notification
    });

    console.log(email, password)
  }


  return (
    <div className="w-full md:w-1/2 mx-auto z-10 flex flex-col gap-4 m-4">
      <div className=" text-center flex flex-col  justify-center bg-[#20383763] backdrop-blur-sm rounded-md md:p-[50px] p-8 ">
        <div className="flex gap-5 items-center justify-center py-4">
        <CustomNavLink to='/auth/login'>Login</CustomNavLink>
        <CustomNavLink to='/auth/signup'>Signup</CustomNavLink>
        </div>

        {/* Form */}
        <div className="card  w-full ">
          <form onSubmit={handleSubmit} className="card-body uppercase text-[12px] md:text-[14px] tracking-wider">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            {error.login && 
            <div className="flex items-start justify-start">
                <p className="text-red-400 font-extrabold text-left"> 
                  {error.login}
                </p>
                
            </div>}

            <div className="flex items-start">
                <Link
                  href="#"
                  className="text-[#CBFF54] hover:text-[#CBFF54]"
                >
                  Forgot password?
                </Link>
              </div>

            <div className="form-control mt-6">
                <ButtonHover>
                  <Link className="" onClick={userLogin}>
                  Login
                  </Link>
                  </ButtonHover>
            </div>
          </form>

          <div className="divider text-white border-white linktext px-8">OR</div>
            <div className="form-control mt-6 px-8 flex gap-2" onClick={loginGoogle}>
              <ButtonHover ><div className="flex items-center gap-3"> <FcGoogle className="text-xl" />
              Continue with Google</div> </ButtonHover>
            </div>
        </div>
      </div>
      <h2 className="text-4xl md:text-6xl text-white md:w-2/3 text-center mx-auto"></h2>
    </div>
  );
};

export default LoginPage;
