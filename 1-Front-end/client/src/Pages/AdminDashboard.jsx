import React, { useState, useEffect } from "react";
import ListAdminDashboard from "../Components/Lists/ListAdminDashboard";
import ListAdminDashboardSmall from "../Components/Lists/ListAdminDashboardSmall";

export default function AdminDashboard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex p-4 bg-body_page rounded-lg">
      {windowSize.width > 768 ? (
        <ListAdminDashboard />
      ) : (
        <ListAdminDashboardSmall />
      )}
    </div>
  );
}
