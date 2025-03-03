import React from "react";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[800px] max-w-[430px] mx-auto bg-slate-100 pb-32 md:shadow-2xl relative">
      {children}
    </div>
  );
};

export default PageContainer;
