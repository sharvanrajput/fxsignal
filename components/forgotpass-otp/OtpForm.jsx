import { useState } from 'react';
import Image from 'next/image';
import otpSvg from '@/public/img/otp.png';
import { useOtpverifyMutation } from '@/services/authSlice';

const OtpForm = ({ email, goBack, onVerify }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [verifyOtp, { isLoading, isError, error }] = useOtpverifyMutation();

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');

    try {
      const res = await verifyOtp({ email, otp: otpCode }).unwrap();
      onVerify(res); // pass data back to parent
    } catch (err) {
      console.error("OTP verification failed", err);
    }
  };

  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-white p-10">
        <Image src={otpSvg} alt="otp" className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-10">
        <h2 className="md:text-4xl  text-2xl font-bold bg-gradient-to-tl bg-clip-text from-heading-c2 to-heading-c1 mb-2">OTP Verification</h2>
        <p className="text-gray-500 mb-4">Enter the 6-digit OTP sent to:</p>
        <p className="text-sm text-gray-600 mb-6">{email}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-6 gap-3 justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className="w-full h-10 border rounded text-center text-lg"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>

          {isError && (
            <p className="text-sm text-red-500">
              {error?.data?.message || "The OTP you entered is incorrect or expired."}
            </p>
          )}

          <div className="flex justify-between text-sm mt-4">
            <button
              type="button"
              onClick={goBack}
              className="bg-black text-white px-6 py-2 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-yellow-400 px-6 py-2 rounded font-semibold"
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpForm;
