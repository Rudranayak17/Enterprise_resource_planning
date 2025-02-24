"use client";
import React, { JSX, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart, 
  Pie,
  Cell,
  Legend,
  Tooltip
} from "recharts";
import {
  Users,
  GraduationCap,
  UserCircle,
  DollarSign,
  Bus,
  Clock,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const monthlyData = [
  { month: "January", income: 2.4, expenses: 1.8 },
  { month: "February", income: 2.8, expenses: 2.0 },
  { month: "March", income: 2.4, expenses: 1.9 },
  { month: "April", income: 2.6, expenses: 1.7 },
  { month: "May", income: 2.2, expenses: 1.6 },
  { month: "June", income: 2.0, expenses: 1.8 },
  { month: "July", income: 2.4, expenses: 1.9 },
  { month: "August", income: 2.8, expenses: 2.2 },
  { month: "September", income: 2.6, expenses: 2.1 },
  { month: "October", income: 2.5, expenses: 2.0 },
  { month: "November", income: 2.3, expenses: 1.9 },
  { month: "December", income: 2.7, expenses: 2.1 },
];

const ratioData = [
  { name: "Staff male", value: 2.3, color: "#4169E1", label: "Staff male 2.3K" },
  { name: "Student male", value: 19.2, color: "#1E90FF", label: "Student male 19.2K" },
  { name: "Staff Female", value: 5.5, color: "#FFD700", label: "Staff Female 5.5K" },
  { name: "Student Female", value: 53.0, color: "#FFA500", label: "Student Female 53K" },
];

const feeStatusData = [
  { name: "Paid", value: 70, color: "#22C55E" },
  { name: "Pending", value: 30, color: "#EF4444" },
];

const academicYears = ["2024-25", "2023-24", "2022-23"];

// Custom label component for the pie chart
interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  value: number;
  index: number;
}

const renderCustomizedLabel = (props: CustomizedLabelProps): JSX.Element | null => {
  const { cx, cy, midAngle, innerRadius, outerRadius, value, index } = props;
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return null; // We'll use the legend for labels instead
};

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState("2023-24");
  const [selectedMonth, setSelectedMonth] = useState("September");
  
  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 border rounded-md">
              {selectedYear}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {academicYears.map((year) => (
                <DropdownMenuItem
                  key={year}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 border rounded-md">
              {selectedMonth}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {monthlyData.map((item) => (
                <DropdownMenuItem
                  key={item.month}
                  onClick={() => setSelectedMonth(item.month)}
                >
                  {item.month}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Stats Grid - First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Students</p>
              <h3 className="text-2xl font-bold">40,689</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Teachers</p>
              <h3 className="text-2xl font-bold">93</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Parents</p>
              <h3 className="text-2xl font-bold">40,689</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">₹ 89,000</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Bus className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Buses</p>
              <h3 className="text-2xl font-bold">40</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid - Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Driver</p>
              <h3 className="text-2xl font-bold">40,689</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Helper</p>
              <h3 className="text-2xl font-bold">93</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <UserCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Classes</p>
              <h3 className="text-2xl font-bold">40,689</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Expense</p>
              <h3 className="text-2xl font-bold">₹ 89,000</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="flex items-center p-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Bus className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Routes</p>
              <h3 className="text-2xl font-bold">40</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Income vs Expenses Chart */}
        <Card className="md:col-span-1 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Income vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Line type="monotone" dataKey="income" stroke="#2563eb" strokeWidth={2} dot={{ r: 2 }} name="Income" />
                  <Line type="monotone" dataKey="expenses" stroke="#dc2626" strokeWidth={2} dot={{ r: 2 }} name="Expenses" />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Fee Status Card */}
        <Card className="md:col-span-1 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Fee Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="flex space-x-8 w-full justify-center items-end">
                <div className="flex flex-col items-center">
                  <div className="h-48 w-16 bg-green-500 rounded-t-md"></div>
                  <p className="text-sm mt-2">Paid</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-24 w-16 bg-red-500 rounded-t-md"></div>
                  <p className="text-sm mt-2">Pending</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Staff/Student Ratio Chart - Improved */}
        <Card className="md:col-span-1 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Staff/Student Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ratioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {ratioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}K`} />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    formatter={(value, entry, index) => {
                      return ratioData[index].label;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Circular */}
        <Card className="md:col-span-1 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-yellow-500" />
              Circular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="p-1 bg-yellow-100 rounded-full mt-0.5">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <p className="text-sm">
                    Circular for Academics Prayer will held on Hall.
                  </p>
                </div>
              ))}
              <button className="text-sm text-blue-600 hover:underline">View more</button>
            </div>
          </CardContent>
        </Card>

        {/* Holidays */}
        <Card className="md:col-span-1 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Holidays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-center bg-blue-100 p-1 rounded-lg w-12">
                  <div className="font-bold text-lg">15</div>
                  <div className="text-xs text-gray-500">Wed</div>
                </div>
                <div>
                  <p className="font-medium">Independence Day</p>
                  <p className="text-xs text-gray-500">15 Aug 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center bg-blue-100 p-1 rounded-lg w-12">
                  <div className="font-bold text-lg">15</div>
                  <div className="text-xs text-gray-500">Thu</div>
                </div>
                <div>
                  <p className="font-medium">Independence Day</p>
                  <p className="text-xs text-gray-500">15 Aug 2024</p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:underline">View more</button>
            </div>
          </CardContent>
        </Card>

        {/* Activity Cards */}
        <Card className="md:col-span-1 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Co-Circular Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/api/placeholder/400/320"
                alt="Co-Circular Activity"
                width={400}
                height={320}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="font-medium">Environment Day</p>
                <button className="text-sm text-blue-400 hover:underline">View more</button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1 bg-white shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Class Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/api/placeholder/400/320"
                alt="Class Activity"
                width={400}
                height={320}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="font-medium">Environment Day</p>
                <button className="text-sm text-blue-400 hover:underline">View more</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;