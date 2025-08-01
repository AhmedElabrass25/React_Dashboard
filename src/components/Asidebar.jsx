import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";

import {
  Users,
  Settings,
  ListChecks,
  CalendarDays,
  Bell,
  LayoutDashboard,
  BriefcaseBusiness,
  X,
  BarChart,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
const Asidebar = ({ openSide, setOpenSide, setPageName }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define threshold for mobile view
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
    { link: "/deals", icon: <BriefcaseBusiness />, name: "Deals" },
    { link: "/users", icon: <Users />, name: "Users" },
    { link: "/tasks", icon: <ListChecks />, name: "Tasks" },
    { link: "/dates", icon: <CalendarDays />, name: "Dates" },
    { link: "/notifications", icon: <Bell />, name: "Notifications" },
    { link: "/settings", icon: <Settings />, name: "Settings" },
  ];
  useEffect(() => {
    // Auto-update page name based on path
    if (pathname === "/") {
      setPageName("Dashboard");
    } else if (pathname === "/users") {
      setPageName("Users");
    } else if (pathname === "/deals") {
      setPageName("Deals");
    } else if (pathname === "/tasks") {
      setPageName("Tasks");
    } else if (pathname === "/dates") {
      setPageName("Dates");
    } else if (pathname === "/notifications") {
      setPageName("Notifications");
    } else if (pathname === "/settings") {
      setPageName("Settings");
    } else if (pathname.startsWith("/userDetails")) {
      setPageName("User Details");
    } else if (pathname.startsWith("/dealDetails")) {
      setPageName("Deal Details");
    } else {
      setPageName("Page"); // fallback
    }
  }, [pathname]);
  return (
    <>
      {/* Sidebar */}
      {(openSide || !isMobile) && (
        <aside
          className={`aside fixed z-20 top-0 left-0 h-screen w-24 shadow-xl border-r-2 bg-grey10 border-grey30 p-4`}
        >
          {/* Navigation links */}
          <ul className="w-100 flex flex-col items-center justify-center font-medium">
            <Link to="/" className="mb-8">
              <img src={logo} className="w-12 h-12" alt="logo" />
            </Link>
            {links.map((link) => (
              <li
                key={link.link}
                className={`w-100 flex items-center justify-center`}
              >
                <Link
                  to={link.link}
                  className={`flex items-center justify-center p-2 rounded-lg border-[1px] border-grey50 ${
                    pathname === link.link ||
                    (link.link === "/users" &&
                      pathname.startsWith("/userDetails/")) ||
                    (link.link === "/deals" &&
                      pathname.startsWith("/dealDetails/"))
                      ? "text-white bg-blue"
                      : "text-gray-900 hover:bg-blue hover:text-white"
                  }`}
                  onClick={() => {
                    setOpenSide(false);
                  }}
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Asidebar;
