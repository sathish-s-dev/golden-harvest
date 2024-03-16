import { cn } from "@/utils/cn";
import React from "react";

const BodyText = ({ children , className }: { children: React.ReactNode, className?: string }) => {
  return <p className={cn("text-[12px] md:text-[14px]", className)}>{children}</p>;
};

export default BodyText;
