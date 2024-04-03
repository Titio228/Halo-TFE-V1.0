import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="dropdown dropdown-hover text-body">
      <Link to="/admin_dashboard" className="btn m-1 w-[100px]">
        Admin
      </Link>
    </div>
  );
}
