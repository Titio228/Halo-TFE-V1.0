import React, { useState, useEffect } from "react";
import ModalListPromotions from "../Modals/ModalListPromotions";
import ModalAddPromotion from "../Modals/ModalAddPromotion";
import { SortListActions } from "../Functions/SortList";
import { SearchItemsPromotion } from "../Functions/SearchItems";
import dataTest from "../../../DataTest/dataTestPromotion";

export default function ListPromotionSmall() {
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySerach, setSelectedPersonBySearch] = useState(data);

  const handleClickDisplayDetails = (promotion) => {
    setSelectedPromotion(promotion);
    setOpenModal(!openModal);
  };

  const handleSearchItems = (e) => {
    setSelectedPersonBySearch(SearchItemsPromotion(e.target.value, data));
  };

  useEffect(() => {
    try {
      setSelectedPersonBySearch(SortListActions(data));
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, []);

  return (
    <div className="w-full overflow-x-auto h-96 mb-8">
      <div className="flex flex-col mb-6">
        <div className="flex my-4">
          <h1 className="font-bold mr-2">Liste des promotions</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddPromotion onClose={setOpenModalAdd} />}
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
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("A")
        ).length > 0 && (
          <thead>
            <tr>
              <th>A</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("a")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("B")
        ).length > 0 && (
          <thead>
            <tr>
              <th>B</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("b")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("C")
        ).length > 0 && (
          <thead>
            <tr>
              <th>C</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("c")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("D")
        ).length > 0 && (
          <thead>
            <tr>
              <th>D</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("d")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("E")
        ).length > 0 && (
          <thead>
            <tr>
              <th>E</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("e")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("F")
        ).length > 0 && (
          <thead>
            <tr>
              <th>F</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("f")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("G")
        ).length > 0 && (
          <thead>
            <tr>
              <th>G</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("g")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("H")
        ).length > 0 && (
          <thead>
            <tr>
              <th>H</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("h")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("I")
        ).length > 0 && (
          <thead>
            <tr>
              <th>I</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("i")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("J")
        ).length > 0 && (
          <thead>
            <tr>
              <th>J</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("j")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("K")
        ).length > 0 && (
          <thead>
            <tr>
              <th>K</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("k")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("L")
        ).length > 0 && (
          <thead>
            <tr>
              <th>L</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("l")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("M")
        ).length > 0 && (
          <thead>
            <tr>
              <th>M</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("m")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("N")
        ).length > 0 && (
          <thead>
            <tr>
              <th>N</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("n")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("O")
        ).length > 0 && (
          <thead>
            <tr>
              <th>O</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("o")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("P")
        ).length > 0 && (
          <thead>
            <tr>
              <th>P</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("p")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("Q")
        ).length > 0 && (
          <thead>
            <tr>
              <th>Q</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("q")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("R")
        ).length > 0 && (
          <thead>
            <tr>
              <th>R</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("r")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("S")
        ).length > 0 && (
          <thead>
            <tr>
              <th>S</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("s")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("T")
        ).length > 0 && (
          <thead>
            <tr>
              <th>T</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("t")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("U")
        ).length > 0 && (
          <thead>
            <tr>
              <th>U</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("u")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("V")
        ).length > 0 && (
          <thead>
            <tr>
              <th>V</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("v")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("W")
        ).length > 0 && (
          <thead>
            <tr>
              <th>W</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("w")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("X")
        ).length > 0 && (
          <thead>
            <tr>
              <th>X</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("x")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("Y")
        ).length > 0 && (
          <thead>
            <tr>
              <th>Y</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("y")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((promotion) =>
          promotion.name.startsWith("Z")
        ).length > 0 && (
          <thead>
            <tr>
              <th>Z</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {selectedPersonBySerach &&
            selectedPersonBySerach
              .filter((promotion) =>
                promotion.name.toLowerCase().startsWith("z")
              )
              .map((promotion) => (
                <tr key={promotion.id}>
                  <td>{promotion.name}</td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        handleClickDisplayDetails(promotion);
                      }}
                    >
                      details
                    </button>
                  </td>
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        promotion.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                  {openModal && selectedPromotion.id === promotion.id && (
                    <ModalListPromotions
                      onClose={setOpenModal}
                      promotion={selectedPromotion}
                    />
                  )}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
