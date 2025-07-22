"use client";
import Image from "next/image";
import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { X } from "lucide-react";

import Toprightarrowbutton from "@/components/button_icon/page.jsx";
import bg_shape_1 from "@/public/img/bg_shape_1.png";
import partner_page_hero_img from "@/public/img/partner-page-hero-img.png";
import AllInputsPopup from "../partnerpopup/PartnerPopup"; 

const PartnerAbout = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAllInputsPopup, setShowAllInputsPopup] = useState(false);

  // Modal state and functions for Partner form
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    logo: null,
    website: "",
    promotionLogo: null,
    promotionLink: "",
    message: "",
  });

  const openModal = () => {
    setShowModal(true);
    setCurrentStep(1);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    closeModal();
  };


  const openAllInputsPopup = () => {
    setShowAllInputsPopup(true);
  };

  const closeAllInputsPopup = () => {
    setShowAllInputsPopup(false);
  };

  const handleAllInputsSubmit = (values) => {
    console.log("All Inputs form submitted:", values);
    alert("All Inputs form submitted successfully!");
    closeAllInputsPopup();
  };

  return (
    <section
      className="about_banner pt-40 pb-20 bg-contain bg-center"
      style={{ backgroundImage: `url(${bg_shape_1.src})` }}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Left Content */}
          <div className="self-center">
            <h1 className="text-4xl font-bold leading-tight">
              Partner with FXSignals &{" "}
              <span className="text-light-yellow">Grow Your Business</span>
            </h1>
            <p className="text-para-dark text-lg py-3 mb-4">
              Expand your reach, attract more traders, and maximize your revenue with our
              exclusive partner and brokerage solutions.
            </p>

            <div onClick={openAllInputsPopup}>
              <Toprightarrowbutton btntext="Register as Partner" />
            </div>

          

            <p className="text-para-dark flex items-center mt-4">
              <IoCallOutline className="me-2" />
              For enquiries call: +971 503056430
            </p>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src={partner_page_hero_img}
              alt="Partner with FXSignals"
              className="w-[75%] mx-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Existing Partner Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-[600px] max-h-screen overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-start p-6">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Become a Partner with FXSignals
                </h2>
                <p className="text-gray-600 text-sm">
                  Expand your brokerage visibility. Get listed and grow your client base
                  through our platform.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="ml-4 p-2 bg-gradient-to-br from-heading-c1 to-heading-c2 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between space-x-4 p-6 pb-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${step === currentStep
                      ? "bg-yellow-400 text-black"
                      : step < currentStep
                      ? "bg-yellow-400 text-gray-700"
                      : "bg-yellow-200 text-gray-500"
                    }`}
                >
                  {step}
                </div>
              ))}
            </div>

            {/* Modal Content */}
           
          </div>
        </div>
      )}

      {/* New All Inputs Modal */}
      {showAllInputsPopup && (
        <AllInputsPopup
          isOpen={showAllInputsPopup}
          onClose={closeAllInputsPopup}
          onSubmit={handleAllInputsSubmit}
        />
      )}
    </section>
  );
};

export default PartnerAbout;