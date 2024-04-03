import React, { useState } from "react";
import { CheckValidInputString } from "../Functions/CheckValidInput";
import HandleClickSave from "../Functions/HandleClickSave";

export default function ModalListEngravings({ onClose, engraving }) {
  const [data, setData] = useState(engraving);

  const handleClickStayModal = (e) => {
    e.stopPropagation();
  };

  const FormatBodyForRequest = (e, key) => {
    switch (key) {
      case "lastNameEngraver":
      case "firstNameEngraver":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({ ...data, [key]: e.target.value });
        break;
      case "qrCode":
        setData({ ...data, [key]: e.target.value });
        break;
      default:
        setData({ ...data, [key]: e.target.value });
        break;
    }
  };

  const handleChangeStatus = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex flex-col justify-center items-center z-50"
      onClick={() => onClose(false)} // Close Modal by overlay
    >
      <div
        className="w-11/12 bg-gray-600 flex flex-col justify-center items-center relative rounded-xl py-8 md:w-1/3 overflow-y-auto"
        onClick={handleClickStayModal} //Stop propagation by overlay
      >
        <h1 className="w-11/12 font-bold">Liste des gravures</h1>
        {/* Identity */}
        <h2 className="w-full text-center text-3xl text-title-home">
          Informations
        </h2>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="id" className="text-center font-bold text-halo">
            N° de commande
          </label>
          <input
            type="number"
            disabled
            value={data.commandNumber ? data.commandNumber : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "commandNumber")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="lastNameEngraver"
            className="text-center font-bold text-halo"
          >
            Nom du graveur
          </label>
          <input
            type="text"
            value={data.lastNameEngraver ? data.lastNameEngraver : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "lastNameEngraver")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="firstNameEngraver"
            className="text-center font-bold text-halo"
          >
            Prénom du graveur
          </label>
          <input
            type="text"
            value={data.firstNameEngraver ? data.firstNameEngraver : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "firstNameEngraver")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="qrCode" className="text-center font-bold text-halo">
            Qr Code
          </label>
          <input
            type="text"
            value={data.qrCode ? data.qrCode : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "qrCode")}
          />
        </div>
        {/* Status */}
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="status" className="text-center font-bold text-halo">
            Statut
          </label>
          <select
            id="mySelect"
            value={data.status}
            onChange={(e) => handleChangeStatus(e, "status")}
            className="col-span-2 rounded-lg p-1 text-center text-black"
          >
            <option value="Aucun">Aucun</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
        <div className="w-full flex justify-end items-center mt-6 pr-6">
          <i
            className="fa-solid fa-trash hover:text-red-500 text-xl ease-in-out duration-200 hover:scale-125 cursor-pointer mr-4"
            onClick={() => HandleClickSave("Voulez vous supprimer ?")}
          ></i>
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
