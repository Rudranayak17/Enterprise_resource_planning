import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  LayoutDashboard,
  Users,
  UserPlus,
  UserCog,
  ArrowRightLeft,
  ArrowUpDown,
  User,
  ClipboardList,
  School,
  BookOpen,
  GraduationCap,
  Receipt,
  MessageSquare,
  Wallet,
  BadgeDollarSign,
  Database,
  CheckSquare,
  Building2,
  Bus,
  FileBarChart,
  Award,
  FileQuestion,
  LogOut,
  Users2
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    subItems: [
      { label: "School Dashboard", href: "/dashboard/school" },
      { label: "Teacher Dashboard", href: "/dashboard/teacher" },
      { label: "Student Dashboard", href: "/dashboard/student" },
      { label: "Fee Dashboard", href: "/dashboard/fee" },
      { label: "Accounts Dashboard", href: "/dashboard/accounts" },
    ],
  },
  {
    label: "Student",
    icon: Users,
    subItems: [
      { label: "All Students", href: "/students/all", icon: Users2 },
      { label: "Add Student", href: "/students/add", icon: UserPlus },
      { label: "Assign Class", href: "/students/assign-class", icon: UserCog },
      { label: "Transfer", href: "/students/transfer", icon: ArrowRightLeft },
      { label: "Promote", href: "/students/promote", icon: ArrowUpDown },
    ],
  },
  {
    label: "User Management",
    icon: User,
    subItems: [
      { label: "All Users", href: "/users" },
      { label: "User Subjects", href: "/users/subjects" },
      { label: "User Classes", href: "/users/classes" },
    ],
  },
  {
    label: "Staff Attendance",
    icon: ClipboardList,
    subItems: [
      { label: "Attendance", href: "/staff/attendance" },
      { label: "Leave Request", href: "/staff/leave/request" },
      { label: "Leave Records", href: "/staff/leave/records" },
    ],
  },
  {
    label: "School Management",
    icon: School,
    subItems: [
      { label: "Classes", href: "/school/classes" },
      { label: "Subjects", href: "/school/subjects" },
      { label: "Timetable", href: "/school/timetable" },
      { label: "Circulars", href: "/school/circulars" },
      { label: "Holidays", href: "/school/holidays" },
      { label: "CCA", href: "/school/cca" },
    ],
  },
  {
    label: "Class Work",
    icon: BookOpen,
    subItems: [
      { label: "Attendance", href: "/classwork/attendance" },
      { label: "Leave Requests", href: "/classwork/leave" },
      { label: "Homework", href: "/classwork/homework" },
      { label: "Assignments", href: "/classwork/assignments" },
      { label: "Notices", href: "/classwork/notices" },
      { label: "Activities", href: "/classwork/activities" },
      { label: "Timetable", href: "/classwork/timetable" },
      { label: "Subjects", href: "/classwork/subjects" },
      { label: "Chapters", href: "/classwork/chapters" },
      { label: "Notes", href: "/classwork/notes" },
    ],
  },
  {
    label: "Exam & Results",
    icon: GraduationCap,
    subItems: [
      { label: "Create Exam", href: "/exams/create" },
      { label: "Add Marks", href: "/exams/marks" },
      { label: "Generate Marksheet", href: "/exams/marksheet" },
    ],
  },
  {
    label: "Fee Management",
    icon: Receipt,
    subItems: [
      { label: "Generate Invoice", href: "/fees/invoice" },
      { label: "Custom Fee", href: "/fees/custom" },
      { label: "Make Payment", href: "/fees/payment" },
      { label: "Fee Receipt", href: "/fees/receipt" },
      { label: "Class Fee Structure", href: "/fees/class-structure" },
      { label: "Student Fee Structure", href: "/fees/student-structure" },
    ],
  },
  {
    label: "Complaints",
    icon: MessageSquare,
    href: "/complaints"
  },
  {
    label: "Accounts",
    icon: Wallet,
    subItems: [
      { label: "Company", href: "/accounts/company" },
      { label: "Donation", href: "/accounts/donation" },
      { label: "Loan", href: "/accounts/loan" },
      { label: "Scholarship", href: "/accounts/scholarship" },
      { label: "User Accounts", href: "/accounts/users" },
      { label: "School Accounts", href: "/accounts/school" },
      { label: "Work Order", href: "/accounts/work-order" },
      { label: "Payment", href: "/accounts/payment" },
      { label: "Transaction", href: "/accounts/transaction" },
      { label: "Balance Sheet", href: "/accounts/balance" },
      { label: "Profit & Loss", href: "/accounts/profit-loss" },
    ],
  },
  {
    label: "Pay Role",
    icon: BadgeDollarSign,
    href: "/payroll"
  },
  {
    label: "Master Data",
    icon: Database,
    subItems: [
      { label: "Add Users", href: "/master/users" },
      { label: "User Permissions", href: "/master/permissions" },
      { label: "Classes", href: "/master/classes" },
      { label: "Bus", href: "/master/bus" },
      { label: "Fee Heads", href: "/master/fee-heads" },
      { label: "Sessions", href: "/master/sessions" },
      { label: "Current Sessions", href: "/master/current-session" },
      { label: "Student Fees", href: "/master/student-fees" },
      { label: "Class Fees", href: "/master/class-fees" },
      { label: "Subjects", href: "/master/subjects" },
    ],
  },
  {
    label: "Approval",
    icon: CheckSquare,
    subItems: [
      { label: "Student Approval", href: "/approval/student" },
      { label: "Fee Approval", href: "/approval/fee" },
      { label: "Discount Approval", href: "/approval/discount" },
      { label: "Scholarship Approval", href: "/approval/scholarship" },
      { label: "Payment Approval", href: "/approval/payment" },
    ],
  },
  {
    label: "Reception",
    icon: Building2,
    subItems: [
      { label: "Visitors Entry", href: "/reception/visitors" },
      { label: "Pickup Authorization", href: "/reception/pickup" },
      { label: "Admission Enquiry", href: "/reception/enquiry" },
    ],
  },
  {
    label: "Bus & Route",
    icon: Bus,
    subItems: [
      { label: "All Buses", href: "/transport/buses" },
      { label: "Bus Location", href: "/transport/location" },
      { label: "Bus Routes", href: "/transport/routes" },
      { label: "Bus Attendance", href: "/transport/attendance" },
    ],
  },
  {
    label: "Reports",
    icon: FileBarChart,
    href: "/reports"
  },
  {
    label: "Certificate",
    icon: Award,
    href: "/certificates"
  },
  {
    label: "E-Request",
    icon: FileQuestion,
    href: "/requests"
  }
];

