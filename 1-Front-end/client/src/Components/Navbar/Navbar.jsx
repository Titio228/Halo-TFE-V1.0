import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./DropDownUser";
import DropdownAdmin from "./DropDownAdmin";
import DropdownLangage from "./DropDownLangage";
import Logo from "../../assets/Img/Logo.avif";
import PrivateRoute from "../Hooks/Keycloak/PrivateRoute";
import { useKeycloak } from "keycloak-react-web";
import { useNavigate } from "react-router-dom";
import MesssageCheck from "../Functions/MessageValidation";
import axios from "axios";

export default function Navbar() {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  const [getRoleUser, setGetRoleUser] = useState(false);
  const [getRoleAdmin, setGetRoleAdmin] = useState(false);
  const [getRoleDeliverer, setGetRoleDeliverer] = useState(false);
  const [getRoleEngraver, setGetRoleEngraver] = useState(false);
  const [getUserName, setUserName] = useState("");
  const [getUserEmail, setUserEmail] = useState("");

  //============================================================================================================
  //Récuparation des rôles depuis keycloak
  keycloak.onAuthSuccess = async () => {
    setGetRoleUser(keycloak.tokenParsed.realm_access.roles.includes("hl-user"));
    setGetRoleAdmin(
      keycloak.tokenParsed.realm_access.roles.includes("hl-admin")
    );
    setGetRoleDeliverer(
      keycloak.tokenParsed.realm_access.roles.includes("hl-deliverer")
    );
    setGetRoleEngraver(
      keycloak.tokenParsed.realm_access.roles.includes("hl-engraver")
    );

    //============================================================================================================
    //Envoie des données au Back-end
    // const userData = {
    //   lastName: keycloak.tokenParsed.family_name,
    //   firstName: keycloak.tokenParsed.given_name,
    //   email: keycloak.tokenParsed.email,
    // };

    try {
      // if (keycloak.isTokenExpired()) {
      //   console.log("Token has expired, refreshing it...");
      //   await keycloak.updateToken();
      // }

      // axios
      //   .post("http://localhost:3000/users", userData, {
      //     headers: {
      //       authorization: `Bearer ${keycloak.token}`,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  };

  //============================================================================================================
  //Actualisation de la page à chaque changement d'état de keycloak
  useEffect(() => {
    try {
      if (keycloak.authenticated) {
        keycloak.onAuthSuccess();
      }
    } catch (error) {
      console.log("Error with axios: ", error);
    }
  }, [keycloak.authenticated]);

  return (
    <div className="w-full flex flex-col lg:flex-row navbar m-auto">
      <div className="flex-1">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-12 rounded-full hover:shadow-md hover:border-2 hover:border-gray-500"
          />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-center items-center md:grid-cols-none md:flex md:flex-row">
        {getRoleAdmin && (
          <PrivateRoute>
            <div className="form-control">
              <DropdownAdmin />
            </div>
          </PrivateRoute>
        )}
        <div className="form-control">
          <DropdownLangage />
        </div>
        <div className="form-control">
          <Dropdown />
        </div>
        <div className="form-control text-body">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-[105px] text-center md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end col-span-2 flex justify-center items-center">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-body"
          >
            <PrivateRoute>
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge text-orange-500 border border-orange-500">
                    New
                  </span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
            </PrivateRoute>
            {!keycloak.authenticated && (
              <li>
                <a
                  onClick={() => {
                    keycloak.login();
                  }}
                >
                  Login
                </a>
              </li>
            )}
            {!!keycloak.authenticated && (
              <li>
                <a
                  onClick={() => {
                    if (MesssageCheck()) {
                      navigate("/");
                      keycloak.logout();
                    }
                  }}
                >
                  Logout {keycloak.tokenParsed.given_name}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
