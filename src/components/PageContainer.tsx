import React from "react";

const PageContainer = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: string;
}) => {
  return (
    <div
      className={`flex min-h-screen sm:min-h-[768px] max-w-[430px] mx-auto ${variant} pb-32 md:shadow-2xl relative rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
