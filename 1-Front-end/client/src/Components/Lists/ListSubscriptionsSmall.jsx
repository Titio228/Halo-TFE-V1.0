import React, { useState, useEffect } from "react";
import ModalListSubscriptions from "../Modals/ModalListSubscriptions";
import ModalAddPrice from "../Modals/ModalAddPrice";
import { SortListActions } from "../Functions/SortList";
import { SearchItemsPrice } from "../Functions/SearchItems";
import dataTest from "../../../DataTest/dataTestSubscription";

export default function ListSubscriptionsSmall() {
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySerach, setSelectedPersonBySearch] = useState(data);

  const handleClickDisplayDetails = (subscription) => {
    setSelectedSubscription(subscription);
    setOpenModal(!openModal);
  };

  const handleSearchItems = (e) => {
    setSelectedPersonBySearch(SearchItemsPrice(e.target.value, data));
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
          <h1 className="font-bold mr-2">Liste des prix</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddPrice onClose={setOpenModalAdd} />}
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("A")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("a")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("B")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("b")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("C")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("c")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("D")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("d")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("E")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("e")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("F")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("f")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("G")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("g")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("H")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("h")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("I")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("i")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("J")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("j")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("K")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("k")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("L")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("l")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("M")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("m")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("N")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("n")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("O")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("o")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("P")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("p")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("Q")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("q")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("R")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("r")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("S")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("s")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("T")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("t")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("U")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("u")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("V")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("v")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
                  </td>
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("W")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("w")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("X")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("x")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("Y")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("y")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
        {selectedPersonBySerach.filter((subscription) =>
          subscription.name.startsWith("Z")
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
              .filter((subscription) =>
                subscription.name.toLowerCase().startsWith("z")
              )
              .map((subscription) => (
                <tr key={subscription.id}>
                  <td>{subscription.name}</td>
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
                  <td className="flex justify-center items-center">
                    <p className="mr-2">Statut</p>
                    <i
                      className={
                        subscription.status
                          ? "fa-regular fa-circle text-green-500"
                          : "fa-regular fa-circle text-red-500"
                      }
                    ></i>
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
      </table>
    </div>
  );
}
