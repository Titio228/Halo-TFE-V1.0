import React, { useState, useEffect } from "react";
import picHomeXs from "../assets/Img/pic-home1.avif";
import picHomeMd from "../assets/Img/pic-home-md.jpg";
import Button from "../Components/Buttons/Button";
import Carousel from "../Components/Hooks/Carousel/Carousel";
import ListDefunt from "../../DataTest/dataInfoDefunt";
import "./Css/Home.css";

export default function Home() {
  const [listDefunt, setListDefunt] = useState(ListDefunt);
  const [windowSize, setWindowSize] = useState({
    //Récupération des tailles d'écrans
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      //Modification des tailles d'écrans
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    //Réactualisation des pages pour adpater les tailles d'écrans
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Click du bouton go to footer avec effect smooth
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");

    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-4 text-center lg:grid lg:grid-cols-2">
      <div className="w-full flex justify-center items-center col-span-2">
        <Carousel data={listDefunt} />
      </div>
      <div className="w-full relative h-64 flex flex-col justify-center items-center font-bold lg:col-span-2 lg:h-96 mb-8">
        <h1 className="text-3xl z-10 lg:text-5xl">
          Bienvenue sur <span className="text-halo">HALO</span>
        </h1>
        <h2 className="text-2xl z-10 lg:text-4xl">
          Le Sanctuaire de Commémoration
        </h2>
        {windowSize.width > 768 ? (
          <img
            src={picHomeMd}
            alt="picHomeXs"
            className="w-full h-full bg-cover bg-center absolute top-0 opacity-40 rounded-lg"
          />
        ) : (
          <img
            src={picHomeXs}
            alt="picHomeXs"
            className="w-full h-full bg-cover bg-center absolute top-0 opacity-40 rounded-lg"
          />
        )}
      </div>
      <div className="py-4 lg:h-40 px-8">
        <h2 className="text-xl text-title-home">
          À la mémoire de nos bien-aimés
        </h2>
        <p className="text-sm">
          Bienvenue sur <span className="text-halo">HALO</span>, le sanctuaire
          en ligne dédié à la commémoration des défunts. Nous avons créé cet
          espace avec amour et respect pour offrir un lieu de réflexion, de
          partage et de célébration pour ceux qui ont marqué nos vies.
        </p>
      </div>
      <div className="py-4 lg:h-40 px-8">
        <h2 className="text-xl text-title-home">Notre Mission</h2>
        <p className="text-sm">
          À travers <span className="text-halo">HALO</span>, nous aspirons à
          créer un espace où la mémoire de nos proches peut briller
          éternellement. Chaque vie, chaque histoire, chaque sourire est
          précieux, et nous sommes là pour rendre hommage à ces moments qui
          restent gravés dans nos cœurs.
        </p>
      </div>
      <div className="py-4 lg:h-40 px-8">
        <h2 className="text-xl text-title-home">Partage de Souvenirs</h2>
        <p className="text-sm">
          Nous vous invitons chaleureusement à partager vos souvenirs, anecdotes
          et photos de vos proches disparus. En unissant nos souvenirs, nous
          créons une mosaïque vibrante qui capture la diversité des expériences
          et des héritages.
        </p>
        {windowSize.width > 768 ? (
          <Button
            link={"/user/commemorate"}
            text={"Partager"}
            color={"bg-btn-share"}
            size={"w-4/12"}
          />
        ) : (
          <Button
            link={"/user/prices"}
            text={"Partager"}
            color={"bg-btn-share"}
            size={"w-11/12"}
          />
        )}
      </div>
      <div className="py-4 lg:h-40 px-8">
        <h2 className="text-xl text-title-home">Événements de Commémoration</h2>
        <p className="text-sm">
          Rejoignez-nous lors de nos événements de commémoration spéciaux tout
          au long de l'année. Ces moments nous permettent de nous rassembler en
          tant que communauté pour partager notre amour, notre soutien et nos
          souvenirs.
        </p>
      </div>
      <div className="py-4 lg:h-40 px-8">
        <h2 className="text-xl text-title-home">Ressources de Soutien</h2>
        <p className="text-sm">
          La perte d'un être cher est une épreuve difficile.
          <span className="text-halo"> HALO</span> offre des ressources de
          soutien, des conseils sur le deuil, des liens vers des groupes de
          soutien et des informations utiles pour accompagner ceux qui
          traversent cette période.
        </p>
        {windowSize.width > 768 ? (
          <Button
            link={
              "https://www.soinspalliatifs.be/associations-diverses-suivi-de-deuil.html"
            }
            text={"Soutien"}
            color={"bg-btn-help"}
            size={"w-4/12"}
          />
        ) : (
          <Button
            link={
              "https://www.soinspalliatifs.be/associations-diverses-suivi-de-deuil.html"
            }
            text={"Soutien"}
            color={"bg-btn-help"}
            size={"w-11/12"}
          />
        )}
      </div>
      <div className="py-4 lg:h-40 px-8">
        <h2 className="text-xl text-title-home">Galerie de Souvenirs</h2>
        <p className="text-sm">
          Explorez notre galerie de souvenirs, une collection émouvante de
          photos et de témoignages rendant hommage à ceux qui sont partis. Si
          vous souhaitez contribuer à cette galerie, contactez-nous - chaque
          ajout est une étincelle qui illumine notre sanctuaire.
        </p>
      </div>
      <div className="py-4">
        <h2 className="text-xl text-title-home">
          Soutenez <span className="text-halo">HALO</span> avec un Abonnement
        </h2>
        <p className="text-sm">
          Soutenez notre mission en souscrivant un abonnement HALO. Votre
          contribution mensuelle aidera à maintenir ce sanctuaire en ligne, à
          développer de nouvelles fonctionnalités, et à étendre notre portée
          pour soutenir davantage de personnes en deuil.
        </p>
        {windowSize.width > 768 ? (
          <Button
            link={"/user/prices"}
            text={"Faire un don"}
            color={"bg-btn-subscription"}
            size={"w-4/12"}
          />
        ) : (
          <Button
            link={"/user/prices"}
            text={"Faire un don"}
            color={"bg-btn-subscription"}
            size={"w-11/12"}
          />
        )}
      </div>
      <div className="py-4 lg:h-40 px-8">
        <h2 className="text-xl text-title-home">Contactez-nous</h2>
        <p className="text-sm">
          Pour des questions, des suggestions ou pour partager un hommage,
          n'hésitez pas à nous contacter. Nous sommes là pour vous accompagner
          dans cette démarche de commémoration.
        </p>
        <p>
          Ensemble, nous honorons et chérissons la mémoire de nos bien-aimés.
          Merci de faire partie de la communauté
          <span className="text-halo"> HALO</span>.
        </p>
        <div className="w-full my-4 p-2 bg-btn-contact rounded-lg ease-in-out duration-200 hover:scale-110 lg:w-5/12 m-auto border border-gray-300">
          <button onClick={scrollToFooter}>
            <i className="fa-solid fa-arrow-down mr-4 animation text-halo"></i>
            Nous contacter
            <i className="fa-solid fa-arrow-down ml-4 animation text-halo"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
