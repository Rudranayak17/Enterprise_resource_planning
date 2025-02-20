import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Avatar, AvatarImage } from "@/components/ui/avatar";
  import { UserData } from "@/types/utils";
  import { Pencil, Trash2 } from "lucide-react";
import { TeacherData } from "@/constant/userData";
  
  export default function TeacherTable({ users }: { users: TeacherData }) {
    return (
      <div className="mx-3">
        <Table className="w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-xs">Photo</TableHead>
              <TableHead className="text-xs">User Name</TableHead>
              <TableHead className="text-xs">Role</TableHead>
              <TableHead className="text-xs">Type</TableHead>
              <TableHead className="text-xs">Date</TableHead>
              <TableHead className="text-xs">Status</TableHead>
              <TableHead className="text-xs">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(25)
              .fill(users)
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="p-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user.photo} />
                    </Avatar>
                  </TableCell>
                  <TableCell className="p-2 text-sm">{user.name}</TableCell>
                  <TableCell className="p-2 text-sm">{user.role}</TableCell>
                  <TableCell className="p-2 text-sm">{user.type}</TableCell>
                  <TableCell className="p-2 text-sm">{user.date}</TableCell>
                  <TableCell className="p-2 text-sm">{user.status}</TableCell>
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
  