"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/provider/api/auth";

// Types
type Role = "school" | "branch" | "user";

interface LoginFormData {
  phoneNumber: string;
  password?: string;
  schoolId?: string;
  role: Role;
}

interface LoginFormProps {
  role: Role;
  isInitialLogin?: boolean;
  onSubmit: (data: LoginFormData) => void;
}

// Constants
const ROLE_DESCRIPTIONS: Record<Role, string> = {
  school: "School Management Portal",
  branch: "Branch Administration Portal",
  user: "User Portal",
};

const LoginForm: React.FC<LoginFormProps> = ({
  role,
  isInitialLogin = false,
  onSubmit,
}) => {
  const router = useRouter();
  const [formData, setFormData] = React.useState<LoginFormData>({
    phoneNumber: "",
    password: "",
    schoolId: "",
    role,
  });
  const [showForgotPassword, setShowForgotPassword] = React.useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phoneNumber) {
      // Here you could add API call to verify phone number if needed
      router.push(`/forgot-password?phone=${formData.phoneNumber}`);
    }
  };

  return (
    <>
      {!showForgotPassword ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-700">Phone Number</label>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full"
              required
            />
          </div>

          {role !== "user" && (
            <>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">School ID</label>
                <Input
                  type="text"
                  name="schoolId"
                  value={formData.schoolId}
                  onChange={handleChange}
                  placeholder="Enter your School ID"
                  className="w-full"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-700">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full"
                  required
                />
              </div>
            </>
          )}

          {role === "user" && (
            <div className="space-y-2">
              <label className="text-sm text-gray-700">School ID</label>
              <Input
                type="text"
                name="schoolId"
                value={formData.schoolId}
                onChange={handleChange}
                placeholder="Enter your School ID"
                className="w-full"
                required
              />
            </div>
          )}

          <div className="flex justify-between items-center pt-2">
            <Button
              type="button"
              variant="link"
              className="text-blue-600 text-sm"
              onClick={handleForgotPasswordClick}
            >
              Forgot Password?
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white"
          >
            Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-700">Phone Number</label>
            <Input
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full"
              required
            />
          </div>
          <div className="flex justify-between items-center pt-2">
            <Button
              type="button"
              variant="link"
              className="text-blue-600 text-sm"
              onClick={() => setShowForgotPassword(false)}
            >
              Back to Login
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            >
              Continue
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

const LoginHeader: React.FC<{ role: Role }> = ({ role }) => (
  <CardHeader className="space-y-6">
    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
        <Image alt="logo" src={logo} className="w-10 h-10 bg-cover" />
      </div>
    </div>
    <div className="text-center space-y-2">
      <h1 className="text-2xl font-semibold text-blue-600">School-EG Portal</h1>
      <p className="text-sm text-gray-500">{ROLE_DESCRIPTIONS[role]}</p>
    </div>
  </CardHeader>
);

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [login] = useLoginMutation();
  const [selectedRole, setSelectedRole] = React.useState<Role>("school");

  const handleLoginSubmit = async (data: LoginFormData) => {
    router.push("/dashboard/student");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[400px] shadow-lg">
        <Tabs
          value={selectedRole}
          onValueChange={(value) => setSelectedRole(value as Role)}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="school">School</TabsTrigger>
            <TabsTrigger value="branch">Branch</TabsTrigger>
            <TabsTrigger value="user">User</TabsTrigger>
          </TabsList>

          <LoginHeader role={selectedRole} />

          <CardContent>
            <TabsContent value="school">
              <LoginForm role="school" onSubmit={handleLoginSubmit} />
            </TabsContent>
            <TabsContent value="branch">
              <LoginForm role="branch" onSubmit={handleLoginSubmit} />
            </TabsContent>
            <TabsContent value="user">
              <LoginForm role="user" onSubmit={handleLoginSubmit} />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default LoginPage;