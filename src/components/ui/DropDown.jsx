import React from "react";
import { User, BriefcaseBusiness, X, MoveRight } from "lucide-react";
const DropDown = ({
  setDropdownOpen,
  setSelectedForm,
  setOpenCustomerForm,
}) => {
  return (
    <>
      <div className="absolute right-0 mt-2 w-52 bg-white shadow-md rounded-md border z-50">
        <button
          className="w-full flex items-center justify-end"
          onClick={() => setDropdownOpen(false)}
        >
          <span className="px-4 py-2 hover:text-red">
            <X />
          </span>
        </button>
        <button
          onClick={() => {
            setSelectedForm("customer");
            setDropdownOpen(false);
            setOpenCustomerForm(true);
          }}
          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 text-left"
        >
          <span className="flex items-center gap-2">
            {" "}
            <User />
            Customer
          </span>
          <MoveRight />
        </button>
        <button
          onClick={() => {
            // setSelectedForm("deal");
            setDropdownOpen(false);
          }}
          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 text-left"
        >
          <span className="flex items-center gap-2">
            {" "}
            <BriefcaseBusiness />
            Deal
          </span>
          <MoveRight />
        </button>
      </div>
    </>
  );
};

export default DropDown;
