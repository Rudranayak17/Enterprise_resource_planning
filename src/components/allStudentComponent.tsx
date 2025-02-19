import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Avatar, AvatarImage } from "@/components/ui/avatar";
 
  import { Pencil, Trash2 } from "lucide-react";
import type { AllStudent } from "@/types/utils";
  
const AllStudent=({ users }: { users: AllStudent })=> {
    return (
      <div >
        <Table className="w-full">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="text-xs">Photo</TableHead>
              <TableHead className="text-xs">Name</TableHead>
              {/* <TableHead className="text-xs">Admission Date</TableHead> */}
              <TableHead className="text-xs">Admission No</TableHead>
              <TableHead className="text-xs">Guardian Name</TableHead>
           
              
              <TableHead className="text-xs">Address</TableHead>
             
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
                  {/* <TableCell className="p-2 text-sm">{user.admission.date}</TableCell> */}
                  <TableCell className="p-2">
                    <p className="text-sm">{user.admission.id}</p>
                    <p className="text-xs text-blue-700">{user.admission.date}</p>
                  </TableCell>
                  <TableCell className="p-2">
                    <p className="text-sm">{user.guardian.fatherName} /{ user.guardian.motherName}</p>
                    <p className="text-xs text-blue-700">{user.guardian.phone}</p>
                  </TableCell>
                
                
                  <TableCell className="p-2 text-sm ">{user.address}</TableCell>
              
                  <TableCell className="p-2">
                    <span className="flex space-x-4">
                    <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
                    <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
                    <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
                    <Pencil className="h-4 w-4 cursor-pointer" stroke="blue" />
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

  export default AllStudent