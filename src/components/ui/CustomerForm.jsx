import React from "react";

const CustomerForm = ({ setOpenCustomerForm }) => {
  return (
    <>
      (
      <div className="fixed inset-0 bg-grey50 bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-[95%] max-w-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Add New Customer
            </h2>
            <button
              onClick={() => setOpenCustomerForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </div>

          <form className="space-y-6">
            {/* Avatar Upload */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Avatar
              </label>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700"
              >
                ADD
              </button>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50"
                />
              </div>
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

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => setOpenCustomerForm(false)}
                className="text-gray-600 hover:underline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700"
              >
                Save Customer
              </button>
            </div>
          </form>
        </div>
      </div>
      )
    </>
  );
};

export default CustomerForm;
