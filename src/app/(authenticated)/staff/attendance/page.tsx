
import { TeacherCrumb } from "@/components/breadCrumb/dashBoard/BreadCrumb";
import { DatePickerDemo } from "@/components/DatePicker";

import TeacherAttendance from "@/components/TeacherAttendence";
import TeacherTable from "@/components/TeacherTable";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserTable from "@/components/UserTable";
import { teacherData, userData } from "@/constant/userData";

import React from "react";

const Page = () => {
  return (
    <div className="">
      {/* Attendance and Actions */}
      <TeacherCrumb/>
      <div className="flex flex-col md:flex-row items-center justify-between  md:space-y-0 ">
        <TeacherAttendance
          halfDay={5}
          absent={10}
          onLeave={5}
          present={40}
          total={60}
        />
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <Input placeholder="Search" className="w-full md:w-40" type="search" />
          <Select>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Select User Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1"> 1</SelectItem>
              <SelectItem value="2"> 2</SelectItem>
              <SelectItem value="3"> 3</SelectItem>
            </SelectContent>
          </Select>
          <DatePickerDemo />
          <Select>
          <SelectTrigger className="w-16">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
        </div>
      </div>

      {/* User Table */}
      <div className="">
        <TeacherTable users={teacherData} />
      </div>
    </div>
  );
};

export default Page;
