"use client";
import React, { useState, Suspense } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useReset_passwordMutation } from "@/provider/api/auth";
import { toast } from "sonner";


function ForgotPasswordContent() {
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";
  const role = searchParams.get("role") || "";
  const schoolId = searchParams.get("schoolId") || "";
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [resetPassword, { isLoading }] = useReset_passwordMutation();

  interface HandleOtpSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleOtpSubmit = async (e: HandleOtpSubmitEvent): Promise<void> => {
    e.preventDefault();
    if (otp.length === 4 && /^\d{4}$/.test(otp) && password.length > 0) {
      try {
        const response = await resetPassword({
          phone,
          otp,
          role,
          schoolId,
          newPassword: password,
        }).unwrap();

        console.log("Password reset successful:", response);
        toast.success("Password updated successfully");
        router.push("/login");
      } catch (error) {
        console.error("Password reset failed:", error);
      }
    } else {
      console.log("Please enter a valid 4-digit OTP and a password");
    }
  };

  const navigateToLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[450px] shadow-lg">
        <CardHeader className="space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
              <Image alt="logo" src={logo} className="w-12 h-12 bg-cover" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-blue-600">Verify OTP</h1>
            <p className="text-sm text-gray-500">
              Enter the 4-digit OTP sent to {phone || "your phone"}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          <form onSubmit={handleOtpSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-sm text-gray-700 block text-center">
                OTP
              </label>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup className="gap-8">
                    <InputOTPSlot index={0} className="w-12 h-12 text-lg" />
                    <InputOTPSlot index={1} className="w-12 h-12 text-lg" />
                    <InputOTPSlot index={2} className="w-12 h-12 text-lg" />
                    <InputOTPSlot index={3} className="w-12 h-12 text-lg" />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm text-gray-700 block text-center">
                New Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="h-12 text-lg pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            >
              Submit
            </Button>
          </form>

          <div className="space-y-4">
            <Button
              variant="link"
              disabled={isLoading}
              onClick={navigateToLogin}
              className="w-full text-gray-600 text-sm flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Login
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Check your phone for the 4-digit OTP
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


const ForgotPasswordPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ForgotPasswordContent />
    </Suspense>
  );
};

export default ForgotPasswordPage;