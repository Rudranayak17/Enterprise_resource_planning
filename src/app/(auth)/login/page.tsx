"use client";

import React from "react";
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

// Types
type Role = "school" | "branch" | "user";

interface LoginFormData {
phoneNumber: string;
password?: string;
schoolId?: string;
role: Role | string;
}
interface Roles {
id: string;
role: string;
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
const [login] = useLoginMutation();
const [formData, setFormData] = React.useState<LoginFormData>({
phoneNumber: "",
password: "",
schoolId: "",
role,
});
const [send_otp] = useSend_otpMutation();
const [showForgotPassword, setShowForgotPassword] = React.useState(false);
const [userRoles, setUserRoles] = React.useState<Roles[]>([]);
const [step, setStep] = React.useState<"initial" | "roleSelect">("initial");
const [getUserRole] = useRole_by_phoneMutation();

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
handleSubmit(e);
}
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
onSubmit(formData);
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
// console.log(response)
toast.success("otp send successfully");
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

return (
<>
{!showForgotPassword ? (
<form
onSubmit={
role === "user" && step === "initial"
? handleInitialSubmit
: handleSubmit
}
className="space-y-4"
>
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

{role === "user" && step === "roleSelect" && (
<div className="space-y-2">
<label className="text-sm text-gray-700">Select Role</label>
<Select onValueChange={handleRoleChange} value={formData.role}>
<SelectTrigger className="w-full">
<SelectValue placeholder="Select your role" />
</SelectTrigger>
<SelectContent>
{userRoles.map((roleOption, index) => (
<SelectItem key={index} value={roleOption.role}>
{roleOption.role}
</SelectItem>
))}
</SelectContent>
</Select>
</div>
)}

{(role !== "user" || step === "roleSelect") && (
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
) : (
<form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
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

{role === "user" && step === "roleSelect" && userRoles.length > 1 && (
<div className="space-y-2">
<label className="text-sm text-gray-700">Select Role</label>
<Select onValueChange={handleRoleChange} value={formData.role}>
<SelectTrigger className="w-full">
<SelectValue placeholder="Select your role" />
</SelectTrigger>
<SelectContent>
{userRoles.map((roleOption, index) => (
<SelectItem key={index} value={roleOption.role}>
{roleOption.role}
</SelectItem>
))}
</SelectContent>
</Select>
</div>
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
)}
</>
);
};

// Rest of the components (LoginHeader and LoginPage) remain the same
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
const { phoneNumber, password, schoolId, role } = data;
try {
const resp = await login({
role,
phone: phoneNumber,
password: password,
schoolId,
}).unwrap();
      console.log("hello",resp)
      
      localStorage.setItem("userDetail",resp.data)
      localStorage.setItem("token",resp.data.token)
      localStorage.setItem("schoolid",schoolId!)
router.push("/dashboard/student");
} catch (error) {
toast(`${JSON.stringify(error, null, 2)}`);
}
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