"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useRouter } from "next/navigation";
import {
  useLoginMutation,
  useRole_by_phoneMutation,
  useSend_otpMutation,
} from "@/provider/api/auth";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

// Types
type Role = "school" | "branch" | "user";

interface LoginFormData {
  phoneNumber: string;
  password?: string;
  schoolId?: string;
  role: Role | string;
}

interface UserRole {
  id: string;
  role: string;
}

// Constants
const ROLE_DESCRIPTIONS: Record<Role, string> = {
  school: "School Management Portal",
  branch: "Branch Administration Portal",
  user: "User Portal",
};

// Reusable Form Input Component
const FormInput = ({ label, ...props }:any) => (
  <div className="space-y-2">
    <label className="text-sm text-gray-700">{label}</label>
    <Input className="w-full" {...props} />
  </div>
);

// Password Input Component with Toggle
const PasswordInput = ({ label, value, onChange, ...props }:any) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-700">{label}</label>
      <div className="relative">
        <Input 
          type={showPassword ? "text" : "password"} 
          value={value}
          onChange={onChange}
          className="w-full pr-10"
          {...props}
        />
        <button 
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

// Reusable Role Selector Component
const RoleSelector = ({ roles, value, onChange }:any) => (
  <div className="space-y-2">
    <label className="text-sm text-gray-700">Select Role</label>
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent>
        {roles.map((roleOption:any, index:any) => (
          <SelectItem key={index} value={roleOption.role}>
            {roleOption.role}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

// Login Header Component
const LoginHeader = ({ role }: { role: Role }) => (
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

// Login Form Component
const LoginForm = ({ role }: { role: Role }) => {
  const router = useRouter();
  const [login] = useLoginMutation();
  const [send_otp] = useSend_otpMutation();
  const [getUserRole] = useRole_by_phoneMutation();
  
  const [formData, setFormData] = useState<LoginFormData>({
    phoneNumber: "",
    password: "",
    schoolId: "",
    role,
  });
  
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);
  const [step, setStep] = useState<"initial" | "roleSelect">("initial");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "user" && step === "initial") {
      try {
        const response = await getUserRole({
          phone: formData.phoneNumber,
          schoolId: formData.schoolId,
        }).unwrap();
        
        if (response.results) {
          setUserRoles(response.results);
        }
        
        if (response.results && response.results.length > 0) {
          setStep("roleSelect");
        } else {
          toast("No roles found for this user");
        }
      } catch (error) {
        toast(`Error fetching roles: ${JSON.stringify(error, null, 2)}`);
      }
    } else {
      handleLoginSubmit(e);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { phoneNumber, password, schoolId, role } = formData;
    
    try {
      const resp = await login({
        role,
        phone: phoneNumber,
        password,
        schoolId,
      }).unwrap();
      
      localStorage.setItem("userDetail", resp.data);
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("schoolid", schoolId || "");
      
      router.push("/dashboard/student");
    } catch (error) {
      toast(`${JSON.stringify(error, null, 2)}`);
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phoneNumber) {
      return toast.error("Phone number is required");
    }
    if (!formData.schoolId) {
      return toast.error("School ID is required");
    }

    if (role === "user") {
      try {
        const response = await getUserRole({
          phone: formData.phoneNumber,
          schoolId: formData.schoolId,
        }).unwrap();

        if (response.results && response.results.length > 0) {
          setUserRoles(response.results);
          if (response.results.length === 1) {
            // If only one role, use it directly
            await sendOtp(response.results[0].role);
          } else {
            // If multiple roles, wait for selection
            setStep("roleSelect");
            return;
          }
        } else {
          toast("No roles found for this user");
          return;
        }
      } catch (error) {
        toast(`Error fetching roles: ${JSON.stringify(error, null, 2)}`);
        return;
      }
    } else {
      await sendOtp(formData.role);
    }
  };

  const sendOtp = async (selectedRole: string) => {
    try {
      const response = await send_otp({
        phone: formData.phoneNumber,
        role: selectedRole,
        schoolId: formData.schoolId,
      }).unwrap();
      
      toast.success("OTP sent successfully");
      
      if (response) {
        router.push(
          `/forgot-password?phone=${formData.phoneNumber}&role=${selectedRole}&schoolId=${formData.schoolId}`
        );
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      console.error("Error sending OTP:", error);
    }
  };

  const renderLoginForm = () => (
    <form
      onSubmit={
        role === "user" && step === "initial"
          ? handleInitialSubmit
          : handleLoginSubmit
      }
      className="space-y-4"
    >
      <FormInput
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Enter your phone number"
        required
      />

      <FormInput
        label="School ID"
        type="text"
        name="schoolId"
        value={formData.schoolId}
        onChange={handleChange}
        placeholder="Enter your School ID"
        required
      />

      {role === "user" && step === "roleSelect" && (
        <RoleSelector
          roles={userRoles}
          value={formData.role}
          onChange={handleRoleChange}
        />
      )}

      {(role !== "user" || step === "roleSelect") && (
        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
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
        {role === "user" && step === "initial"
          ? "Continue"
          : `Sign In as ${
              formData.role.charAt(0).toUpperCase() + formData.role.slice(1)
            }`}
      </Button>
    </form>
  );

  const renderForgotPasswordForm = () => (
    <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
      <FormInput
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Enter your phone number"
        required
      />

      <FormInput
        label="School ID"
        type="text"
        name="schoolId"
        value={formData.schoolId}
        onChange={handleChange}
        placeholder="Enter your School ID"
        required
      />

      {role === "user" && step === "roleSelect" && userRoles.length > 1 && (
        <RoleSelector
          roles={userRoles}
          value={formData.role}
          onChange={handleRoleChange}
        />
      )}

      <div className="flex justify-between items-center pt-2">
        <Button
          type="button"
          variant="link"
          className="text-blue-600 text-sm"
          onClick={() => {
            setShowForgotPassword(false);
            setStep("initial");
          }}
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
  );

  return <>{!showForgotPassword ? renderLoginForm() : renderForgotPasswordForm()}</>;
};

// Main Login Page Component
const LoginPage = () => {
  const [selectedRole, setSelectedRole] = useState<Role>("school");

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
              <LoginForm role="school" />
            </TabsContent>
            <TabsContent value="branch">
              <LoginForm role="branch" />
            </TabsContent>
            <TabsContent value="user">
              <LoginForm role="user" />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default LoginPage;