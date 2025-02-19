
"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import logo from "@/assets/logo.png";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform authentication logic here (API call, validation, etc.)
    
    // On successful login, navigate to /add-student
    router.push("/students/add");
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
            <h1 className="text-2xl font-semibold text-blue-600">
              School-EG Portal
            </h1>
            <p className="text-sm text-gray-500">Secure Digital Management</p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-700">Phone Number</label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-700">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <Button
                type="button"
                onClick={handleForgotPassword}
                variant="link"
                className="text-blue-600 text-sm"
              >
                Forgot Password?
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            >
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
