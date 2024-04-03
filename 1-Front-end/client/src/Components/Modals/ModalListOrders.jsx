import React, { useState } from "react";
import {
  CheckValidInputString,
  CheckValidInputNumber,
} from "../Functions/CheckValidInput";
import HandleClickSave from "../Functions/HandleClickSave";

export default function ModalListOrders({ onClose, order }) {
  const [data, setData] = useState(order);

  const handleClickStayModal = (e) => {
    e.stopPropagation();
  };

  const FormatBodyForRequest = (e, key) => {
    switch (key) {
      case "lastNameCustomer":
      case "firstNameCustomer":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({
            ...data,
            customer: { ...data.customer, [key]: e.target.value },
          });
        break;
      case "qrCode":
        setData({
          ...data,
          articles: { ...data.articles, [key]: e.target.value },
        });
        break;
      case "name":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({
            ...data,
            articles: { ...data.articles, [key]: e.target.value },
          });
        break;
      case "lastNameDeliverer":
      case "firstNameDeliverer":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({
            ...data,
            deliverer: { ...data.deliverer, [key]: e.target.value },
          });
        break;
      case "date":
        setData({ ...data, [key]: e.target.value });
        break;
      case "status":
        setData({ ...data, [key]: !data.status });
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
          //Check input only character
          setData({
            ...data,
            address: { ...data.address, [key]: e.target.value },
          });
        break;
      case "totalAmount":
      case "price":
        if (CheckValidInputNumber(e.target.value))
          setData({ ...data, [key]: e.target.value });
        break;
      case "numberOfArticles":
        if (CheckValidInputNumber(e.target.value))
          setData({
            ...data,
            articles: { ...data.articles, [key]: e.target.value },
          });
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
        className="w-11/12 bg-gray-600 flex flex-col justify-center items-center relative rounded-xl py-8 md:w-1/3 overflow-y-auto"
        style={{ height: "90vh" }}
        onClick={handleClickStayModal} //Stop propagation by overlay
      >
        <h1 className="w-11/12 font-bold mt-52">Liste des commandes</h1>
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
            htmlFor="lastNameCustomer"
            className="text-center font-bold text-halo"
          >
            Nom du client
          </label>
          <input
            type="text"
            value={
              data.customer.lastNameCustomer
                ? data.customer.lastNameCustomer
                : ""
            }
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "lastNameCustomer")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="firstNameCustomer"
            className="text-center font-bold text-halo"
          >
            Prénom du client
          </label>
          <input
            type="text"
            value={
              data.customer.firstNameCustomer
                ? data.customer.firstNameCustomer
                : ""
            }
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "firstNameCustomer")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="date" className="text-center font-bold text-halo">
            Date de commande
          </label>
          <input
            type="date"
            value={data.date ? data.date : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "date")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="totalAmount"
            className="text-center font-bold text-halo"
          >
            Prix total
          </label>
          <input
            type="number"
            value={data.totalAmount ? data.totalAmount : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "totalAmount")}
          />
        </div>
        {/* Status */}
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
        {/* Liste des articles */}
        <h2 className="w-full text-center text-3xl text-title-home">Article</h2>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="name" className="text-center font-bold text-halo">
            Nom de l'article
          </label>
          <input
            type="text"
            value={data.articles.name ? data.articles.name : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "name")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="price" className="text-center font-bold text-halo">
            Prix(€)
          </label>
          <input
            type="number"
            value={data.articles.price ? data.articles.price : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "price")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label htmlFor="qrCode" className="text-center font-bold text-halo">
            Qr Code commandé
          </label>
          <input
            type="text"
            value={data.articles.qrCode ? data.articles.qrCode : ""}
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "qrCode")}
          />
        </div>
        <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
          <label
            htmlFor="numberOfArticles"
            className="text-center font-bold text-halo"
          >
            Nbre d'articles
          </label>
          <input
            type="number"
            value={
              data.articles.numberOfArticles
                ? data.articles.numberOfArticles
                : ""
            }
            className="col-span-2 rounded-lg p-1 text-center text-black"
            onChange={(e) => FormatBodyForRequest(e, "numberOfArticles")}
          />
        </div>
        {/* Détails du livreur */}
        <h2 className="w-full text-center text-3xl text-title-home">
          Livreurs
        </h2>
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
