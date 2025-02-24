"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Parent } from "@/types/utils";
import { useState } from "react";

export default function ParentComponent({
  users,
  isDarkTheme,
}: {
  users: Parent;
  isDarkTheme: boolean;
}) {
  // Store toggle state for each user
  const [toggleStates, setToggleStates] = useState<boolean[]>(
    Array(25).fill(false)
  );

  // Toggle handler
  const handleToggle = (index: number) => {
    setToggleStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="">
      {/* Wrap table in a bordered container */}
      <div className="border rounded-md">
        {/* Fixed Header Section */}
        <div className="w-full">
          <Table>
            <TableHeader
              className={`${
                isDarkTheme ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
            >
              <TableRow>
                <TableHead className="w-[200px] text-xs">Guardian Details</TableHead>
                <TableHead className="w-[200px] text-xs">Email / Phone No.</TableHead>
                <TableHead className="w-[200px] text-xs">Children</TableHead>
                <TableHead className="text-xs">Address</TableHead>
                <TableHead className="w-[120px] text-xs">Status</TableHead>
                <TableHead className="w-[120px] text-xs text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </div>

        {/* Scrollable Body Section */}
        <div className="max-h-[calc(100vh-300px)] overflow-auto">
          <Table>
            <TableBody>
              {Array(25)
                .fill(users)
                .map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-[200px] p-2 text-sm font-medium">
                      <p>{user.guardian.fatherName}</p>
                      <p>{user.guardian.motherName}</p>
                    </TableCell>
                    <TableCell className="w-[200px] p-2">
                      <p className="text-sm text-blue-700">{user.email}</p>
                      <p className="text-xs text-blue-700">{user.phone}</p>
                    </TableCell>
                    <TableCell className="w-[200px] p-2">
                      {user.children.map((item: string, idx: number) => (
                        <p key={idx}>
                          {item} <span className="text-blue-700">9th class</span>
                        </p>
                      ))}
                    </TableCell>
                    <TableCell className="p-2 text-sm">{user.address}</TableCell>
                    <TableCell className="w-[120px] p-2 text-sm">
                      <Switch
                        checked={toggleStates[index]}
                        onCheckedChange={() => handleToggle(index)}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </TableCell>
                    <TableCell className="w-[120px] p-2 text-right">
                      <span className="flex justify-end space-x-4">
                        <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
                        <Trash2 className="h-4 w-4 cursor-pointer" stroke="red" />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}