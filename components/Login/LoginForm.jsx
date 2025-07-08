import Image from 'next/image';
import loginSvg from '@/public/img/login.png';

const LoginForm = ({ goToRegister, goToForgot }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-white p-10">
        <Image src={loginSvg} alt="login" className="w-full h-auto" />
      </div>
      <div className="w-1/2 p-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">Welcome back 👋</h2>
        <p className="text-gray-500 mb-6">Sign in to access your personalized trading dashboard and premium signals.</p>
        <form className="space-y-4">
          <input type="email" placeholder="example@gmail.com" className="w-full p-3 border rounded-md" />
          <input type="password" placeholder="********" className="w-full p-3 border rounded-md" />
          <div className="flex justify-between items-center text-sm">
            <label><input type="checkbox" /> Remember me</label>
            <button type="button" onClick={goToForgot} className="text-yellow-700">Forgot Password?</button>
          </div>
          <button className="w-full bg-yellow-400 p-3 rounded-md font-semibold">Login</button>
        </form>
        <p className="text-sm text-center mt-4">Don't have an account? <span onClick={goToRegister} className="text-yellow-700 cursor-pointer">Create free account</span></p>
      </div>
    </div>
  );
};
export default LoginForm;