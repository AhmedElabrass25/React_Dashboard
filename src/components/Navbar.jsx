import React, { useState, useRef, useEffect } from "react";
import user from "../assets/User.png";
import DropDown from "./ui/DropDown";
import CustomerForm from "./ui/CustomerForm";
import AddDealForm from "./ui/AddDealForm";
import AddTaskForm from "./ui/AddTaskForm";
const Navbar = ({ openSide, setOpenSide, pageName }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [openCustomerForm, setOpenCustomerForm] = useState(false);
  const [openAddDealForm, setOpenAddDealForm] = useState(false);
  const [openAddTaskForm, setOpenAddTaskForm] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="w-full sticky top-0 right-0 z-50 bg-[#f6fafd] px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={() => setOpenSide(!openSide)}
          className="block md:hidden w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
        >
          {openSide ? "✖" : "☰"}
        </button>
        {/* ==============Page name================= */}
        <h1 className="text-xl font-semibold text-[#0d2b4e]">{pageName}</h1>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(true)}
              className="bg-[#5d5fef] text-white font-medium md:px-4 px-3 py-1 md:py-2 rounded-lg md:rounded-full hover:bg-indigo-600 transition"
            >
              <span className="block md:hidden text-xl">+</span>
              <span className="hidden md:inline">Add New</span>
            </button>
            {/* =============== Dropdown =============== */}
            {dropdownOpen && (
              <DropDown
                setDropdownOpen={setDropdownOpen}
                setSelectedForm={setSelectedForm}
                setOpenCustomerForm={setOpenCustomerForm}
                setOpenAddDealForm={setOpenAddDealForm}
                setOpenAddTaskForm={setOpenAddTaskForm}
              />
            )}
          </div>

          {/* Search Expandable */}
          <div ref={searchRef} className="relative flex items-center">
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition"
            >
              🔍
            </button>
            {/* ===============Input Search================== */}
            <input
              type="text"
              placeholder="Search..."
              className={`ml-2 px-3 py-2 border border-gray-300 rounded-full transition-all duration-300 bg-white ${
                searchOpen ? "w-40 md:w-52 opacity-100" : "w-0 opacity-0"
              } overflow-hidden`}
            />
          </div>

          {/*  =========== Avatar =============== */}
          <img
            src={user}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
        </div>
      </nav>
      {openCustomerForm && (
        <CustomerForm setOpenCustomerForm={setOpenCustomerForm} />
      )}
      {openAddDealForm && (
        <AddDealForm setOpenAddDealForm={setOpenAddDealForm} />
      )}
      {openAddTaskForm && (
        <AddTaskForm setOpenAddTaskForm={setOpenAddTaskForm} />
      )}
    </>
  );
};

export default Navbar;
