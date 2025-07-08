import Image from 'next/image';
import resetSvg from '@/public/img/reset-pas.png';

const ResetPasswordForm = ({ goToLogin }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-white p-10">
        <Image src={resetSvg} alt="reset" className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">Reset Your Password?</h2>
        <p className="text-gray-500 mb-6">Your new password must be strong and different from previous ones.</p>
        <form className="space-y-4">
          <input type="password" placeholder="New Password" className="w-full p-3 border rounded-md" />
          <input type="password" placeholder="Confirm New Password" className="w-full p-3 border rounded-md" />
          <div className="flex space-x-2">
            <button type="button" onClick={goToLogin} className="w-1/2 bg-black text-white p-3 rounded-md">Back to login</button>
            <button type="submit" className="w-1/2 bg-yellow-400 p-3 rounded-md font-semibold">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPasswordForm;