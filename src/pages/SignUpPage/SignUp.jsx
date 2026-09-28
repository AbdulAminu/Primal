import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api/api";
import { toast } from "sonner";
import ong from "../../assets/ong.jpeg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Loader from "../../components/loader/loader";
import "./SignUp.css";
export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await api.post("Sign-up", formData);
      const data = response.data;
      console.log(data);
      if (response.status === 201) {
        toast.success(data.message);
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      }
      return;
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen SignUp-page">
      <div className="formCont min-h-screen flex justify-center items-center px-4">
        <div className="container">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
              <img
                src={ong}
                alt="Your Company"
                className="mx-auto h-16 w-auto imgb"
              />
            </div>
            <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-white">
              Create your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-base sm:text-lg md:text-l font-medium text-gray-100 "
                >
                  Username
                </label>

                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"
                    placeholder="Enter your name"
                    className="block w-full rounded-md bg-white/5 px-4 py-3 text-base text-white placeholder:text-gray-500 outline outline-1 outline-white/10 focus:outline-2 focus:outline-[#757575]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base sm:text-lg md:text-l font-medium text-gray-100 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-4 py-3 text-base text-white placeholder:text-gray-500 outline outline-1 outline-white/10 focus:outline-2 focus:outline-[#757575]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-base sm:text-lg md:text-l font-medium text-gray-100 "
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white/5 px-4 py-3 text-base text-white placeholder:text-gray-500 outline outline-1 outline-white/10 focus:outline-2 focus:outline-[#757575]"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-3 eye cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div>
                {loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition bbb"
                  >
                    Sign Up
                    <i
                      className="fa-solid fa-arrow-right fa-lg fa-beat-fade"
                      style={{ color: "black" }}
                    ></i>
                  </button>
                )}
              </div>
              <p className="mt-10 text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/account-login"
                  className="font-semibold text-indigo-400 hover:text-indigo-300  tt"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
