"use client";

import { useState } from "react";
import Image from "next/image";
import resetSvg from "@/public/img/reset-pas.png";
import { useResetPasswordMutation } from "@/services/authSlice";


const ResetPasswordForm = ({ goToLogin  }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    // 🔒 Frontend validation
    if (!newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const res = await resetPassword({
        password: newPassword,
        confirmPassword: confirmPassword,
      }).unwrap();

      setSuccessMsg(res.message || "Password reset successfully.");
      setNewPassword("");
      setConfirmPassword("");

      // ⏳ Redirect to login after success
      setTimeout(() => {
        goToLogin();
      }, 2000);
    } catch (err) {
      console.error("Reset failed:", err);
      const message =
        err?.data?.message || "Failed to reset password. Try again.";
      setError(message);
    }
  };

  return (
    <div className="flex w-full">
      <div className="w-1/2 bg-white p-10">
        <Image src={resetSvg} alt="reset" className="w-full h-auto" />
      </div>

      <div className="w-1/2 p-10">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">
          Reset Your Password?
        </h2>
        <p className="text-gray-500 mb-6">
          Your new password must be strong and different from previous ones.
        </p>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {successMsg && <div className="text-green-600 mb-4">{successMsg}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-3 border rounded-md"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full p-3 border rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={goToLogin}
              className="w-1/2 bg-black text-white p-3 rounded-md"
            >
              Back to login
            </button>
            <button
              type="submit"
              className="w-1/2 bg-yellow-400 p-3 rounded-md font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
