import React, { useState } from "react";
import { CheckValidInputString } from "../Functions/CheckValidInput";
import HandleClickSave from "../Functions/HandleClickSave";

export default function ModalAddDefunt({ onClose }) {
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    dateOfDead: "",
  });

  const handleClickStayModal = (e) => {
    e.stopPropagation();
  };

  const FormatBodyForRequest = (e, key) => {
    switch (key) {
      case "lastName":
      case "firstName":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({ ...data, [key]: e.target.value });
        break;
      case "dateOfBirth":
      case "dateOfDead":
        setData({ ...data, [key]: e.target.value });
        break;
      default:
        setData({ ...data, [key]: e.target.value });
        break;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex flex-col justify-center items-center z-50"
      onClick={() => onClose(false)} // Close Modal by overlay
    >
      <div
        className="w-11/12 bg-gray-600 flex flex-col justify-center items-center relative rounded-xl py-12 md:w-1/3"
        onClick={handleClickStayModal} //Stop propagation by overlay
      >
        <h1 className="w-11/12 font-bold mb-4">Ajouter un défunt</h1>
        {/* Identity */}
        <h2 className="w-full text-center text-3xl text-title-home">
          Identité
        </h2>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="lastName" className="text-center font-bold text-halo">
            Nom
          </label>
          <input
            type="text"
            value={data.lastName ? data.lastName : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "lastName")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="firstName"
            className="text-center font-bold text-halo"
          >
            Prénom
          </label>
          <input
            type="text"
            value={data.firstName ? data.firstName : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "firstName")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="dateOfBirth"
            className="text-center font-bold text-halo"
          >
            Date de naissance
          </label>
          <input
            type="date"
            value={data.dateOfBirth ? data.dateOfBirth : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "dateOfBirth")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="dateOfDead"
            className="text-center font-bold text-halo"
          >
            Date de décès
          </label>
          <input
            type="date"
            value={data.dateOfDead ? data.dateOfDead : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "dateOfDead")}
          />
        </div>
        <div className="w-full flex justify-end items-center absolute bottom-3 right-3">
          <button
            className="w-28 p-1 bg-blue-500 mr-4 rounded-lg ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => HandleClickSave("Voulez vous sauvegarder ?")}
          >
            Sauvegarder
          </button>
          <button
            onClick={() => onClose(false)}
            className="w-28 p-1 bg-red-500 rounded-lg ease-in-out duration-200 hover:scale-110 cursor-pointer"
          >
            Fermer
          </button>
        </div>
        <i
          className="fa-solid fa-circle-xmark absolute top-2 right-2 ease-in-out duration-200 hover:scale-125 hover:text-red-500 cursor-pointer"
          onClick={() => onClose(false)}
        ></i>
      </div>
    </div>
  );
}
