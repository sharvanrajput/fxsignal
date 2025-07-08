"use client";
import Image from "next/image";
import { useState } from "react";
import { IoCallOutline, IoClose } from "react-icons/io5";
import { X } from "lucide-react";

import Toprightarrowbutton from "@/components/button_icon/page.jsx";
import bg_shape_1 from "@/public/img/bg_shape_1.png";
import partner_page_hero_img from "@/public/img/partner-page-hero-img.png";

const PartnerAbout = () => {
    const [showModal, setShowModal] = useState(false);

    // Modal state and functions
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        logo: null,
        website: '',
        promotionLogo: null,
        promotionLink: '',
        message: ''
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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            [field]: file
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
        closeModal();
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="example@gmail.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+91"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                        </div>

                        <button
                            onClick={nextStep}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-md transition-colors"
                        >
                            Proceed
                        </button>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Logo
                            </label>
                            <div className="border  border-gray-300 rounded-md overflow-hidden  text-center ">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'logo')}
                                    className="hidden"
                                    id="logo-upload"
                                />
                                <label htmlFor="logo-upload" className="cursor-pointer flex align-items-center !text-sm">
                                    <div className="  bg-[#e3e3e0] px-3 py-2 ">
                                        {formData.logo ? formData.logo.name : 'Choose File'}
                                    </div>
                                    <div className=" text-gray-400 mt-1 px-3 py-1">
                                        {formData.logo ? 'File Selected' : 'No File Chosen'}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Add Website URL
                            </label>
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange}
                                placeholder="www.example.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex space-x-3">
                            <button
                                onClick={prevStep}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-md transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-md transition-colors"
                            >
                                Proceed
                            </button>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Promotion Logo
                            </label>
                            <div className="border  border-gray-300 rounded-md  text-center  overflow-hidden">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e, 'promotionLogo')}
                                    className="hidden"
                                    id="promotion-logo-upload"
                                />
                                <label htmlFor="promotion-logo-upload" className="cursor-pointer flex !text-sm">
                                    <div className=" bg-[#e3e3e0] px-3 py-2">
                                        {formData.promotionLogo ? formData.promotionLogo.name : 'Choose File'}
                                    </div>
                                    <div className=" text-gray-400 mt-1 px-3 py-1">
                                        {formData.promotionLogo ? 'File Selected' : 'No File Chosen'}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Add Promotion Link
                            </label>
                            <input
                                type="url"
                                name="promotionLink"
                                value={formData.promotionLink}
                                onChange={handleInputChange}
                                placeholder="www.example.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Leave a Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Type your message..."
                                rows={2}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                            />
                        </div>

                        <div className="flex space-x-3">
                            <button
                                onClick={prevStep}
                                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-md transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-md transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
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
                            Expand your reach, attract more traders, and maximize your
                            revenue with our exclusive partner and brokerage solutions.
                        </p>

                        <div onClick={openModal}>
                            <Toprightarrowbutton
                                btntext="Register as Partner"
                            />
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

            {/* Modal Overlay + Content */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-[600px] max-h-screen overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex justify-between items-start p-6 ">
                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                    Become a Partner with FXSignals
                                </h2>
                                <p className="text-gray-600 !text-sm">
                                    Expand your brokerage visibility. Get listed and grow your client base through our platform.
                                </p>
                            </div>
                            <button
                                onClick={closeModal}
                                className="ml-4 p-2 bg-gradient-to-br from-heading-c1 to-heading-c2  rounded-full transition-colors"
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
                                            ? 'bg-yellow-400 text-black'
                                            : step < currentStep
                                                ? 'bg-yellow-400 text-gray-700'
                                                : 'bg-yellow-200 text-gray-500'
                                        }`}
                                >
                                    {step}
                                </div>
                            ))}
                        </div>

                        {/* Modal Content */}
                        <div className="px-6 pb-6">
                            {renderStep()}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PartnerAbout;