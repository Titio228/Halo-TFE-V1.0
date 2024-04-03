import React from "react";

export default function () {
  return (
    <div className="dropdown dropdown-hover text-body">
      <div tabIndex={0} role="button" className="btn m-1 w-[100px]">
        Langage
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Français</a>
        </li>
        <li>
          <a>Anglais</a>
        </li>
      </ul>
    </div>
  );
}
