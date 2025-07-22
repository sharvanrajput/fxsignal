'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const SignalManagerPopup = ({ isOpen, onClose, onSubmit }) => {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        uploadedFile: null,
        profilePhoto: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            onSubmit(formValues);
            onClose();
        }
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl lg:w-[600px] md:w-[400px] w-[320px] max-h-screen overflow-y-auto">
                <div className="flex justify-between items-start p-6">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Become a Signal Manager at FXSignals</h2>
                        <p className="text-gray-600 text-sm">Track your trading signals, guide others, and earn with your proven trading strategy.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 p-2 bg-gradient-to-br from-heading-c1 to-heading-c2 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>
                </div>
                <div className="flex justify-between space-x-4 p-6 pb-4">
                    {[1, 2, 3].map((stepNum) => (
                        <div
                            key={stepNum}
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${stepNum === step
                                ? 'bg-yellow-400 text-black'
                                : stepNum < step
                                    ? 'bg-yellow-400 text-gray-700'
                                    : 'bg-yellow-200 text-gray-500'
                                }`}
                        >
                            {stepNum}
                        </div>
                    ))}
                </div>
                <div className="px-6 pb-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {step === 1 && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formValues.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formValues.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-md transition-colors"
                                >
                                    Proceed
                                </button>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formValues.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-md transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-md transition-colors"
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Uploaded File (PDF/Doc)</label>
                                    <div className="border border-gray-300 rounded-md overflow-hidden text-center">
                                        <input
                                            type="file"
                                            name="uploadedFile"
                                            onChange={handleChange}
                                            className="hidden"
                                            id="uploaded-file-upload"
                                        />
                                        <label htmlFor="uploaded-file-upload" className="cursor-pointer flex items-center text-sm">
                                            <div className="bg-[#e3e3e0] px-3 py-2">
                                                {formValues.uploadedFile ? formValues.uploadedFile.name : 'Choose File'}
                                            </div>
                                            <div className="text-gray-400 mt-1 px-3 py-1">
                                                {formValues.uploadedFile ? 'File Selected' : 'No File Chosen'}
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo (JPG/PNG)</label>
                                    <div className="border border-gray-300 rounded-md text-center overflow-hidden">
                                        <input
                                            type="file"
                                            name="profilePhoto"
                                            onChange={handleChange}
                                            className="hidden"
                                            id="profile-photo-upload"
                                        />
                                        <label htmlFor="profile-photo-upload" className="cursor-pointer flex items-center text-sm">
                                            <div className="bg-[#e3e3e0] px-3 py-2">
                                                {formValues.profilePhoto ? formValues.profilePhoto.name : 'Choose File'}
                                            </div>
                                            <div className="text-gray-400 mt-1 px-3 py-1">
                                                {formValues.profilePhoto ? 'File Selected' : 'No File Chosen'}
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-md transition-colors"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-md transition-colors"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignalManagerPopup;