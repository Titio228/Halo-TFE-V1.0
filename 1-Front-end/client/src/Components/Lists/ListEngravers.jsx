import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import ModalListUsers from "../Modals/ModalListUsers";
import { SortListUsers, SortListUsersByCriteria } from "../Functions/SortList";
import ModalAddEngraver from "../Modals/ModalAddEngraver";
import { SearchClient } from "../Functions/SearchItems";
import ReactPaginate from "react-paginate";
import dataTest from "../../../DataTest/dataTest";
import "./CSS/style.css";

export default function ListEngravers() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [ascendant, setAscendant] = useState(false);
  const [catergory, setCatergory] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const usersPerPage = 15;
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySearch, setSelectedPersonBySearch] = useState(data);

  const handleClickSelectedPerson = (idPerson) => {
    setSelectedPersonBySearch((prevData) =>
      prevData.map((person) =>
        person.id === idPerson
          ? { ...person, is_checked: !person.is_checked }
          : person
      )
    );
  };

  //Afficher la modale du graveur selectionné
  const handleClickDisplayDetails = (person) => {
    setSelectedPerson(person);
    setOpenModal(!openModal);
  };

  //Rechercher une commande
  const handleSearchItems = (e) => {
    if (e.target.value === "") {
      setRefresh(true);
    } else {
      setCurrentPage(0);
      setSelectedPersonBySearch(SearchClient(e.target.value, data));
    }
  };

  const handleClick = (key) => {
    setCatergory(key);
    setAscendant(!ascendant);
    setSelectedPersonBySearch(SortListUsersByCriteria(data, ascendant, key));
  };

  // Fonction pour récupérer les utilisateurs de la page actuelle
  const getCurrentUsers = () => {
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
      setSelectedPersonBySearch(SortListUsers(data));
      setRefresh(false); //Trie sur le nom
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, [refresh]);

  return (
    <div className="overflow-x-auto w-11/12 m-auto">
      <div className="flex justify-between items-center">
        <div className="flex my-4">
          <h1 className="font-bold mr-4">Liste des graveurs</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddEngraver onClose={setOpenModalAdd} />}
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
              onClick={(e) => handleClick("lastName")}
              className={
                ascendant && catergory === "lastName"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Nom{" "}
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("firstName")}
              className={
                ascendant && catergory === "firstName"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Prénom
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("dateOfBirth")}
              className={
                ascendant && catergory === "dateOfBirth"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Date de naissance
            </th>
            <th
              onClick={(e) => handleClick("email")}
              className={
                ascendant && catergory === "email"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Email
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-z-a ml-2"
                    : "fa-solid fa-arrow-down-a-z ml-2"
                }
              ></i>
            </th>
            <th
              onClick={(e) => handleClick("phone")}
              className={
                ascendant && catergory === "phone"
                  ? "font-bold text-orange-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Contact
              <i
                className={
                  ascendant
                    ? "fa-solid fa-arrow-down-9-1 ml-2"
                    : "fa-solid fa-arrow-down-1-9 ml-2"
                }
              ></i>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getCurrentUsers() &&
            getCurrentUsers().map((person) => (
              <tr key={person.id}>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => {
                        handleClickSelectedPerson(person.id);
                      }}
                    />
                  </label>
                </td>
                <td>{person.lastName}</td>
                <td>{person.firstName}</td>
                <td>{format(person.dateOfBirth, "dd-MM-yyyy")}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      handleClickDisplayDetails(person);
                    }}
                  >
                    details
                  </button>
                </td>
                <td>
                  {person.is_checked && (
                    <i className="fa-solid fa-trash hover:text-red-500 text-xl ease-in-out duration-200 hover:scale-125 cursor-pointer"></i>
                  )}
                </td>
                {openModal && selectedPerson.id === person.id && (
                  <ModalListUsers
                    onClose={setOpenModal}
                    person={selectedPerson}
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
            <th>Prénom</th>
            <th>Date de naissance</th>
            <th>Email</th>
            <th>Contact</th>
            <th></th>
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
