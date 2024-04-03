import React from "react";
import { Link } from "react-router-dom";
import PrivateRoute from "../Hooks/Keycloak/PrivateRoute";

export default function () {
  return (
    <div className="dropdown dropdown-hover text-body">
      <div tabIndex={0} role="button" className="btn m-1 w-[100px]">
        Menu
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/user/listdefunts">Liste des défunts</Link>
        </li>
        <li>
          <Link to="/user/prices">Faire un don</Link>
        </li>
        <PrivateRoute>
          <li>
            <Link to="/user/commemorate">Commémorer un défunt</Link>
          </li>
        </PrivateRoute>
      </ul>
    </div>
  );
}
