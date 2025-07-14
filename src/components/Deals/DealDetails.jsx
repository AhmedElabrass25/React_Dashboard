import { Delete, DeleteIcon, Edit } from "lucide-react";
import React from "react";

const DealDetails = () => {
  return (
    <>
      <div className="pt-6">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap mb-8">
            <div className="w-full lg:w-[30%] md:w-[45%] flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div>
                <h2 className="text-gray-500 text-sm font-medium mb-2">
                  Customer
                </h2>
                <p className="text-lg font-semibold">Deanna Annis</p>
              </div>
            </div>
            <div className="w-full lg:w-[30%] md:w-[45%]">
              <h2 className="text-gray-500 text-sm font-medium mt-4 mb-2">
                Email
              </h2>
              <p className="text-lg">brodrigues@gmail.com</p>
            </div>
            <div className="w-full lg:w-[30%] md:w-[45%]">
              <h2 className="text-gray-500 text-sm font-medium mt-4 mb-2">
                Phone
              </h2>
              <p className="text-lg">617-952-4069</p>
            </div>
          </div>
          {/* ============================== */}
          <div className="bg-white p-7 flex items-center justify-between flex-wrap mb-8">
            <p className="text-lg">
              2893 Austin Secret Lane, Parowan, UT 12413
            </p>
            <div className="flex items-center gap-2">
              <Edit size={25} className="hover:text-yellow cursor-pointer " />
              <DeleteIcon
                size={25}
                className="hover:text-red cursor-pointer "
              />
            </div>
          </div>
          {/* =========================== */}
          <div className="flex items-start justify-between flex-wrap mb-8">
            <div className="w-full md:w-[48%] lg:w-[40%] ">
              <div className="w-full flex items-center justify-between mb-3">
                <div className="w-1/2">
                  <h2 className="text-gray-500 text-sm font-medium mb-1">
                    Progress
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 rounded-full text-lg font-medium">
                    In Progress
                  </span>
                </div>
                <div className="w-1/2">
                  <h2 className="text-gray-500 text-sm font-medium mb-1">
                    Appointment Date
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 rounded-full text-lg font-medium">
                    Nov 17, 2021 08:00{" "}
                  </span>
                </div>
              </div>
              {/* === */}
              <div className="w-full flex items-start justify-between mb-3">
                <div className="w-1/2">
                  <h2 className="text-gray-500 text-sm font-medium mb-2">
                    Room Area{" "}
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 rounded-full text-lg font-medium">
                    100 m2{" "}
                  </span>
                </div>
                <div className="w-1/2">
                  <h2 className="text-gray-500 text-sm font-medium mb-1">
                    Number of people
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 rounded-full text-lg font-medium">
                    1000{" "}
                  </span>
                </div>
              </div>
              {/* === */}
              <div className="w-full flex items-center justify-between mb-4">
                <div className="w-1/2">
                  <h2 className="text-gray-500 text-sm font-medium mb-2">
                    Price
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 rounded-full text-lg font-medium">
                    $5000{" "}
                  </span>
                </div>
                <div className="w-1/2">
                  <h2 className="text-gray-500 text-sm font-medium mb-1">
                    Room Access
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 rounded-full text-lg font-medium">
                    Keys with doorman{" "}
                  </span>
                </div>
              </div>
              {/* === */}
              <div className="w-full">
                <h2 className="text-gray-500 text-sm font-medium mb-1">
                  Special Instructions
                </h2>
                <p className="text-lg">
                  At frsus viverra adipiscing at in tellus. Blandit massa enim
                  nec dui nunc martis. Lacus vel facilisis volutpat est velit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-[48%] lg:w-[40%] ">
              <div className="w-full h-[300px] bg-grey50 rounded-lg"></div>
            </div>
          </div>
          {/* ========================= */}

          <div className="flex items-start justify-between flex-wrap mb-8">
            <div className="w-full md:w-[48%] lg:w-[40%]">
              {/* Activity Log Section */}
              <div className="w-full">
                <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-medium">17 Nov 2021</h3>
                    <p className="text-gray-600">
                      Installation or inspection of your thermostat
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-medium">18 Nov 2021</h3>
                    <p className="text-gray-600">
                      Installation of the new air conditioning system
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-medium">19 Nov 2021</h3>
                    <p className="text-gray-600">
                      Evaluation and removal of the old system
                    </p>
                  </div>
                  <button className="w-full text-center text-blue hover:text-blue font-medium">
                    <span className="border-2 px-4 py-2 border-mdium rounded hover:bg-grey30">
                      Load More
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[48%] lg:w-[40%]">
              {/* Record Activity Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Record Activity</h2>
                <div className="border border-gray-200 rounded p-4">
                  <h3 className="text-gray-500 text-sm font-medium mb-2">
                    Description
                  </h3>
                  <textarea
                    className="w-full h-12 resize-none outline-none p-3 border border-gray-300 rounded mb-4"
                    placeholder="Write your notes"
                  ></textarea>

                  <h3 className="text-gray-500 text-sm font-medium mb-2">
                    Date
                  </h3>
                  <input
                    type="date"
                    className="w-full h-12 resize-none outline-none p-3 border border-gray-300 rounded mb-4"
                  />
                  {/* image */}

                  <div className="mb-4">
                    <h3 className="text-gray-500 text-sm font-medium mb-2">
                      Image
                    </h3>

                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={(e) => {
                        console.log("Selected file:", e.target.files[0]);
                      }}
                    />

                    <label
                      htmlFor="fileInput"
                      className="block text-center w-full px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-pointer hover:bg-gray-300"
                    >
                      ADD
                    </label>
                  </div>

                  <button className="w-full py-2 bg-blue-600 text-white rounded bg-blue">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealDetails;
