"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

const validationSchema = yup.object().shape({
  studentName: yup.string().required("Student name is required"),
  gender: yup.string().required("Gender is required"),
  parent: yup.string().required("Parent selection is required"),
  dob: yup.string().required("Date of Birth is required"),
  admissionDate: yup.string().required("Admission Date is required"),
  admissionNumber: yup.string().required("Admission Number is required"),
  aadharNumber: yup.string().required("Aadhar Number is required"),
  aaparNumber: yup.string().required("Aapar Number is required"),
  penNumber: yup.string().required("PEN Number is required"),
});

interface FormData {
  studentName: string;
  gender: string;
  parent: string;
  dob: string;
  admissionDate: string;
  admissionNumber: string;
  aadharNumber: string;
  aaparNumber: string;
  penNumber: string;
}

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const FormField = ({ label, error, children }: FormFieldProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default function AddStudentForm() {
  const [photo, setPhoto] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-8">Add Student</h2>

      <div className="flex flex-col items-center mb-8">
        {photo ? (
          <Image
            src={photo}
            alt="Student Preview"
            width={150}
            height={150}
            className="rounded-full object-cover mb-4 h-32"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-gray-500">No Photo</span>
          </div>
        )}
        <div className="flex items-center justify-center w-full mt-4">
          <label className="flex flex-col items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
            <span className="text-sm font-medium">Upload Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField label="Student Name" error={errors.studentName?.message}>
            <input
              type="text"
              {...register("studentName")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </FormField>

          <FormField label="Gender" error={errors.gender?.message}>
            <select
              {...register("gender")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </FormField>

          <FormField label="Select Parent" error={errors.parent?.message}>
            <select
              {...register("parent")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Parent</option>
              <option value="ABC">ABC</option>
              <option value="DEF">DEF</option>
            </select>
          </FormField>

          <FormField label="Date of Birth" error={errors.dob?.message}>
            <input
              type="date"
              {...register("dob")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </FormField>

          <FormField
            label="Admission Date"
            error={errors.admissionDate?.message}
          >
            <input
              type="date"
              {...register("admissionDate")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </FormField>

          <FormField
            label="Admission Number"
            error={errors.admissionNumber?.message}
          >
            <input
              type="text"
              {...register("admissionNumber")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </FormField>

          <FormField label="Aadhar Number" error={errors.aadharNumber?.message}>
            <input
              type="text"
              {...register("aadharNumber")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </FormField>

          <FormField label="Aapar Number" error={errors.aaparNumber?.message}>
            <input
              type="text"
              {...register("aaparNumber")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </FormField>

          <FormField label="PEN Number" error={errors.penNumber?.message}>
            <input
              type="text"
              {...register("penNumber")}
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </FormField>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="w-1/3 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}
