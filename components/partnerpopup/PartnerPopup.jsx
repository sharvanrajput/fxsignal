'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const AllInputsPopup = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    uploadedFile: null,
    profilePhoto: null,
    selectedCategory: '',
    sampleFile: null,
    website: '',
    promotionLogo: null,
    promotionLink: '',
    message: '',
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">All Inputs Form</h2>
            <p className="text-gray-600 text-sm">Complete all fields across multiple steps.</p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 bg-gradient-to-br from-heading-c1 to-heading-c2 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="flex justify-between space-x-4 px-6 pb-4">
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
                  onClick={handleSubmit}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Proceed
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sample File (PDF or Doc)</label>
                  <div className="border border-gray-300 rounded-md overflow-hidden text-center">
                    <input
                      type="file"
                      name="sampleFile"
                      onChange={handleChange}
                      className="hidden"
                      id="sample-file-upload"
                    />
                    <label htmlFor="sample-file-upload" className="cursor-pointer flex items-center text-sm">
                      <div className="bg-[#e3e3e0] px-3 py-2">
                        {formValues.sampleFile ? formValues.sampleFile.name : 'Choose File'}
                      </div>
                      <div className="text-gray-400 mt-1 px-3 py-1">
                        {formValues.sampleFile ? 'File Selected' : 'No File Chosen'}
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                  <input
                    type="url"
                    name="website"
                    value={formValues.website}
                    onChange={handleChange}
                    placeholder="www.example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Promotion Logo</label>
                  <div className="border border-gray-300 rounded-md text-center overflow-hidden">
                    <input
                      type="file"
                      name="promotionLogo"
                      onChange={handleChange}
                      className="hidden"
                      id="promotion-logo-upload"
                    />
                    <label htmlFor="promotion-logo-upload" className="cursor-pointer flex items-center text-sm">
                      <div className="bg-[#e3e3e0] px-3 py-2">
                        {formValues.promotionLogo ? formValues.promotionLogo.name : 'Choose File'}
                      </div>
                      <div className="text-gray-400 mt-1 px-3 py-1">
                        {formValues.promotionLogo ? 'File Selected' : 'No File Chosen'}
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Promotion Link</label>
                  <input
                    type="url"
                    name="promotionLink"
                    value={formValues.promotionLink}
                    onChange={handleChange}
                    placeholder="www.example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Type your message..."
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleBack}
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
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllInputsPopup;