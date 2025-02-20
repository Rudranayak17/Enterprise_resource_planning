import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const StudentInfoCard = () => {
  return (
    <Card className="flex flex-col h-auto min-h-[70vh] md:min-h-[75vh] w-full items-center">
      <CardContent className="pt-6 w-full max-w-md">
        <div className="flex items-center space-x-4 mb-10">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/api/placeholder/150/150" alt="Student" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">Ravi Pal</h2>
            <p className="text-sm text-muted-foreground">
              # Admission No 20EE23
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Gender</p>
              <p className="font-medium">Female</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Class</p>
              <p className="font-medium">09th</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Class Roll No.</p>
              <p className="font-medium">93</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date of Birth</p>
              <p className="font-medium">25/08/2003</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Address</p>
            <p className="font-medium">
              ITBP Park Chauhan Calony, Sector 144, Gurgaon
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Father</p>
              <p className="font-medium">Rahul Pal</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mother</p>
              <p className="font-medium">Sneha Pal</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Contact No.</p>
            <p className="font-medium">8956231235</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">School Bus Stoppage</p>
            <p className="font-medium">Street 4, Chauhan Calony</p>
            <p className="text-sm text-muted-foreground">
              Bus No.- HRXCY7687 | Route-09
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentInfoCard;