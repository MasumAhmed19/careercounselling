import { useContext, useState } from "react";
import CustomNavLink from "../components/CustomNavLink";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import TransFromText from "../components/TransFromText";
import ButtonHover from "../components/ButtonHover";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const RegistrationPage = () => {


  const navigate = useNavigate();
  const { createNewUser, setUser, loginGoogle, updateUserProfile } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    uppercase: false,
    lowercase: false,
    length: false,
  });

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validate password function
  const validatePassword = (password) => {
    setPassword(password);
    setValidationErrors({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      length: password.length >= 6,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photolink = form.photolink.value;

    // Check if all password validation criteria are met
    if (!Object.values(validationErrors).every(Boolean)) {
      alert("Please fix all password requirements before submitting.");
      return;
    }

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        alert("Welcome home!");
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photolink })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((error) => {
        console.error(error);
        alert("Signup failed. Please try again.");
      });
  };

  return (
    <div className="w-full md:w-1/2 mx-auto z-10 flex flex-col gap-4 m-4">
      <Helmet><title>Registration - Career Counseling</title></Helmet>
      <div className="text-center flex flex-col justify-center bg-[#20383763] backdrop-blur-md rounded-md md:p-[50px] p-8">
        <div className="flex gap-5 items-center justify-center py-4">
          <CustomNavLink to="/auth/login">Login</CustomNavLink>
          <CustomNavLink to="/auth/signup">Signup</CustomNavLink>
        </div>

        {/* Form */}
        <div className="card w-full">
          <form
            onSubmit={handleSubmit}
            className="card-body uppercase text-[12px] md:text-[14px] tracking-wider"
          >
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
              <div className="flex relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input w-full input-bordered"
                  required
                  value={password}
                  onChange={(e) => validatePassword(e.target.value)}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-4 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="flex justify-between items-start gap-2 mt-2 text-xs">
                {!validationErrors.uppercase && (
                  <span className="text-yellow-500">At least one uppercase letter</span>
                )}
                {!validationErrors.lowercase && (
                  <span className="text-yellow-500">At least one lowercase letter</span>
                )}
                {!validationErrors.length && (
                  <span className="text-yellow-500">At least 6 characters</span>
                )}
              </div>
            </div>

            <div className="form-control mt-6">
              <ButtonHover>Sign Up</ButtonHover>
            </div>
          </form>

          <div className="divider text-white border-white linktext px-8">OR</div>
          <div
            className="form-control mt-6 px-8 flex gap-2"
            onClick={loginGoogle}
          >
            <div className="flex items-center justify-center text-center gap-3 h-10 rounded-md px-5 text-neutral-950 bg-[#CBFF54] linktext">
              <FcGoogle className="text-xl" />
              <TransFromText>Continue with Google</TransFromText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
