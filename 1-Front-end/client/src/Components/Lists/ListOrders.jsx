import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { SortListNumber, SortListUsersByCriteria } from "../Functions/SortList";
import ModalListOrders from "../Modals/ModalListOrders";
import ModalAddOrder from "../Modals/ModalAddOrder";
import { SearchItemsOrder } from "../Functions/SearchItems";
import ReactPaginate from "react-paginate";
import dataTest from "../../../DataTest/dataTestDeliveries";
import "./CSS/style.css";

export default function ListOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [ascendant, setAscendant] = useState(false);
  const [catergory, setCatergory] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 15;
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySearch, setSelectedPersonBySearch] = useState(data);

  const handleClickSelectedOrder = (idOrder) => {
    setSelectedPersonBySearch((prevData) =>
      prevData.map((order) =>
        order.commandNumber === idOrder
          ? { ...order, is_checked: !order.is_checked }
          : order
      )
    );
  };

  //Afficher la modale de la commande selectionnée
  const handleClickDisplayDetails = (order) => {
    setSelectedOrder(order);
    setOpenModal(!openModal);
  };

  //Rechercher une livraison
  const handleSearchItems = (e) => {
    if (e.target.value === "") {
      setRefresh(true);
    } else {
      setCurrentPage(0);
      setSelectedPersonBySearch(SearchItemsOrder(e.target.value, data));
    }
  };

  const handleClick = (key) => {
    setCatergory(key);
    setAscendant(!ascendant);
    setSelectedPersonBySearch(SortListUsersByCriteria(data, ascendant, key));
  };

  // Fonction pour récupérer les utilisateurs de la page actuelle
  const getCurrentOrders = () => {
    const startIndex = currentPage * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return selectedPersonBySearch.slice(startIndex, endIndex);
  };

  // Fonction appelée lorsque l'utilisateur change de page
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  useEffect(() => {
    try {
      setSelectedPersonBySearch(SortListNumber(data));
      setRefresh(false); //Trie sur le nom
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, [refresh]);

  return (
    <div className="overflow-y-auto w-11/12 m-auto">
      <div className="flex justify-between items-center">
        <div className="flex my-4">
          <h1 className="font-bold mr-4">Liste des commandes</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddOrder onClose={setOpenModalAdd} />}
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-full text-center rounded-xl bg-gray-400 placeholder:text-gray-800 outline-none p-1 text-white"
            onChange={handleSearchItems}
          />
        </div>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Selection</th>
            <th
              onClick={(e) => handleClick("commandNumber")}
              className={
                ascendant && catergory === "commandNumber"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              N° de commande{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-9-1 ml-2"
                    : "fa-solid fa-arrow-down-1-9 ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("lastNameCustomer")}
              className={
                ascendant && catergory === "lastNameCustomer"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Nom du client{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("firstNameCustomer")}
              className={
                ascendant && catergory === "firstNameCustomer"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Prénom du client{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("date")}
              className={
                ascendant && catergory === "date"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Date d'achat{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("status")}
              className={
                ascendant && catergory === "status"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Statut{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getCurrentOrders() &&
            getCurrentOrders().map((order) => (
              <tr key={order.commandNumber}>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => {
                        handleClickSelectedOrder(order.commandNumber);
                      }}
                    />
                  </label>
                </td>
                <td>{order.commandNumber}</td>
                <td>{order.customer.lastNameCustomer}</td>
                <td>{order.customer.firstNameCustomer}</td>
                <td>{format(order.date, "dd-MM-yyyy")}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      handleClickDisplayDetails(order);
                    }}
                  >
                    details
                  </button>
                </td>
                <td>
                  {order.is_checked && (
                    <i className="fa-solid fa-trash hover:text-red-500 text-xl ease-in-out duration-200 hover:scale-125 cursor-pointer"></i>
                  )}
                </td>
                {openModal &&
                  selectedOrder.commandNumber === order.commandNumber && (
                    <ModalListOrders
                      onClose={setOpenModal}
                      order={selectedOrder}
                    />
                  )}
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Selection</th>
            <th>N° de commande</th>
            <th>Nom du client</th>
            <th>Prénom du client</th>
            <th>Date d'achat</th>
            <th>Statut</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <ReactPaginate
        pageCount={Math.ceil(selectedPersonBySearch.length / usersPerPage)} // Calculer le nombre total de pages
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        className="m-auto w-1/2 flex justify-evenly items-center mt-5"
      />
    </div>
  );
}
