"use client";
import { useState } from "react";
import Image from "next/image";
import registerSvg from "@/public/img/register.png";

const RegisterForm = ({ goToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
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

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
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

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Left image (hide on small screens) */}
      <div className="hidden lg:block lg:w-1/2 bg-white p-10">
        <Image src={registerSvg} alt="register" className="w-full h-auto" />
      </div>

      {/* Right form section */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">Create Your Account</h2>
        <p className="text-gray-500 mb-6">Get access to real-time trade signals, insights, and premium tools.</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="w-full p-3 border rounded-md"
              />
              {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
            </div>

            <div className="w-full">
              <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full p-3 border rounded-md"
              />
              {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full p-3 border rounded-md"
              />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                className="w-full p-3 border rounded-md"
              />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 border rounded-md"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 border rounded-md"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 p-3 rounded-md font-semibold hover:bg-yellow-500"
          >
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
