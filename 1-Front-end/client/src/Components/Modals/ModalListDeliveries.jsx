import React, { useState } from "react";
import {
  CheckValidInputString,
  CheckValidInputNumber,
} from "../Functions/CheckValidInput";
import HandleClickSave from "../Functions/HandleClickSave";

export default function ModalListDeliveries({ onClose, delivery }) {
  const [data, setData] = useState(delivery);
  const [openInfo, setOpenInfo] = useState(false);
  const [dataUsers, setDataUsers] = useState([
    {
      customer: {
        id: 1,
        lastNameCustomer: "Salerno",
        firstNameCustomer: "Sylvestre",
        email: "sylvestre.salerno@yopmail.com",
      },
    },
    {
      customer: {
        id: 2,
        lastNameCustomer: "Rical",
        firstNameCustomer: "Josiane",
        email: "rical.josiane@yopmail.com",
      },
    },
    {
      customer: {
        id: 3,
        lastNameCustomer: "D'heur",
        firstNameCustomer: "Gisèle",
        email: "gisele.dheur@yopmail.com",
      },
    },
  ]);

  const handleClickStayModal = (e) => {
    e.stopPropagation();
  };

  const FormatBodyForRequest = (e, key) => {
    switch (key) {
      case "lastNameDeliverer":
      case "firstNameDeliverer":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({
            ...data,
            deliverer: { ...data.deliverer, [key]: e.target.value },
          });
        break;
      case "lastNameCustomer":
      case "firstNameCustomer":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({
            ...data,
            customer: { ...data.customer, [key]: e.target.value },
          });
        break;
      case "Status":
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
      case "streetNumber":
      case "postalCode":
        if (CheckValidInputNumber(e.target.value))
          //Check input only number
          setData({
            ...data,
            address: { ...data.address, [key]: e.target.value },
          });
        break;
      default:
        setData({ ...data, [key]: e.target.value });
        break;
    }
  };

  const handleChangeStatus = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  const handleChangeCustomer = (e, key) => {
    setData({
      ...data,
      customer: { ...data.customer, [key]: e.target.value },
    });
  };

  const handleClickDisplayOrder = () => {
    console.log("Log");
  };

  const handleOpenInfo = () => {
    setOpenInfo(!openInfo);
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
        <h1 className="w-11/12 font-bold mb-4">Liste des livraisons</h1>
        {/* Identity */}
        <h2 className="w-full text-center text-3xl text-title-home">
          Livraison
        </h2>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="commandNumber"
            className="text-center font-bold text-halo"
          >
            N° de commande
          </label>
          <input
            type="text"
            disabled
            value={data.commandNumber ? data.commandNumber : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onClick={handleClickDisplayOrder}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="lastNameDeliverer"
            className="text-center font-bold text-halo"
          >
            Nom du livreur
          </label>
          <input
            type="text"
            value={
              data.deliverer.lastNameDeliverer
                ? data.deliverer.lastNameDeliverer
                : ""
            }
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "lastNameDeliverer")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="firstNameDeliverer"
            className="text-center font-bold text-halo"
          >
            Prénom du livreur
          </label>
          <input
            type="text"
            value={
              data.deliverer.firstNameDeliverer
                ? data.deliverer.firstNameDeliverer
                : ""
            }
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "firstNameDeliverer")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <div></div>
          <div className="col-span-2 text-center flex justify-center items-center">
            <h3>Infos</h3>
            <i
              className="fa-regular fa-rectangle-list ml-4 cursor-pointer hover:text-orange-500"
              onClick={handleOpenInfo}
            ></i>
          </div>
        </div>
        {/* Info de la commande */}
        {openInfo && (
          <div className="w-full bg-gray-600 flex flex-col justify-center items-center rounded-xl py-4">
            <div className="w-12/12 grid grid-cols-3 justify-center items-center">
              <label
                htmlFor="lastNameCustomer"
                className="text-center font-bold text-halo"
              >
                Nom du client
              </label>
              <select
                value={data.customer.lastNameCustomer}
                className="col-span-2 rounded-lg p-1 text-center text-black w-64"
                onChange={(e) => handleChangeCustomer(e, "lastNameCustomer")}
              >
                {dataUsers.map((user) => (
                  <option
                    key={user.customer.id}
                    value={
                      user.customer.lastNameCustomer +
                      " " +
                      user.customer.firstNameCustomer +
                      " " +
                      "(" +
                      user.customer.email +
                      ")"
                    }
                  >
                    {user.customer.lastNameCustomer +
                      " " +
                      user.customer.firstNameCustomer +
                      " " +
                      "(" +
                      user.customer.email +
                      ")"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
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

        {/* Statut */}
        <h2 className="w-full text-center text-3xl text-title-home  mt-4">
          Avancement
        </h2>
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
