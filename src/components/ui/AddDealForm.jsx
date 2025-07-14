import React from "react";

const AddDealForm = ({ setOpenAddDealForm }) => {
  return (
    <>
      <div className="fixed inset-0 bg-grey50 bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-[95%]max-w-[650px] max-h-[90vh] overflow-y-auto p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Add New Deal
            </h2>
            <button
              onClick={() => setOpenAddDealForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </div>
          {/*  Form */}
          <form className="space-y-6">
            {/* Avatar Upload */}
            <div>
              <div
                className="w-full flex items-center justify-between py-3
                px-4 rounded-lg mb-5 bg-grey50/40"
              >
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 overflow-hidden rounded-full flex-shrink-0 bg-grey50"></div>
                  <div>
                    <p className="text-gray-700 font-medium">
                      319 Haul Road, Saint Paul, MN
                    </p>
                    <p className="text-gray-500 text-sm">
                      Nov 14, 09:00 • $6000
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-[30px] text-gray-700 bg-white">
                  Change Customer
                </button>
              </div>
              <h3 className="block font-medium text-gray-700 mb-2">
                Room Image
              </h3>
              <input type="file" className="hidden" id="roomImage" />
              <label
                htmlFor="roomImage"
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 cursor-pointer"
              >
                ADD
              </label>
            </div>
            {/* Address */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Street Address"
                className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50 mb-3"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
                <input
                  type="text"
                  placeholder="State / Province"
                  className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
            </div>
            {/* Room area & number of people */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* room area */}
              <div className="w-full">
                <label className="block font-medium text-gray-700 mb-1">
                  Room Area (m2)
                </label>
                <input
                  type="number"
                  placeholder="Room Area"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
              {/* number of people */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Number of People
                </label>
                <input
                  type="number"
                  placeholder="Number of People"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
            </div>
            {/* Apointment Date & special instructions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Apointment Date */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Appointment Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
              {/* Special instructions */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Special Instructions
                </label>
                <textarea
                  placeholder="Special Instructions"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                ></textarea>
              </div>
            </div>
            {/* ==============Room access & price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Room Access
                </label>
                <input
                  type="text"
                  placeholder="Room Access"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
            </div>
            {/* progress select */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Progress
              </label>
              <select className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50">
                <option>Not Started</option>
                <option>Started</option>
                <option>Completed</option>
              </select>
            </div>
            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setOpenAddDealForm(false)}>Cancel</button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700"
              >
                Save Deal
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDealForm;
