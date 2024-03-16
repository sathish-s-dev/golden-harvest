import React from "react";

const BodyText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm md:text-base">{children}</p>;
};

export default BodyText;
