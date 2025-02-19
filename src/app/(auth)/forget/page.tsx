import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";
const ForgotPasswordPage = () => {
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
            <h1 className="text-2xl font-semibold text-blue-600">Forgot Password</h1>
            <p className="text-sm text-gray-500">Enter your phone number to reset password</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-700">Phone Number</label>
            <Input 
              type="tel" 
              placeholder="Enter your phone number"
              className="w-full"
            />
          </div>

          <div className="space-y-4">
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            >
              Send Reset Link
            </Button>

            <Button
              variant="ghost"
              className="w-full text-gray-600 text-sm flex items-center justify-center gap-2"
              
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Login
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              We will send you a link to reset your password
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;