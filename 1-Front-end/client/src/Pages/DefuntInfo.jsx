import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import DataTest from "../../DataTest/dataTestSubscription";
import DataTestInfo from "../../DataTest/dataInfoDefunt";

export default function DefuntInfo() {
  let { id } = useParams();
  const [data, setData] = useState(DataTest);
  const [dataInfo, setDataInfo] = useState(DataTestInfo);
  const [basic, setBasic] = useState(false);
  const [medium, setMedium] = useState(false);
  const [premium, setPremium] = useState(false);

  const checkSubscitpion = (data) => {
    if (data.name === "Basic") {
      setPremium(false);
      setMedium(false);
      return setBasic(true);
    } else if (data.name === "Medium") {
      setBasic(false);
      setPremium(false);
      return setMedium(true);
    } else {
      setBasic(false);
      setMedium(false);
      return setPremium(true);
    }
  };

  useEffect(() => {
    try {
      checkSubscitpion(data[2]);
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <i className="fa-solid fa-dove text-2xl text-red-500 mr-2"></i>
        <i className="fa-solid fa-dove text-1xl text-orange-500 mr-8"></i>
        <h1 className="text-xl text-halo my-8">
          {dataInfo[id].lastName + " " + dataInfo[id].firstName}
        </h1>
        <i className="fa-solid fa-dove text-xl text-orange-500 ml-8"></i>
        <i className="fa-solid fa-dove text-2xl text-red-500 ml-2"></i>
      </div>
      <h2 className="mb-12 text-xl">
        {format(dataInfo[id].dateOfBirth, "dd/MM/yyyy")} -{" "}
        {format(dataInfo[id].dateOfDead, "dd/MM/yyyy")}
      </h2>
      {(medium || premium) && (
        <img
          src={dataInfo[id].picture}
          alt="photo"
          className="w-40 h-40 border border-orange-800 rounded-full text-center flex justify-center items-center"
        />
      )}
      <p className="w-11/12 my-20 text-justify">{dataInfo[id].text}</p>
      {premium && (
        <video width="640" height="360" controls className="rounded">
          <source src={dataInfo[id].video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
