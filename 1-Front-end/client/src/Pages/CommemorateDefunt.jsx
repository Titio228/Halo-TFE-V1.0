import React, { useState } from "react";
import handleClickSave from "../Components/Functions/HandleClickSave";
import ListDefuntsCommemorateSmall from "../Components/Lists/ListDefuntsCommemorateSmall";
import { CheckValidInputString } from "../Components/Functions/CheckValidInput";
import ListCities from "../Components/Lists/ListVilles";

export default function CommemorateDefunt() {
  const [data, setData] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    dateOfDead: "",
    city: "",
  });
  const [cities, setCities] = useState(ListCities);
  const [file, setFile] = useState(null);
  const [fileDocument, setFileDocument] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrlDocument, setImageUrlDocument] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    const url = URL.createObjectURL(uploadedFile);
    setImageUrl(url);
  };

  const handleFileChangeDocument = (e) => {
    const uploadedFile = e.target.files[0];
    setFileDocument(uploadedFile);
    const url = URL.createObjectURL(uploadedFile);
    setImageUrlDocument(url);
  };

  const FormatBodyForRequest = (e, key) => {
    switch (key) {
      case "lastName":
      case "firstName":
      case "city":
        if (CheckValidInputString(e.target.value))
          //Check input only character
          setData({ ...data, [key]: e.target.value });
        break;
      case "dateOfBirth":
        setData({ ...data, [key]: e.target.value });
        break;
      case "dateOfDead":
        setData({ ...data, [key]: e.target.value });
        break;
      default:
        setData({ ...data, [key]: e.target.value });
        break;
    }
  };

  const handleChangeStatus = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  return (
    <div className="w-full text-center">
      <h1 className="text-3xl text-halo my-8">Commémorer un défunt</h1>
      <div className="w-full grid md:grid-cols-2 justify-center items-center">
        <div>
          <h1 className="text-center text-2xl text-red-500">
            Identité du défunt
          </h1>
          <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
            <label
              htmlFor="lastName"
              className="text-center font-bold text-halo"
            >
              Nom
            </label>
            <input
              type="text"
              value={data.lastName ? data.lastName : ""}
              className="col-span-2 rounded-lg p-1 text-center text-black"
              onChange={(e) => FormatBodyForRequest(e, "lastName")}
            />
          </div>
          <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
            <label
              htmlFor="firstName"
              className="text-center font-bold text-halo"
            >
              Prénom
            </label>
            <input
              type="text"
              value={data.firstName ? data.firstName : ""}
              className="col-span-2 rounded-lg p-1 text-center text-black"
              onChange={(e) => FormatBodyForRequest(e, "firstName")}
            />
          </div>
          <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
            <label
              htmlFor="dateOfBirth"
              className="text-center font-bold text-halo"
            >
              Date de naissance
            </label>
            <input
              type="date"
              value={data.dateOfBirth ? data.dateOfBirth : ""}
              className="col-span-2 rounded-lg p-1 text-center text-black"
              onChange={(e) => FormatBodyForRequest(e, "dateOfBirth")}
            />
          </div>
          <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
            <label
              htmlFor="dateOfDead"
              className="text-center font-bold text-halo"
            >
              Date de décès
            </label>
            <input
              type="date"
              value={data.dateOfDead ? data.dateOfDead : ""}
              className="col-span-2 rounded-lg p-1 text-center text-black"
              onChange={(e) => FormatBodyForRequest(e, "dateOfDead")}
            />
          </div>
          <div className="w-11/12 grid grid-cols-3 justify-center items-center my-2">
            <label htmlFor="city" className="text-center font-bold text-halo">
              Ville
            </label>
            <select
              id="mySelect"
              value={data.city}
              onChange={(e) => handleChangeStatus(e, "city")}
              className="col-span-2 rounded-lg p-1 text-center text-black"
            >
              {cities &&
                cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center my-8">
            <div>
              <h1 className="text-center text-2xl text-red-500">
                Photo du défunt
              </h1>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                onChange={handleFileChange}
                className="mr-8"
              />
            </div>
            <div>
              {imageUrl && (
                <div>
                  <img
                    src={imageUrl}
                    alt="Picture"
                    className="w-40 h-40 rounded-full"
                  />
                  <button
                    className="my-4 w-full rounded-lg p-1 bg-gray-500 shadow-lg hover:bg-gray-700 border border-gray-400"
                    onClick={(e) =>
                      handleClickSave("Voulez vous sauvegarder la photo ?")
                    }
                  >
                    Valider
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center my-8">
            <div>
              <h1 className="text-center text-2xl text-red-500">
                Attestation de décès
              </h1>
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                onChange={handleFileChangeDocument}
                className="mr-8"
              />
            </div>
            <div>
              {imageUrlDocument && (
                <div>
                  <img
                    src={imageUrlDocument}
                    alt="Picture"
                    className="w-40 h-40 rounded-full"
                  />
                  <button
                    className="my-4 w-full rounded-lg p-1 bg-gray-500 shadow-lg hover:bg-gray-700 border border-gray-400"
                    onClick={(e) =>
                      handleClickSave("Voulez vous sauvegarder la photo ?")
                    }
                  >
                    Valider
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-8/12 m-auto">
        <ListDefuntsCommemorateSmall />
      </div>
    </div>
  );
}
