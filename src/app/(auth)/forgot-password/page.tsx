"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ChevronLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const ForgotPasswordPage = () => {
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";
  const [otp, setOtp] = useState("");
  const router = useRouter();


  interface HandleOtpSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleOtpSubmit = (e: HandleOtpSubmitEvent): void => {
    e.preventDefault();
    // Verify OTP - should be exactly 4 digits
    if (otp.length === 4 && /^\d{4}$/.test(otp)) {
      console.log("Verifying OTP:", { phone, otp });
    } else {
      console.log("Please enter a valid 4-digit OTP");
    }
  };
  const navigateToLogin = (e: React.FormEvent) => {
    e.preventDefault();
  router.push("/login")
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[400px] shadow-lg">
        <CardHeader className="space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
              <Image alt="logo" src={logo} className="w-10 h-10 bg-cover" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-blue-600">Verify OTP</h1>
            <p className="text-sm text-gray-500">
              Enter the 4-digit OTP sent to {phone || "your phone"}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-700 block text-center">
                OTP
              </label>
              <div className="flex justify-center">
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            >
              Verify OTP
            </Button>
          </form>

          <div className="space-y-4">
            <Button
              variant="link"
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
};

export default ForgotPasswordPage;
