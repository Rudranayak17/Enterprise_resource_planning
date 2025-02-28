"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpload_FileMutation } from "@/provider/api/auth";

// Define the type for form data
interface FormData {
  branch_id?: number; // Optional if not always required
  name: string;
  gender: "Male" | "Female";
  role: string;
  user_type: string;
  photo: string;
  phone: string;
  password: string;
  email: string;
  driving_license?: string;
  dl_expiry_date?: string;
  address: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  qualification: string;
  aadhar_no: string;
  is_active?: boolean;
  is_deleted?: boolean;
  casual_leave: number;
  sick_leave: number;
  paid_leave: number;
  medical_leave: number;
  bank_name: string;
  bank_branch: string;
  bank_account_no: string;
  ifsc_code: string;
  bank_account_type: "SAVINGS" | "CURRENT";
}

// Validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  phone: yup.string().required("Phone is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  branch_id: yup.number().optional(),
  gender: yup
    .mixed<"Male" | "Female">()
    .oneOf(["Male", "Female"])
    .required("Gender is required"),
  role: yup.string().required("Role is required"),
  user_type: yup.string().required("User type is required"),
  photo: yup.string().required("Photo is required"),
  driving_license: yup.string().optional(),
  dl_expiry_date: yup.string().optional(),
  address: yup.string().required("Address is required"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  pincode: yup.string().required("Pincode is required"),
  qualification: yup.string().required("Qualification is required"),
  aadhar_no: yup.string().required("Aadhar number is required"),
  is_active: yup.boolean().optional(),
  is_deleted: yup.boolean().optional(),
  casual_leave: yup.number().required("Casual leave is required"),
  sick_leave: yup.number().required("Sick leave is required"),
  paid_leave: yup.number().required("Paid leave is required"),
  medical_leave: yup.number().required("Medical leave is required"),
  bank_name: yup.string().required("Bank name is required"),
  bank_branch: yup.string().required("Bank branch is required"),
  bank_account_no: yup.string().required("Bank account number is required"),
  ifsc_code: yup.string().required("IFSC code is required"),
  bank_account_type: yup
    .mixed<"SAVINGS" | "CURRENT">()
    .oneOf(["SAVINGS", "CURRENT"])
    .required("Bank account type is required"),
});

interface AddUserModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onSubmit: (data: FormData) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({
  isOpen,
  setIsOpen,
  onSubmit,
}) => {
  const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);
  const [photoFile, setPhotoFile] = React.useState<File | null>(null); // Store the file for upload
  const [uploadFile] = useUpload_FileMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      gender: "Male",
      role: "",
      user_type: "",
      photo: "",
      phone: "",
      password: "",
      email: "",
      address: "",
      country: "India",
      state: "",
      city: "",
      pincode: "",
      qualification: "",
      aadhar_no: "",
      casual_leave: 10,
      sick_leave: 5,
      paid_leave: 8,
      medical_leave: 3,
      bank_name: "",
      bank_branch: "",
      bank_account_no: "",
      ifsc_code: "",
      bank_account_type: "SAVINGS",
    },
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file); // Store the file for upload
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string); // Preview the image
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageHandler = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file); // Adjust the key based on your API requirements

      const response = await uploadFile(formData).unwrap(); // Assuming this returns the API response
      const imageUrl = response.files[0].location; // Extract the URL from the response
      console.log(imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };

  const onFormSubmit = async (data: FormData) => {
    try {
      let photoUrl = "";
      if (photoFile) {
        photoUrl = await uploadImageHandler(photoFile); // Upload the image and get the URL
        data.photo = photoUrl; // Set the photo URL in the form data
      }

      onSubmit(data); // Submit the form data with the photo URL
      setIsOpen(false);
      setPhotoPreview(null);
      setPhotoFile(null);
      reset();
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="photo">Photo</Label>
              <Input
                id="photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
              {photoPreview && (
                <div className="mt-2">
                  <Image
                    src={photoPreview}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input id="name" {...field} />}
              />
              {errors.name && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.name.message}
                </p>
              )}
            </div>
            {/* Other fields remain unchanged */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => <Input id="role" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user_type">Type</Label>
              <Controller
                name="user_type"
                control={control}
                render={({ field }) => <Input id="user_type" {...field} />}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <Input id="phone" {...field} />}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.phone.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input id="password" type="password" {...field} />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input id="email" type="email" {...field} />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Other sections remain unchanged */}
          {/* Address Information */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => <Input id="address" {...field} />}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => <Input id="country" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => <Input id="state" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => <Input id="city" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">PIN</Label>
              <Controller
                name="pincode"
                control={control}
                render={({ field }) => <Input id="pincode" {...field} />}
              />
            </div>
          </div>

          {/* Qualifications and Leaves */}
          <div className="space-y-2">
            <Label htmlFor="qualification">Qualification</Label>
            <Controller
              name="qualification"
              control={control}
              render={({ field }) => <Input id="qualification" {...field} />}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="casual_leave">Casual Leave</Label>
              <Controller
                name="casual_leave"
                control={control}
                render={({ field }) => (
                  <Input id="casual_leave" type="number" {...field} />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sick_leave">Sick Leave</Label>
              <Controller
                name="sick_leave"
                control={control}
                render={({ field }) => (
                  <Input id="sick_leave" type="number" {...field} />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="paid_leave">Paid Leave</Label>
              <Controller
                name="paid_leave"
                control={control}
                render={({ field }) => (
                  <Input id="paid_leave" type="number" {...field} />
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medical_leave">Medical Leave</Label>
              <Controller
                name="medical_leave"
                control={control}
                render={({ field }) => (
                  <Input id="medical_leave" type="number" {...field} />
                )}
              />
            </div>
          </div>

          {/* Bank Details */}
          <div className="space-y-2">
            <Label>Bank Details</Label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bank_name">Bank Name</Label>
              <Controller
                name="bank_name"
                control={control}
                render={({ field }) => <Input id="bank_name" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bank_branch">Branch</Label>
              <Controller
                name="bank_branch"
                control={control}
                render={({ field }) => <Input id="bank_branch" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account_no">Account No</Label>
              <Controller
                name="bank_account_no"
                control={control}
                render={({ field }) => <Input id="account_no" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ifsc_code">IFSC Code</Label>
              <Controller
                name="ifsc_code"
                control={control}
                render={({ field }) => <Input id="ifsc_code" {...field} />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account_type">Account Type</Label>
              <Controller
                name="bank_account_type"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SAVINGS">Savings</SelectItem>
                      <SelectItem value="CURRENT">Current</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          {/* Aadhar Number */}
          <div className="space-y-2">
            <Label htmlFor="aadhar_no">Aadhar No</Label>
            <Controller
              name="aadhar_no"
              control={control}
              render={({ field }) => <Input id="aadhar_no" {...field} />}
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsOpen(false);
                setPhotoPreview(null);
                setPhotoFile(null);
                reset();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
