import LayoutWrapper from "@/components/LayoutWrapper";
import React from "react";

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
       <LayoutWrapper>{children}</LayoutWrapper>
      </div>
    );
  }
  