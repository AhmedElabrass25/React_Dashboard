import React from "react";

const EditDealForm = ({ setEditDealForm }) => {
  return (
    <div className="fixed inset-0 bg-grey50 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[95%] max-w-2xl p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Edit Deal</h2>
          <button
            onClick={() => setEditDealForm(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ✖
          </button>
        </div>

        <form className="space-y-6">
          {/* Avatar Upload */}
          <div>
            <h3 className="block font-medium text-gray-700 mb-2">Room Image</h3>
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
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Room Area (m2)
              </label>
              <input
                type="number"
                placeholder="Room Area"
                className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
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
                className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
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
                className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
              />
            </div>
            {/* Special instructions */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Special Instructions
              </label>
              <textarea
                placeholder="Special Instructions"
                className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
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
                className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                placeholder="Price"
                className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
              />
            </div>
          </div>
          {/* progress select */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Progress
            </label>
            <select className="border border-gray-200 px-3 py-2 rounded-md bg-gray-50">
              <option>Not Started</option>
              <option>Started</option>
              <option>Completed</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDealForm;
