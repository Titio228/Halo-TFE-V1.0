import React, { useState, useEffect } from "react";
import { SortListNumber, SortListUsersByCriteria } from "../Functions/SortList";
import ModalListEngravings from "../Modals/ModalListEngravings";
import ModalAddEngraving from "../Modals/ModalAddEngraving";
import { SearchItemsEngraving } from "../Functions/SearchItems";
import ReactPaginate from "react-paginate";
import dataTest from "../../../DataTest/dataTestEngraving";
import "./CSS/style.css";

export default function ListEngravings() {
  const [selectedEngraving, setSelectedEngraving] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [ascendant, setAscendant] = useState(false);
  const [catergory, setCatergory] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 15;
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySearch, setSelectedPersonBySearch] = useState(data);

  const handleClickSelectedOrder = (idEngraving) => {
    setSelectedPersonBySearch((prevData) =>
      prevData.map((engraving) =>
        engraving.commandNumber === idEngraving
          ? { ...engraving, is_checked: !engraving.is_checked }
          : engraving
      )
    );
  };

  //Afficher la modale de la commande selectionnée
  const handleClickDisplayDetails = (engraving) => {
    setSelectedEngraving(engraving);
    setOpenModal(!openModal);
  };

  //Rechercher une livraison
  const handleSearchItems = (e) => {
    if (e.target.value === "") {
      setRefresh(true);
    } else {
      setCurrentPage(0);
      setSelectedPersonBySearch(SearchItemsEngraving(e.target.value, data));
    }
  };

  const handleClick = (key) => {
    setCatergory(key);
    setAscendant(!ascendant);
    setSelectedPersonBySearch(SortListUsersByCriteria(data, ascendant, key));
  };

  // Fonction pour récupérer les utilisateurs de la page actuelle
  const getCurrentEngraving = () => {
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
    <div className="w-11/12 m-auto">
      <div className="flex justify-between items-center">
        <div className="flex my-4">
          <h1 className="font-bold mr-4">Liste des gravures</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddEngraving onClose={setOpenModalAdd} />}
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
              onClick={(e) => handleClick("lastNameEngraver")}
              className={
                ascendant && catergory === "lastNameEngraver"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Nom du graveur{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("firstNameEngraver")}
              className={
                ascendant && catergory === "firstNameEngraver"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Prénom du graveur{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("qrCode")}
              className={
                ascendant && catergory === "qrCode"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              QrCode
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
          {getCurrentEngraving() &&
            getCurrentEngraving().map((engraving) => (
              <tr key={engraving.commandNumber}>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => {
                        handleClickSelectedOrder(engraving.commandNumber);
                      }}
                    />
                  </label>
                </td>
                <td>{engraving.commandNumber}</td>
                <td>{engraving.lastNameEngraver}</td>
                <td>{engraving.firstNameEngraver}</td>
                <td>{engraving.qrCode}</td>
                <td>{engraving.status}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      handleClickDisplayDetails(engraving);
                    }}
                  >
                    details
                  </button>
                </td>
                <td>
                  {engraving.is_checked && (
                    <i className="fa-solid fa-trash hover:text-red-500 text-xl ease-in-out duration-200 hover:scale-125 cursor-pointer"></i>
                  )}
                </td>
                {openModal &&
                  selectedEngraving.commandNumber ===
                    engraving.commandNumber && (
                    <ModalListEngravings
                      onClose={setOpenModal}
                      engraving={selectedEngraving}
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
            <th>Nom du graveur</th>
            <th>Prénom du graveur</th>
            <th>QrCode</th>
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
