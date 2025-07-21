"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import loginSvg from "@/public/img/login.png";
import { useLoginUserMutation, useSessiondataQuery } from "@/services/authSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/services/globaluserauthData";

const LoginForm = ({ goToRegister, goToForgot, closemodal }) => {
  const [loginUser] = useLoginUserMutation();

  const [shouldFetchSession, setShouldFetchSession] = useState(false); // ✅ control session fetch
  const { data: sessionData } = useSessiondataQuery(undefined, { skip: !shouldFetchSession });

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (sessionData?.user) {
      console.log("✅ Session data:", sessionData.user);
    }
  }, [sessionData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password || formData.password.length < 5)
      newErrors.password = "Password must be at least 5 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {

    e.preventDefault();
    if (!validateForm()) return;

    try {
      const { data, error } = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (error || !data?.user) {
        const msg = error?.data?.message || "Login failed";
        if (msg.includes("email")) setErrors((prev) => ({ ...prev, email: msg }));
        else if (msg.includes("password")) setErrors((prev) => ({ ...prev, password: msg }));
        else setServerError(msg);
        return;
      }

      dispatch(setCredentials(data.user));
      setFormData({ email: "", password: "", rememberMe: false });
      // ✅ Trigger session query after login
      setShouldFetchSession(true);
      closemodal();

    } catch (err) {
      console.error("Login error:", err);
      setServerError("Something went wrong. Please try again.");
    }
  };

  
      
      

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="hidden lg:block lg:w-1/2 bg-white p-10">
        <Image src={loginSvg} alt="login" className="w-full h-auto" />
      </div>
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">Welcome back 👋</h2>
        <p className="text-gray-500 mb-6">Sign in to access your personalized trading dashboard and premium signals.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full p-3 border rounded-md"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 border rounded-md"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
              Remember me
            </label>
            <button type="button" onClick={goToForgot} className="text-yellow-700 hover:underline">
              Forgot Password?
            </button>
          </div>

          {serverError && <p className="text-sm text-red-600 text-center">{serverError}</p>}

          <button type="submit"  className="w-full bg-yellow-400 p-3 rounded-md font-semibold hover:bg-yellow-500">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span onClick={goToRegister} className="text-yellow-700 cursor-pointer font-semibold">
            Create free account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
