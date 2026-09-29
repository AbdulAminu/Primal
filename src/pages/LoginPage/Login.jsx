import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import ong from "../../assets/ong.jpeg";
import { api } from "../../api/api";
import { useUser } from "../../context/UserContext";
import Loader from "../../components/loader/loader";

import "./Login.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { refreshUser } = useUser();

  const [formData, setFormData] = useState({
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

    try {
      const response = await api.post("login", formData);

      const data = response.data;

      console.log("LOGIN RESPONSE:", data);

      if (response.status === 200) {
        toast.success(data.message);

        setFormData({
          email: "",
          password: "",
        });

        // The backend stores the JWT in a cookie.
        // We don't need to save the token manually.
        console.log("Login successful. Refreshing user...");

        const user = await refreshUser();

        console.log("USER AFTER LOGIN:", user);

        // Give React/context a moment to update
        setTimeout(() => {
          navigate("/Dashboard");
        }, 500);
      }
    } catch (err) {
      console.log("LOGIN ERROR:", err);

      if (err.response) {
        toast.error(
          err.response.data?.message || "Login failed"
        );
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen login-page">
      <div className="formContain min-h-screen flex justify-center items-center px-4">
        <div className="contain">

          {/* LOGO + TITLE */}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <div className="flex justify-center">
              <img
                src={ong}
                alt="Your Company"
                className="mx-auto h-16 w-auto border-2 border-#4c2b2b-500 imga"
              />
            </div>

            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
              Login into your account
            </h2>

          </div>

          {/* FORM */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-base sm:text-lg md:text-l font-medium text-gray-100"
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

              {/* PASSWORD */}
              <div>

                <div className="flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="block text-base sm:text-lg md:text-l font-medium text-gray-100"
                  >
                    Password
                  </label>

                </div>

                <div className="mt-2 relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white/5 px-4 py-3 text-base text-white placeholder:text-gray-500 outline outline-1 outline-white/10 focus:outline-2 focus:outline-[#757575]"
                  />

                  <button
                    type="button"
                    className="absolute top-1 z-10 right-3 cursor-pointer eye flex items-center justify-center"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>
              </div>

              {/* LOGIN BUTTON */}
              <div>

                {loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 button bbb"
                  >
                    Login

                    <div className="arrow">

                      <i
                        className="fa-solid fa-arrow-right fa-lg fa-beat-fade"
                        style={{ color: "black" }}
                      ></i>

                    </div>

                  </button>
                )}

              </div>

              {/* SIGN UP */}
              <p className="mt-10 text-center text-sm text-gray-400">

                Don't have an account?{" "}

                <Link
                  to="/create-account"
                  className="font-semibold text-indigo-400 hover:text-indigo-300 tt"
                >
                  Sign up
                </Link>

              </p>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}