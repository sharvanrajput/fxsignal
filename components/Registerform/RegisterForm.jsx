"use client";

import { useState } from "react";
import Image from "next/image";
import registerSvg from "@/public/img/register.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRegisterUserMutation } from "@/services/authSlice";

const RegisterForm = ({ goToLogin }) => {
  const [registerUser] = useRegisterUserMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile_no: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
    setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile_no.trim()) {
      newErrors.mobile_no = "Phone number is required";
    } else if (!/^\+?[1-9]\d{7,14}$/.test(formData.mobile_no)) {
      newErrors.mobile_no = "Enter a valid phone number with country code";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm password";
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const { data, error } = await registerUser({
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        mobile_no: formData.mobile_no,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });

      if (error) {
        const msg = error.data?.message || "Registration failed";
        if (msg.includes("firstname")) setErrors((prev) => ({ ...prev, firstName: msg }));
        else if (msg.includes("lastname")) setErrors((prev) => ({ ...prev, lastName: msg }));
        else if (msg.includes("email")) setErrors((prev) => ({ ...prev, email: msg }));
        else if (msg.includes("Mobile")) setErrors((prev) => ({ ...prev, mobile_no: msg }));
        else if (msg.includes("Password")) setErrors((prev) => ({ ...prev, password: msg }));
        else if (msg.includes("match")) setErrors((prev) => ({ ...prev, confirmPassword: msg }));
        else setServerError(msg);
        return;
      }

      alert("User registered successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile_no: "",
        password: "",
        confirmPassword: "",
      });
      goToLogin();
    } catch (err) {
      setServerError("Something went wrong. Please try again later.");
      console.error("Registration Error:", err);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="hidden lg:block lg:w-1/2 bg-white p-10">
        <Image src={registerSvg} alt="register" className="w-full h-auto" />
      </div>

      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">Create Your Account</h2>
        <p className="text-gray-500 mb-6">
          Get access to real-time trade signals, insights, and premium tools.
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm text-gray-700">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full p-3 border rounded-md"
              />
              {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm text-gray-700">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full p-3 border rounded-md"
              />
              {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block mb-1 text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full p-3 border rounded-md"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="w-full">
              <label className="block mb-1 text-sm text-gray-700">Phone</label>
              <PhoneInput
                country={"in"}
                value={formData.mobile_no}
                onChange={(value) => setFormData((prev) => ({ ...prev, mobile_no: `+${value}` }))}
                inputClass="!w-full !p-3 !border !rounded-md"
              />
              {errors.mobile_no && <p className="text-sm text-red-500">{errors.mobile_no}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 border rounded-md"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 border rounded-md"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          {serverError && <p className="text-sm text-red-600 text-center">{serverError}</p>}

          <button type="submit" className="w-full bg-yellow-400 p-3 rounded-md font-semibold">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span onClick={goToLogin} className="text-yellow-700 cursor-pointer font-semibold">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
