"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import React from "react";

const BodyText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      className={cn("text-[12px] md:text-[14px]", className)}
    >
      {children}
    </motion.p>
  );
};

export default BodyText;
