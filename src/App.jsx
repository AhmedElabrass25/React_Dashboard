import React, { useState } from "react";
import Asidebar from "./components/Asidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Deals from "./components/Deals/Deals";
import Users from "./components/Users/Users";
import Tasks from "./components/Tasks/Tasks";
import Date from "./components/Date/Date";
import Notifications from "./components/Notifications/Notifications";
import Settings from "./components/Setting/Settings";
import Navbar from "./components/Navbar";
import EditDetails from "./components/Deals/EditDetails";
import UserDetails from "./components/Users/UserDetails";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageName, setPageName] = useState("Dashboard");
  return (
    <div>
      <BrowserRouter>
        <Asidebar
          openSide={isOpen}
          setOpenSide={setIsOpen}
          setPageName={setPageName}
        />
        <div className="md:ml-24">
          <Navbar
            openSide={isOpen}
            setOpenSide={setIsOpen}
            pageName={pageName}
          />
          <div className="w-full p-5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/dates" element={<Date />} />
              <Route path="/editDetails/:id" element={<EditDetails />} />
              <Route path="/userDetails/:id" element={<UserDetails />} />

              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
