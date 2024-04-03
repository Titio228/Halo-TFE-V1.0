import React, { useState, useEffect } from "react";
import ModalListDeliveries from "../Modals/ModalListDeliveries";
import ModalAddDelivery from "../Modals/ModalAddDelivery";
import { SortListNumber } from "../Functions/SortList";
import { SearchItemsDelivery } from "../Functions/SearchItems";
import dataTest from "../../../DataTest/dataTestDeliveries";

export default function ListDeliveriesSmall() {
  const [selectedDelivery, setSelectedDeliveryn] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySerach, setSelectedPersonBySearch] = useState(data);

  const handleClickDisplayDetails = (delivery) => {
    setSelectedDeliveryn(delivery);
    setOpenModal(!openModal);
  };

  const handleSearchItems = (e) => {
    setSelectedPersonBySearch(SearchItemsDelivery(e.target.value, data));
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
          <h1 className="font-bold mr-2">Liste des Livraisons</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddDelivery onClose={setOpenModalAdd} />}
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
            <th>Livreur</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach.map((delivery) => (
              <tr key={delivery.commandNumber}>
                <td>{delivery.commandNumber}</td>
                <td>
                  {delivery.deliverer.lastNameDeliverer +
                    " " +
                    delivery.deliverer.firstNameDeliverer}
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      handleClickDisplayDetails(delivery);
                    }}
                  >
                    details
                  </button>
                </td>
                {openModal &&
                  selectedDelivery.commandNumber === delivery.commandNumber && (
                    <ModalListDeliveries
                      onClose={setOpenModal}
                      delivery={selectedDelivery}
                    />
                  )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
