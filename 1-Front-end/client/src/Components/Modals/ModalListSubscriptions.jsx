import React, { useState } from "react";
import { CheckValidInputString } from "../Functions/CheckValidInput";
import HandleClickSave from "../Functions/HandleClickSave";

export default function ModalListSubscriptions({ onClose, subscription }) {
  const [data, setData] = useState(subscription);

  const handleClickStayModal = (e) => {
    e.stopPropagation();
  };

  const FormatBodyForRequest = (e, key, id) => {
    switch (key) {
      case "name":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({ ...data, [key]: e.target.value });
        break;
      case "startDate":
        setData({ ...data, [key]: e.target.value });
        break;
      case "endDate":
        setData({ ...data, [key]: e.target.value });
        break;
      case "status":
        setData({ ...data, [key]: !data.status });
        break;
      case "price":
        if (/^\d{0,4}$/.test(e.target.value))
          setData({ ...data, [key]: e.target.value });
        break;
      case "options":
        const newOption = [...data.options];
        newOption[id] = e.target.value;
        setData((prevState) => ({
          ...prevState,
          options: newOption,
        }));
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
        <h1 className="w-11/12 font-bold mb-4">Liste des prix</h1>
        {/* Identity */}
        <h2 className="w-full text-center text-3xl text-title-home">Prix</h2>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="name" className="text-center font-bold text-halo">
            Nom
          </label>
          <input
            type="text"
            value={data.name ? data.name : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "name")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="startDate"
            className="text-center font-bold text-halo"
          >
            Date de début
          </label>
          <input
            type="date"
            value={data.startDate ? data.startDate : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "startDate")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="endDate" className="text-center font-bold text-halo">
            Date de fin
          </label>
          <input
            type="date"
            value={data.endDate ? data.endDate : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "endDate")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="status" className="text-center font-bold text-halo">
            Statut
          </label>
          <input
            type="checkBox"
            checked={data.status ? data.status : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "status")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="price" className="text-center font-bold text-halo">
            Prix (€)
          </label>
          <input
            type="number"
            value={data.price ? data.price : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "price")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="options" className="text-center font-bold text-halo">
            Option 1
          </label>
          <input
            type="text"
            value={data.options[0] ? data.options[0] : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "options", 0)}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="options" className="text-center font-bold text-halo">
            Option 2
          </label>
          <input
            type="text"
            value={data.options[1] ? data.options[1] : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "options", 1)}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="options" className="text-center font-bold text-halo">
            Option 3
          </label>
          <input
            type="text"
            value={data.options[2] ? data.options[2] : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "options", 2)}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="options" className="text-center font-bold text-halo">
            Option 4
          </label>
          <input
            type="text"
            value={data.options[3] ? data.options[3] : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "options", 3)}
          />
        </div>
        <div className="w-full flex justify-end items-center absolute bottom-3 right-3">
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
