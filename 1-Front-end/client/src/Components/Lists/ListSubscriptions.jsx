import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  SortListActions,
  SortListUsersByCriteria,
} from "../Functions/SortList";
import ModalListSubscriptions from "../Modals/ModalListSubscriptions";
import ModalAddPrice from "../Modals/ModalAddPrice";
import { SearchItemsPrice } from "../Functions/SearchItems";
import ReactPaginate from "react-paginate";
import dataTest from "../../../DataTest/dataTestSubscription";
import "./CSS/style.css";

export default function ListSubscriptions() {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [ascendant, setAscendant] = useState(false);
  const [catergory, setCatergory] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 15;
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySearch, setSelectedPersonBySearch] = useState(data);

  const handleClickSelectedSubscription = (idSubscription) => {
    setSelectedPersonBySearch((prevData) =>
      prevData.map((subscription) =>
        subscription.id === idSubscription
          ? { ...subscription, is_checked: !subscription.is_checked }
          : subscription
      )
    );
  };

  //Afficher la modale du prix selectionné
  const handleClickDisplayDetails = (subscription) => {
    setSelectedSubscription(subscription);
    setOpenModal(!openModal);
  };

  //Rechercher un prix
  const handleSearchItems = (e) => {
    if (e.target.value === "") {
      setRefresh(true);
    } else {
      setCurrentPage(0);
      setSelectedPersonBySearch(SearchItemsPrice(e.target.value, data));
    }
  };

  const handleClick = (key) => {
    setCatergory(key);
    setAscendant(!ascendant);
    setSelectedPersonBySearch(SortListUsersByCriteria(data, ascendant, key));
  };

  // Fonction pour récupérer les prix de la page actuelle
  const getCurrentPrice = () => {
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
      setSelectedPersonBySearch(SortListActions(data));
      setRefresh(false); //Trie sur le nom
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, [refresh]);

  return (
    <div className="overflow-y-auto w-11/12 m-auto">
      <div className="flex justify-between items-center">
        <div className="flex my-4">
          <h1 className="font-bold mr-4">Liste des prix</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddPrice onClose={setOpenModalAdd} />}
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
              onClick={(e) => handleClick("name")}
              className={
                ascendant && catergory === "name"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Nom
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("startDate")}
              className={
                ascendant && catergory === "startDate"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Date de début
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-9-1 ml-2"
                    : "fa-solid fa-arrow-down-1-9 ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("endDate")}
              className={
                ascendant && catergory === "endDate"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Date de fin
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-9-1 ml-2"
                    : "fa-solid fa-arrow-down-1-9 ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("statusPromotion")}
              className={
                ascendant && catergory === "statusPromotion"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Statut
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("price")}
              className={
                ascendant && catergory === "price"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Prix
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-9-1 ml-2"
                    : "fa-solid fa-arrow-down-1-9 ml-2"
                }
              ></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPrice() &&
            getCurrentPrice().map((subscription) => (
              <tr key={subscription.id}>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => {
                        handleClickSelectedSubscription(subscription.id);
                      }}
                    />
                  </label>
                </td>
                <td>{subscription.name}</td>
                <td>{format(subscription.startDate, "dd-MM-yyyy")}</td>
                <td>{format(subscription.endDate, "dd-MM-yyyy")}</td>
                <td>
                  <i
                    className={
                      subscription.status
                        ? "fa-regular fa-circle text-green-500"
                        : "fa-regular fa-circle text-red-500"
                    }
                  ></i>
                </td>
                <td>{subscription.price}€</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      handleClickDisplayDetails(subscription);
                    }}
                  >
                    details
                  </button>
                </td>
                <td>
                  {subscription.is_checked && (
                    <i className="fa-solid fa-trash hover:text-red-500 text-xl ease-in-out duration-200 hover:scale-125 cursor-pointer"></i>
                  )}
                </td>
                {openModal && selectedSubscription.id === subscription.id && (
                  <ModalListSubscriptions
                    onClose={setOpenModal}
                    subscription={selectedSubscription}
                  />
                )}
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Selection</th>
            <th>Nom</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Statut</th>
            <th>Prix</th>
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
