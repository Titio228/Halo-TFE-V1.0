import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Caroussel({ data }) {
  return (
    data && (
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        className="w-full flex justify-center items-center mb-8"
      >
        {data.map((person) => (
          <div
            key={person.id}
            className="w-full h-60 flex flex-col justify-center items-center bg-gray-900 rounded-2xl"
          >
            <div className="w-full h-44 flex flex-col justify-center items-center">
              <Link
                to={`/user/defuntselected/${person.id}`}
                className="w-28 h-28 flex justify-center items-center"
              >
                <img
                  src={person.picture}
                  alt="Logo"
                  className="w-full h-full rounded-full"
                />
              </Link>
              <div className="w-96 flex flex-col justify-center items-center">
                <p className="text-2xl">
                  {person.lastName} {person.firstName}
                </p>
                <p>
                  Décédé le{" "}
                  <span className="text-halo">
                    {format(person.dateOfDead, "dd/MM/yyyy")}
                  </span>
                </p>
              </div>
            </div>

            <div className="mb-12"></div>
          </div>
        ))}
      </Carousel>
    )
  );
}
