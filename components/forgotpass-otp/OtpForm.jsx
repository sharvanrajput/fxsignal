import Image from 'next/image';
import otpSvg from '@/public/img/otp.png';

const OtpForm = ({ email, goBack, onVerify }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-white p-10">
        <Image src={otpSvg} alt="otp" className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">Forgot Your Password?</h2>
        <p className="text-gray-500 mb-6">Enter the OTP sent to your registered email.</p>
        <p className="text-sm text-gray-400 mb-2">Email: {email}</p>
        <form className="space-y-4">
          <div className="flex space-x-2 justify-between">
            {Array.from({ length: 6 }).map((_, i) => (
              <input key={i} maxLength="1" className="w-10 h-10 border rounded text-center" />
            ))}
          </div>
          <p className="text-sm text-red-500">The OTP you entered is incorrect or expired.</p>
          <div className="flex justify-between text-sm">
            <button type="button" onClick={goBack} className="bg-black text-white px-6 py-2 rounded">Back</button>
            <button type="button" onClick={onVerify} className="bg-yellow-400 px-6 py-2 rounded">Verify</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default OtpForm;