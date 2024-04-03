import React, { useState } from "react";
import {
  CheckValidInputString,
  CheckValidInputEmail,
  CheckValidInputNumber,
} from "../Functions/CheckValidInput";
import HandleClickSave from "../Functions/HandleClickSave";

export default function ModalListDeliverers({ onClose, person }) {
  const [data, setData] = useState(person);

  const handleClickStayModal = (e) => {
    e.stopPropagation();
  };

  const FormatBodyForRequest = (e, key) => {
    switch (key) {
      case "lastName":
      case "firstName":
      case "license":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({ ...data, [key]: e.target.value });
        break;
      case "street":
      case "city":
      case "country":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({
            ...data,
            address: { ...data.address, [key]: e.target.value },
          });
        break;
      case "dateOfBirth":
        setData({ ...data, [key]: e.target.value });
        break;
      case "streetNumber":
      case "postalCode":
        if (CheckValidInputNumber(e.target.value))
          //Check input only number
          setData({
            ...data,
            address: { ...data.address, [key]: e.target.value },
          });
        break;
      case "phone":
        if (CheckValidInputNumber(e.target.value))
          //Check input only number
          setData({ ...data, [key]: e.target.value });
        break;
      case "email":
        if (CheckValidInputEmail(e.target.value))
          //Check input only email
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
        <h1 className="w-11/12 font-bold mb-4">Liste des livreurs</h1>
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

        {/* Address */}
        <h2 className="w-full text-center text-3xl text-title-home  mt-4">
          Adresse
        </h2>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="street" className="text-center font-bold text-halo">
            Rue
          </label>
          <input
            type="text"
            value={data.address.street ? data.address.street : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "street")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="streetNumber"
            className="text-center font-bold text-halo"
          >
            N°
          </label>
          <input
            type="text"
            value={data.address.streetNumber ? data.address.streetNumber : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "streetNumber")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="postalCode"
            className="text-center font-bold text-halo"
          >
            Code postal
          </label>
          <input
            type="text"
            value={data.address.postalCode ? data.address.postalCode : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "postalCode")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="city" className="text-center font-bold text-halo">
            Ville
          </label>
          <input
            type="text"
            value={data.address.city ? data.address.city : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "city")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="country" className="text-center font-bold text-halo">
            Pays
          </label>
          <input
            type="text"
            value={data.address.country ? data.address.country : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "country")}
          />
        </div>

        {/* Contact */}
        <h2 className="w-full text-center text-3xl text-title-home  mt-4">
          Contact
        </h2>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="email" className="text-center font-bold text-halo">
            Email
          </label>
          <input
            type="email"
            disabled
            value={data.email ? data.email : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "email")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="phone" className="text-center font-bold text-halo">
            Téléphone
          </label>
          <input
            type="text"
            value={data.phone ? data.phone : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "phone")}
          />
        </div>
        {/* Permis */}
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="license" className="text-center font-bold text-halo">
            Permis
          </label>
          <input
            type="text"
            value={data.license ? data.license : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "license")}
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
