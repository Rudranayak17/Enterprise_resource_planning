// import Attendence from "@/components/Attendence";
// import { DatePickerDemo } from "@/components/DatePicker";
// import SearchInput from "@/components/SearchInput";
// import { Button } from "@/components/ui/button";
// import UserTable from "@/components/UserTable";
// import { userData } from "@/constant/userData";
// import { Plus } from "lucide-react";
// import React from "react";

// const Page = () => {
//   return (
//     <div className="">
//       {/* Attendance and Actions */}
//       <div className="flex flex-col md:flex-row items-center justify-between  md:space-y-0 ">
//         <Attendence absent={15} onLeave={15} present={15} total={45} />
//         <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
//           <SearchInput />
//           <DatePickerDemo />
//           <Button className="bg-blue-800 flex items-center">
//             <Plus className="mr-2" /> Add Students
//           </Button>
//         </div>
//       </div>

//       {/* User Table */}
//       <div className="">
//         <UserTable users={userData} />
//       </div>
//     </div>
//   );
// };

// export default Page;

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login"); // Redirects root `/` to `/auth`
}
