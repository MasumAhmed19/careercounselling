import ButtonHover from "../components/ButtonHover";
import CustomNavLink from "../components/CustomNavLink";

const RegistrationPage = () => {
  return (
    <div className="w-full md:w-1/2 mx-auto z-10 flex flex-col gap-4 m-4">
      <div className=" text-center flex flex-col  justify-center bg-[#20383763] backdrop-blur-sm rounded-md md:p-[50px] p-8 ">
        <div className="flex gap-5 items-center justify-center py-4">
        <CustomNavLink to='/auth/login'>Login</CustomNavLink>
        <CustomNavLink to='/auth/signup'>Signup</CustomNavLink>
        </div>

        {/* Form */}
        <div className="card bg-base-100 w-full shadow-2xl">
          <form className="card-body uppercase text-[12px] md:text-[14px] tracking-wider">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
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
                <span className="label-text">Email</span>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photolink"
                type="text"
                placeholder="photo (web url)"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
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
              <ButtonHover>Login</ButtonHover>
            </div>
          </form>
        </div>
      </div>
      <h2 className="text-4xl md:text-6xl text-white md:w-2/3 text-center mx-auto"></h2>
    </div>
  );
};

export default RegistrationPage;
