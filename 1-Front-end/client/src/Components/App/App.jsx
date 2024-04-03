import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../../Pages/Home";
import DefuntInfo from "../../Pages/DefuntInfo";
import Prices from "../../Pages/Prices";
import Profile from "../../Pages/Profile";
import CommemorateDefunt from "../../Pages/CommemorateDefunt";
import AdminDashboard from "../../Pages/AdminDashboard";
import ListUsers from "../Lists/ListUsers";
import ListUsersSmall from "../Lists/ListUsersSmall";
import ListDefunts from "../Lists/ListDefunts";
import ListDefuntsForUSers from "../Lists/ListDefuntsForUsers";
import ListDefuntsForUSersSmall from "../Lists/ListDefuntsForUsersSmall";
import ListDefuntsSmall from "../Lists/ListDefuntsSmall";
import ListSubscriptions from "../Lists/ListSubscriptions";
import ListSubscriptionsSmall from "../Lists/ListSubscriptionsSmall";
import ListPromotions from "../Lists/ListPromotions";
import ListPromotionSmall from "../Lists/ListPromotionsSmall";
import ListDeliverers from "../Lists/ListDeliverers";
import ListDeliverersSmall from "../Lists/ListDeliverersSmall";
import ListEngravers from "../Lists/ListEngravers";
import ListEngraversSmall from "../Lists/ListEngraversSmall";
import ListDeliveries from "../Lists/ListDeliveries";
import ListDeliveriesSmall from "../Lists/ListDeliveriesSmall";
import ListOrders from "../Lists/ListOrders";
import ListOrdersSmall from "../Lists/ListOrdersSmall";
import ListEngravings from "../Lists/ListEngravings";
import ListEngravingsSmall from "../Lists/ListEngravingsSmall";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="p-4 w-full bg-navbar text-navbar">
        <Navbar />
      </div>
      <div className="p-4 w-full bg-body text-body">
        <Routes>
          {/* Route users */}
          <Route path="/" element={<Home />} />
          {windowSize.width > 768 ? (
            <Route path="/user/listdefunts" element={<ListDefuntsForUSers />} />
          ) : (
            <Route
              path="/user/listdefunts"
              element={<ListDefuntsForUSersSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route path="/user/defuntselected/:id" element={<DefuntInfo />} />
          ) : (
            <Route path="/user/defuntselected/:id" element={<DefuntInfo />} />
          )}
          {windowSize.width > 768 ? (
            <Route path="/user/prices" element={<Prices />} />
          ) : (
            <Route path="/user/prices" element={<Prices />} />
          )}
          {windowSize.width > 768 ? (
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route path="/profile" element={<Profile />} />
          )}
          {windowSize.width > 768 ? (
            <Route path="/user/commemorate" element={<CommemorateDefunt />} />
          ) : (
            <Route path="/user/commemorate" element={<CommemorateDefunt />} />
          )}

          {/* Route admin */}
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          {windowSize.width > 768 ? (
            <Route path="/admin_dashboard/clients" element={<ListUsers />} />
          ) : (
            <Route
              path="/admin_dashboard/clients"
              element={<ListUsersSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route path="/admin_dashboard/defunts" element={<ListDefunts />} />
          ) : (
            <Route
              path="/admin_dashboard/defunts"
              element={<ListDefuntsSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route
              path="/admin_dashboard/deliverers"
              element={<ListDeliverers />}
            />
          ) : (
            <Route
              path="/admin_dashboard/deliverers"
              element={<ListDeliverersSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route
              path="/admin_dashboard/engravers"
              element={<ListEngravers />}
            />
          ) : (
            <Route
              path="/admin_dashboard/engravers"
              element={<ListEngraversSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route
              path="/admin_dashboard/engravings"
              element={<ListEngravings />}
            />
          ) : (
            <Route
              path="/admin_dashboard/engravings"
              element={<ListEngravingsSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route
              path="/admin_dashboard/deliveries"
              element={<ListDeliveries />}
            />
          ) : (
            <Route
              path="/admin_dashboard/deliveries"
              element={<ListDeliveriesSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route path="/admin_dashboard/orders" element={<ListOrders />} />
          ) : (
            <Route
              path="/admin_dashboard/orders"
              element={<ListOrdersSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route
              path="/admin_dashboard/promotions"
              element={<ListPromotions />}
            />
          ) : (
            <Route
              path="/admin_dashboard/promotions"
              element={<ListPromotionSmall />}
            />
          )}
          {windowSize.width > 768 ? (
            <Route
              path="/admin_dashboard/prices"
              element={<ListSubscriptions />}
            />
          ) : (
            <Route
              path="/admin_dashboard/prices"
              element={<ListSubscriptionsSmall />}
            />
          )}
        </Routes>
      </div>
      <div className="p-4 w-full bg-footer text-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
