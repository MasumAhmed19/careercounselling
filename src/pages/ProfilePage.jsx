import { useContext, useState, useEffect } from "react";
import BannerSection from "../components/BannerSection";
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import { AuthContext } from "../provider/AuthProvider";
import ButtonHover from "../components/ButtonHover";
import TransFromText from "../components/TransFromText";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {

  const { user, updateUserProfileData } = useContext(AuthContext);
  const [formData, setFormData] = useState({
      name: "",
      photoURL: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ update: "" });
    
    // Update form data when user data changes
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.displayName || "",
                photoURL: user.photoURL || ""
            });
        }
    }, [user]);
    
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        
        // change er dorkar nai
        if (formData.name === user?.displayName && formData.photoURL === user?.photoURL) {
            return;
    }

    setLoading(true);
    setError({ update: "" });
    
    const updates = {
        displayName: formData.name,
        photoURL: formData.photoURL
    };
    
    updateUserProfileData(updates)
    .then(() => {
        alert("Profile updated successfully!");
    })
    .catch((error) => {
        setError({ update: error.message });
      })
      .finally(() => {
          setLoading(false);
        });
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
      ...prev,
      [name]: value
    }));
};

  return (
    <div>
<Helmet><title>Profile - Career Counseling</title></Helmet>
      <HeaderSection />
      <BannerSection t="User Profile" />
      <section className="bg-[#17312F] py-[100px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 text-white rounded-md overflow-hidden m-5 -mt-[150px] z-50 relative min-h-[60vh] gap-6">
            {/* Left bar: User Info */} 
            <div className="col-span-12 md:col-span-3 bg-[#2D4542] space-y-5 p-5 md:p-8 rounded-lg">
              <h2 className="tp1 text-2xl font-bold">User Profile</h2>
              <hr className="border-[1px] border-[#374E4B] mt-3" />

              <div className="space-y-4 flex flex-col items-center md:items-start">
                {user?.photoURL && (
                  <div className="relative">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-24 h-24 rounded-full border-2 border-[#CBFF54] object-cover"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <p className="linktext">
                    <span className="text-[#CBFF54]">Name:</span> {user?.displayName || "N/A"}
                  </p>
                  <p className="linktexts">
                    <span className="text-[#CBFF54]">Email:</span> {user?.email || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right bar: Update Form */}
            <div className="col-span-12 md:col-span-9 bg-[#223B39] rounded-lg">
              <div className="card w-full">
                <form onSubmit={handleUpdateProfile} className="card-body uppercase text-[12px] md:text-[14px] tracking-wider">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Display Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input input-bordered bg-transparent border-[#374E4B] text-white"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Photo URL</span>
                    </label>
                    <input
                      type="url"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleInputChange}
                      className="input input-bordered bg-transparent border-[#374E4B] text-white"
                      placeholder="Enter photo URL"
                    />
                  </div>

                  {error.update && (
                    <div className="flex items-start justify-start">
                      <p className="text-red-400 font-extrabold text-left">
                        {error.update}
                      </p>
                    </div>
                  )}

                  <div className="form-control mt-6">
                    <ButtonHover>
                      <button
                        type="submit"
                        disabled={loading || (formData.name === user?.displayName && formData.photoURL === user?.photoURL)}
                        className="w-full"
                      >
                        <TransFromText>
                          {loading ? "Updating..." : "Update Profile"}
                        </TransFromText>
                      </button>
                    </ButtonHover>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default ProfilePage;
