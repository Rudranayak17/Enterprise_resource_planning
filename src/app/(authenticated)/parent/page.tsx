import ParentComponent from "@/components/ParentComponent";
import ParentToolBar from "@/components/ParentsTool";

import { parent } from "@/constant/userData";
import React from "react";

const page = () => {
  return (
    <div>
      <ParentToolBar />
      <div className="max-h-[600px] overflow-auto border rounded-lg shadow-md mx-2">
        <ParentComponent users={parent} />
      </div>
    </div>
  );
};

export default page;
