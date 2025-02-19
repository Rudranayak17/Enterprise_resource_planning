"use client"
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsContentComponent from "@/components/TabsContentComponent";

const StudentDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <Tabs defaultValue="attendance" className="space-y-6">
        <TabsList className="grid grid-cols-6 w-auto">
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="exams">Exam Result</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="fees">Fee Structure</TabsTrigger>
          <TabsTrigger value="payment">Payment History</TabsTrigger>
          <TabsTrigger value="documents">Document</TabsTrigger>
        </TabsList>

        <TabsContentComponent />
      </Tabs>
    </div>
  );
};

export default StudentDashboard;
