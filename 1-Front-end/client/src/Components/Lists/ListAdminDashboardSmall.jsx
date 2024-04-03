import React from "react";
import { Link } from "react-router-dom";

export default function ListAdminDashboardSmall() {
  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="m-auto text-3xl font-bold">Tableau de bord</h1>
      <Link
        to="/admin_dashboard/clients"
        className="w-40 h-40 border border-orange-500 m-auto bg-orange-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-user text-3xl"></i>
        <h2>Clients</h2>
      </Link>
      <Link
        to="/admin_dashboard/defunts"
        className="w-40 h-40 border border-green-500 m-auto bg-green-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-book-skull text-3xl"></i>
        <h2>Défunts</h2>
      </Link>
      <Link
        to="/admin_dashboard/deliverers"
        className="w-40 h-40 border border-blue-500 m-auto bg-blue-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-truck text-3xl"></i>
        <h2>Livreurs</h2>
      </Link>
      <Link
        to="/admin_dashboard/engravers"
        className="w-40 h-40 border border-red-500 m-auto bg-red-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-gem text-3xl"></i>
        <h2>Graveurs</h2>
      </Link>
      <Link
        to="/admin_dashboard/deliveries"
        className="w-40 h-40 border border-pink-500 m-auto bg-pink-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-truck-ramp-box text-3xl"></i>
        <h2>Livraisons</h2>
      </Link>
      <Link
        to="/admin_dashboard/engravings"
        className="w-40 h-40 border border-orange-500 m-auto bg-orange-800 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-gem text-3xl"></i>
        <h2>Gravures</h2>
      </Link>
      <Link
        to="/admin_dashboard/orders"
        className="w-40 h-40 border border-yellow-500 m-auto bg-yellow-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-folder-open text-3xl"></i>
        <h2>Commandes</h2>
      </Link>
      <Link
        to="/admin_dashboard/promotions"
        className="w-40 h-40 border border-gray-500 m-auto bg-gray-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-percent text-3xl"></i>
        <h2>Promotions</h2>
      </Link>
      <Link
        to="/admin_dashboard/prices"
        className="w-40 h-40 border border-purple-500 m-auto bg-purple-300 rounded-md hover:scale-110 hover:duration-200 flex flex-col justify-center items-center text-black font-bold cursor-pointer drop-shadow-2xl"
      >
        <i className="fa-solid fa-hand-holding-dollar text-3xl"></i>
        <h2>Prix</h2>
      </Link>
    </div>
  );
}
