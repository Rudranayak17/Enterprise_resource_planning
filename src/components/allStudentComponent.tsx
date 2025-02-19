"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2 } from "lucide-react";
import type { AllStudent } from "@/types/utils";
// import { allStudent } from "@/constant/userData";

const columns: ColumnDef<AllStudent>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => (
      <Avatar className="h-6 w-6">
        <AvatarImage src={row.original.photo} />
      </Avatar>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "admission",
    header: "Admission No / Date",
    cell: ({ row }) => (
      <div>
        <p className="text-sm">{row.original.admission.id}</p>
        <p className="text-xs text-blue-700">{row.original.admission.date}</p>
      </div>
    ),
  },
  {
    accessorKey: "class",
    header: "Class",
    cell: ({ row }) => (
      <div>
        <p className="text-sm">{row.original.class}</p>
        <p className="text-xs text-blue-700"> {"Role no. 89"}</p>
      </div>
    ),
  },
  {
    accessorKey: "guardian",
    header: "Guardian",
    cell: ({ row }) => (
      <div>
        <p className="text-sm">
          {row.original.guardian.fatherName} /{" "}
          {row.original.guardian.motherName}
        </p>
        <p className="text-xs text-blue-700">{row.original.guardian.phone}</p>
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: () => (
      <div className="flex space-x-2">
        <Pencil className="h-4 w-4 cursor-pointer text-blue-500" />
        <Pencil className="h-4 w-4 cursor-pointer text-blue-500" />
        <Pencil className="h-4 w-4 cursor-pointer text-blue-500" />
        <Trash2 className="h-4 w-4 cursor-pointer text-red-500" />
      </div>
    ),
  },
];

const AllStudent = ({ users }: { users: AllStudent[] }) => {
  // Use the dummy data if no users prop is passed, otherwise use the passed in users
 
  return (
    <div className="p-4">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default AllStudent;
