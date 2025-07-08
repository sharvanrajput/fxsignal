"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Registerform/RegisterForm";
import ForgotPasswordForm from "../ForgotPass/ForgotPasswordForm";
import OtpForm from "../forgotpass-otp/OtpForm";
import ResetPasswordForm from "../resetpass/ResetPasswordForm";



const AuthModal = ({ isOpen, onClose, defaultView = "login" }) => {
    const [view, setView] = useState(defaultView);
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (isOpen) {
            setView(defaultView);
        }
    }, [isOpen, defaultView]);

    if (!isOpen) return null;

    const goToRegister = () => setView("register");
    const goToLogin = () => setView("login");
    const goToForgot = () => setView("forgot");
    const goToOtp = (emailValue) => {
        setEmail(emailValue);
        setView("otp");
    };
    const goToReset = () => setView("reset");

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative w-11/12 max-w-6xl bg-white rounded-lg overflow-hidden">
                <button onClick={onClose} className="absolute top-4 right-4 text-xl text-yellow-800">
                    <IoClose />
                </button>

                {view === "login" && <LoginForm goToRegister={goToRegister} goToForgot={goToForgot} />}
                {view === "register" && <RegisterForm goToLogin={goToLogin} />}
                {view === "forgot" && <ForgotPasswordForm goBack={goToLogin} onNext={goToOtp} />}
                {view === "otp" && <OtpForm email={email} goBack={goToForgot} onVerify={goToReset} />}
                {view === "reset" && <ResetPasswordForm goToLogin={goToLogin} />}
            </div>
        </div>
    );
};

export default AuthModal;
