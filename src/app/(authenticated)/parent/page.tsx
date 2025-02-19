
import ParentComponent from "@/components/ParentComponent";
import ParentToolBar from "@/components/ParentsTool";

import { parent } from "@/constant/userData";
import React from "react";

const page = () => {
  return (
    <div>
      <ParentToolBar />

      <ParentComponent users={parent} />
    </div>
  );
};

export default page;
