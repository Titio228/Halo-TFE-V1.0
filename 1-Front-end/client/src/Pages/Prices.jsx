import React, { useState } from "react";
import MessageValidation from "../Components/Functions/MessageValidation";
import dataTest from "../../DataTest/dataTestSubscription";

export default function Prices() {
  const [data, setData] = useState(dataTest);

  const HandleClickPaid = () => {
    if (MessageValidation("Voulez vous payer ?")) {
      console.log("Payer");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mb-16">
      <h1 className="text-4xl text-red-500 my-8">Prix à l'année</h1>
      <div className="w-full grid md:grid-cols-3 gap-12 justify-evenly items-center text-center">
        {data &&
          data.map((price) => (
            <div
              key={price.id}
              className="m-auto h-96 w-80	border-4 border-gray-500 rounded flex flex-col justify-evenly items-center bg-gray-800 hover:border-orange-300"
            >
              <h1 className="text-3xl italic text-red-500">{price.name}</h1>
              <h2 className="text-2xl italic text-red-500">
                {price.price}€/an
              </h2>
              <div>
                <h3 className="text-xl text-orange-300 mb-4">Options</h3>
                <ul>
                  <div className="flex flex-col justify-start items-center">
                    {price.options.map((opt, index) => (
                      <div className="flex w-full justify-start items-center">
                        <i className="fa-solid fa-plus mr-2 text-orange-500" />
                        <li key={index} className="">
                          {opt}
                        </li>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
              <button
                className="border border-gray-400 w-1/2 rounded-lg py-1 bg-gray-600 hover:bg-orange-500 shadow-xl"
                onClick={HandleClickPaid}
              >
                Payer
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
