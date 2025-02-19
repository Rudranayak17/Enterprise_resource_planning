import AllStudent from "@/components/allStudentComponent";
import StudentsToolbar from "@/components/StudentsToolbar";
import { allStudent } from "@/constant/userData";
import React from "react";

const page = () => {
  return (
    <div>
      <StudentsToolbar />
      <div className="max-h-[600px] overflow-auto border rounded-lg shadow-md">
        <AllStudent users={allStudent} />
      </div>
    </div>
  );
};

export default page;
