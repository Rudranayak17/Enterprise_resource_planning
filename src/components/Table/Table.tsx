import { cn } from "@/lib/utils";
import React from "react";

const Table = React.forwardRef(
    ({ className, containerClassname, ...props }, ref) => (
      <div className={cn("relative w-full", containerClassname)}>
        <table
          ref={ref}
          className={cn("w-full caption-bottom text-sm", className)}
          {...props}
        />
      </div>
    )
  );