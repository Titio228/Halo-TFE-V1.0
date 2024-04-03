import React, { useState, useEffect } from "react";
import ModalListEngravings from "../Modals/ModalListEngravings";
import ModalAddEngraving from "../Modals/ModalAddEngraving";
import { SortListNumber } from "../Functions/SortList";
import { SearchItemsEngraving } from "../Functions/SearchItems";
import dataTest from "../../../DataTest/dataTestEngraving";

export default function ListEngravingsSmall() {
  const [selectedEngraving, setSelectedEngraving] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySerach, setSelectedPersonBySearch] = useState(data);

  const handleClickDisplayDetails = (engraving) => {
    setSelectedEngraving(engraving);
    setOpenModal(!openModal);
  };

  const handleSearchItems = (e) => {
    setSelectedPersonBySearch(SearchItemsEngraving(e.target.value, data));
  };

  useEffect(() => {
    try {
      setSelectedPersonBySearch(SortListNumber(data));
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, []);

  return (
    <div className="w-full overflow-x-auto h-96 mb-8">
      <div className="flex flex-col mb-6">
        <div className="flex my-4">
          <h1 className="font-bold mr-2">Liste des gravures</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddEngraving onClose={setOpenModalAdd} />}
        </div>
        <div className="w-full flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-10/12 text-center rounded-xl bg-gray-400 placeholder:text-gray-800 outline-none p-1 text-white"
            onChange={handleSearchItems}
          />
        </div>
      </div>
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <th>N° de commande</th>
            <th>Nom du graveur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach.map((engraving) => (
              <tr key={engraving.commandNumber}>
                <td>{engraving.commandNumber}</td>
                <td>
                  {engraving.lastNameEngraver +
                    " " +
                    engraving.firstNameEngraver}
                </td>
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
      </table>
    </div>
  );
}
