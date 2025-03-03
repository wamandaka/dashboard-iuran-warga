import React from "react";

const PageContainerDashboard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="lg:p-4 pt-5 lg:pt-6">{children}</div>;
};

export default PageContainerDashboard;
