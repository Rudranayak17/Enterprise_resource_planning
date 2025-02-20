"use client"
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
  
  export default function ParentComponent({ users }: { users: Parent }) {
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
        <Table className="w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-xs">Guardian Details</TableHead>
              <TableHead className="text-xs">Email / Phone No.</TableHead>
              <TableHead className="text-xs">Children</TableHead>
              <TableHead className="text-xs">Address</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(25)
              .fill(users)
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="p-2 text-sm">
                    <p>{user.guardian.fatherName}</p>
                    <p>{user.guardian.motherName}</p>
                  </TableCell>
                  <TableCell className="p-2">
                    <p className="text-sm  text-blue-700">{user.email}</p>
                    <p className="text-xs text-blue-700">{user.phone}</p>
                  </TableCell>
                  <TableCell className="p-2">
                    {user.children.map((item: string, idx: number) => (
                      <p key={idx}>{item} <span className="text-blue-700">9th class</span></p>
                    ))}
                  </TableCell>
                  <TableCell className="p-2 text-sm">{user.address}</TableCell>
                  <TableCell className="p-2 text-sm">
                  <Switch
  checked={toggleStates[index]}
  onCheckedChange={() => handleToggle(index)}
  className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
/>

                  </TableCell>
                  <TableCell className="p-2">
                    <span className="flex space-x-4">
                      <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
                      <Trash2 className="h-4 w-4 cursor-pointer" stroke="red" />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  