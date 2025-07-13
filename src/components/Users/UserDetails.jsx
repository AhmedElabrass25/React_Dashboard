import { DeleteIcon, Edit2Icon, Trash2, UserRoundPen } from "lucide-react";
import React from "react";

const UserDetails = () => {
  return (
    <div className="pt-6">
      <div className="container ">
        <div className="flex items-start justify-between flex-wrap">
          <div className="w-full md:w-[48%] lg:w-[60%] mb-10">
            {/* =============background and image============= */}
            <div className="w-full relative h-[300px] bg-gray-200 rounded-lg mb-5">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="background"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="w-full absolute left-[10px] bottom-[20px] flex items-start justify-between">
                {/* personalIMage */}
                <div className="w-28 h-28 rounded-full bg-grey70 relative">
                  <span className="absolute right-5 -bottom-1 bg-blue text-white p-1 rounded-full">
                    <UserRoundPen
                      size={20}
                      className="text-white cursor-pointer"
                    />
                  </span>
                </div>
                {/* delete icon */}
                <div className="w-10 h-10 absolute right-8 bottom-5 bg-white rounded-full flex items-center justify-center">
                  <Trash2
                    size={22}
                    color="black"
                    className="cursor-pointer hover:text-red/50"
                  />
                </div>
              </div>
            </div>
            {/* User Information Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                User Information
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {/* First Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border bg-grey30/30 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-grey30/30 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-grey30/30 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 bg-grey30/30 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="w-full px-3 py-2 bg-grey30/30 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full px-3 py-2 border bg-grey30/30 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State / Province"
                      className="w-full px-3 py-2 border bg-grey30/30 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="w-full px-3 py-2 border bg-grey30/30 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* ====================================== */}
          <div className="w-full md:w-[48%] lg:w-[30%]">
            {/* Recent Deals Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Recent Deals
              </h1>

              <div className="">
                {/* Deal 1 */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-12 rounded-full bg-grey50"></div>
                  <div>
                    <p className="text-gray-700 font-medium">
                      319 Haul Road, Saint Paul, MN
                    </p>
                    <p className="text-gray-500 text-sm">
                      Nov 14, 09:00 • $6000
                    </p>
                  </div>
                </div>
                {/* Deal 2 */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-12 rounded-full bg-grey50"></div>
                  <div>
                    <p className="text-gray-700 font-medium">
                      319 Haul Road, Saint Paul, MN
                    </p>
                    <p className="text-gray-500 text-sm">
                      Nov 14, 09:00 • $6000
                    </p>
                  </div>
                </div>
              </div>
              {/*   Load More button */}
              <button className="w-full text-center text-blue hover:text-blue font-medium">
                <span className="border-2 px-4 py-2 border-mdium rounded hover:bg-grey30">
                  Load More
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
