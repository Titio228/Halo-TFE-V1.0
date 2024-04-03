import React, { useState, useEffect } from "react";
import ModalListUsers from "../Modals/ModalListUsers";
import ModalAddUser from "../Modals/ModalAddUser";
import { SortListUsers } from "../Functions/SortList";
import { SearchClient } from "../Functions/SearchItems";
import dataTest from "../../../DataTest/dataTest";

export default function ListUsersSmall() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [data, setData] = useState(dataTest);
  const [selectedPersonBySerach, setSelectedPersonBySearch] = useState(data);

  const handleClickDisplayDetails = (person) => {
    setSelectedPerson(person);
    setOpenModal(!openModal);
  };

  const handleSearchItems = (e) => {
    setSelectedPersonBySearch(SearchClient(e.target.value, data));
  };

  useEffect(() => {
    try {
      setSelectedPersonBySearch(SortListUsers(data));
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, []);

  return (
    <div className="w-full overflow-x-auto h-96 mb-8">
      <div className="flex flex-col mb-6">
        <div className="flex my-4">
          <h1 className="font-bold mr-2">Liste des utilisateurs</h1>
          <i
            className="fa-solid fa-plus border border-gray-400 p-1 rounded-full text-halo ease-in-out duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setOpenModalAdd(!openModalAdd)}
          ></i>
          {openModalAdd && <ModalAddUser onClose={setOpenModalAdd} />}
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
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("A")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("a"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("B")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("b"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("C")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("c"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("D")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("d"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("E")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("e"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("F")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("f"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("G")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("g"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("H")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("h"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("I")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("i"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("J")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("j"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("K")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("k"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("L")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("l"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("M")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("m"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("N")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("n"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("O")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("o"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("P")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("p"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("Q")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("q"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("R")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("r"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("S")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("s"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("T")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("t"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("U")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("u"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("V")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("v"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("W")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("w"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("X")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("x"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("Y")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("y"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
        {selectedPersonBySerach.filter((person) =>
          person.lastName.startsWith("Z")
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
              .filter((person) => person.lastName.toLowerCase().startsWith("z"))
              .map((person) => (
                <tr key={person.id}>
                  <td>{person.lastName}</td>
                  <td>{person.firstName}</td>
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
                  {openModal && selectedPerson.id === person.id && (
                    <ModalListUsers
                      onClose={setOpenModal}
                      person={selectedPerson}
                    />
                  )}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
