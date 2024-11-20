import { useContext } from "react";
import ButtonHover from "../components/ButtonHover";
import CustomNavLink from "../components/CustomNavLink";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate()
  const {createNewUser, setUser, loginGoogle, updateUserProfile} = useContext(AuthContext)

  const handleSubmit = (e)=>{
    e.preventDefault();

    const form = e.target
    const name = form.name.value
    const email =  form.email.value
    const photolink = form.photolink.value
    const password = form.password.value

    createNewUser(email, password)
    .then(res=>{
      const user = res.user
      setUser(user)
      updateUserProfile({displayName: name, photoURL: photolink })
      .then(()=>{
        navigate('/')
      }).catch(err=>{
        alert(err)
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      
    });
  }
  return (
    <div className="w-full md:w-1/2 mx-auto z-10 flex flex-col gap-4 m-4">
      <div className=" text-center flex flex-col  justify-center bg-[#20383763] backdrop-blur-md rounded-md md:p-[50px] p-8 ">
        <div className="flex gap-5 items-center justify-center py-4">
          <CustomNavLink to='/auth/login'>Login</CustomNavLink>
          <CustomNavLink to='/auth/signup'>Signup</CustomNavLink>
        </div>

        {/* Form */}
        <div className="card w-full">
          <form onSubmit={handleSubmit} className="card-body uppercase text-[12px] md:text-[14px] tracking-wider">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

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
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                name="photolink"
                type="url"
                placeholder="photo (web url)"
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

            <div className="form-control mt-6">
              <ButtonHover>Sign Up</ButtonHover>
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

export default RegistrationPage;
