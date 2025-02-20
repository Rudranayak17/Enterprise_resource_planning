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

  return (
    <div className="flex h-screen w-full ">
      <div className={`h-full ${sidebarOpen ? 'block' : 'hidden sm:block'}`}>
        <SideNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <div className="flex flex-col flex-1 w-full h-full">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1  overflow-auto">{children}</main>
      </div>
    </div>
  );
}