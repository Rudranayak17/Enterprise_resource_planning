"use client";
import React from "react";
import Header from "@/components/header";
import SideNav from "@/components/sidenav";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      <div
        className={`absolute md:relative h-full z-20 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <SideNav
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isExpanded={isExpanded}
          onExpandChange={setIsExpanded}
        />
      </div>
      <div
        className={`flex flex-col flex-1 w-full h-full transition-all duration-300 ease-in-out ${
          isExpanded && "fixed" 
        }`}
      >
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1  overflow-auto">{children}</main>
      </div>
    </div>
  );
}
