import Image from 'next/image';
import forgotSvg from '@/public/img/Forgot-Password.png';
import { useForgotPasswordMutation } from '@/services/authSlice';

const ForgotPasswordForm = ({ goBack, onNext }) => {

  const [forgotPassword, { isLoading, isError }] = useForgotPasswordMutation()



  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await forgotPassword({ email })

    if (!email) return alert("Please enter your email");
    if (email) {
      onNext(email);
    }

    if (isError) {
      return <h1>Something went wrong</h1>
    }
  };


  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-white p-10">
        <Image src={forgotSvg} alt="forgot" className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-10">
        {
          isLoading ? (
            <div className="loader"></div>
          ) : (
            <>
              <h2 className="md:text-4xl  text-2xl font-bold bg-gradient-to-tl bg-clip-text from-heading-c2 to-heading-c1 mb-2">Forgot Your Password?</h2>
              <p className="text-gray-500 mb-6">Enter your registered email to receive a one-time password (OTP) for resetting your account.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" name="email" placeholder="example@gmail.com" className="w-full p-3 border rounded-md" />
                <div className="flex space-x-2">
                  <button type="button" onClick={goBack} className="w-1/2 bg-black text-white p-3 rounded-md">Back</button>
                  <button type="submit" className="w-1/2 bg-yellow-400 p-3 rounded-md font-semibold">Send OTP</button>
                </div>
              </form>
            </>
          )}
      </div>
    </div>

  );
};

export default ForgotPasswordForm;