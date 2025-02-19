"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";

const schema = yup.object().shape({
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

export default function AddStudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [photo, setPhoto] = useState<string | null>(null);

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

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Student</h2>
      
      <div className="text-center">
        {photo ? (
          <Image src={photo} alt="Student Preview" className="mx-auto w-32 h-32 object-cover rounded-full mb-4" />
        ) : (
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-gray-500">No Photo</span>
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleFileChange} className="w-full" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Student Name</label>
          <input
            type="text"
            {...register("studentName")}
            className="w-full border p-2 rounded"
          />
          <p className="text-red-500 text-sm">{errors.studentName?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select {...register("gender")} className="w-full border p-2 rounded">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Select Parent</label>
          <select {...register("parent")} className="w-full border p-2 rounded">
            <option value="">Select Parent</option>
            <option value="ABC">ABC</option>
            <option value="DEF">DEF</option>
          </select>
          <p className="text-red-500 text-sm">{errors.parent?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Enter DOB</label>
          <input type="date" {...register("dob")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.dob?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Admission Date</label>
          <input type="date" {...register("admissionDate")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.admissionDate?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Admission Number</label>
          <input type="text" {...register("admissionNumber")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.admissionNumber?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Aadhar Number</label>
          <input type="text" {...register("aadharNumber")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.aadharNumber?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Aapar Number</label>
          <input type="text" {...register("aaparNumber")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.aaparNumber?.message}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">PEN Number</label>
          <input type="text" {...register("penNumber")} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.penNumber?.message}</p>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Add Student
        </button>
      </form>
    </div>
  );
}