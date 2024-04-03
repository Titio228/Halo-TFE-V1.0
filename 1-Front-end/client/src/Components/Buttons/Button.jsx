import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text, color, size }) {
  return (
    <Link
      to={`${link}`}
      className={`${size} m-auto flex justify-center items-center my-4 p-2 ${color} rounded-lg ease-in-out duration-200 hover:scale-110 shadow-xl border border-gray-300`}
    >
      {text}
    </Link>
  );
}
