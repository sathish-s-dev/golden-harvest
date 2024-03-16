import { cn } from "@/utils/cn";
import React, { PropsWithChildren } from "react";

const SectionHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-3xl text-accent font-noto", className)}>
      {children}
    </h3>
  );
};

export default SectionHeading;