interface NavItemProps {
  item: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    subItems?: { label: string; href: string; icon?: React.ComponentType<{ className?: string }> }[];
    href?: string;
  };
  isExpanded: boolean;
  isHovered: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ item, isExpanded, isHovered }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.subItems) {
    return (
      <Link
        href={item.href || "#"}
        className={cn(
          "flex items-center space-x-3 px-3 py-2 rounded-md",
          "hover:bg-gray-100 hover:text-primary",
          "transition-colors duration-200"
        )}
      >
        <item.icon className="h-5 w-5" />
        {(isExpanded || isHovered) && (
          <span className="text-sm">{item.label}</span>
        )}
      </Link>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between",
            "hover:bg-gray-100 hover:text-primary",
            "transition-colors duration-200"
          )}
        >
          <div className="flex items-center space-x-3">
            <item.icon className="h-5 w-5" />
            {(isExpanded || isHovered) && (
              <span className="text-sm">{item.label}</span>
            )}
          </div>
          {(isExpanded || isHovered) && (
            <div>
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          )}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-8">
        {(isExpanded || isHovered) &&
          item.subItems?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={cn(
                "flex items-center space-x-3 rounded-md px-2 py-1.5",
                "text-sm text-gray-600 hover:text-primary hover:bg-gray-100",
                "transition-colors duration-200"
              )}
            >
              {subItem.icon && <subItem.icon className="h-4 w-4" />}
              <span>{subItem.label}</span>
            </Link>
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => !isExpanded && setIsHovered(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsHovered(!isExpanded);
  };

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex justify-between items-center">
        {(isExpanded || isHovered) && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <School className="h-5 w-5 text-primary" />
            </div>
            <span className="font-semibold">School Portal</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "hidden md:flex rounded-full",
            isExpanded || isHovered ? "ml-auto" : "mx-auto"
          )}
          onClick={toggleExpand}
        >
          {isExpanded || isHovered ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="flex flex-col space-y-1 p-2">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              isExpanded={isExpanded}
              isHovered={isHovered}
            />
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start space-x-3"
          onClick={() => {/* Add logout logic here */}}
        >
          <LogOut className="h-5 w-5" />
          {(isExpanded || isHovered) && (
            <span className="text-sm">Logout</span>
          )}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={cn(
          "hidden md:flex flex-col bg-white border-r h-screen",
          "transition-all duration-300 ease-in-out",
          isExpanded || isHovered ? "w-64" : "w-16"
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavContent />
      </nav>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-0 w-64">
          <NavContent />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideNav;