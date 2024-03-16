import React, { PropsWithChildren } from "react";

const SectionHeading = ({ children }: PropsWithChildren) => {
  return <h3 className="text-3xl text-accent font-noto">{children}</h3>;
};

export default SectionHeading;
