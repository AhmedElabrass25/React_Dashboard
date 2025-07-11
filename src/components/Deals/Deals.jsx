import React, { useState } from "react";
import user from "../../assets/User.png";
import Select from "react-select";
const Deals = () => {
  const deals = [
    {
      id: 1,
      name: "475 Spruce Drive, Pittsburgh, PA 23592",
      area: "100M²",
      appointmentDate: "Nov 14, 2021 07:00 AM",
      price: "$6000",
      status: "IN PROGRESS",
      image: user,
    },
    {
      id: 2,
      name: "1952 Chicago Avenue, Fresno, CA 93711",
      area: "100M²",
      appointmentDate: "Nov 15, 2021 08:00 AM",
      price: "$6000",
      status: "CLOSED",
    },
    {
      id: 3,
      name: "4409 Haul Road, Saint Paul, MN 55102",
      area: "100M²",
      appointmentDate: "Nov 16, 2021 09:00 AM",
      price: "$6000",
      status: "IN PROGRESS",
    },
    {
      id: 4,
      name: "579 Godfrey Street, Monitor, OR 97071",
      area: "100M²",
      appointmentDate: "Nov 17, 2021 10:00 AM",
      price: "$6000",
      status: "CLOSED",
    },
    {
      id: 5,
      name: "2705 Cantebury Drive, New York, NY 10011",
      area: "100M²",
      appointmentDate: "Nov 20, 2021 07:00 AM",
      price: "$6000",
      status: "IN PROGRESS",
    },
    {
      id: 6,
      name: "2705 Cantebury Drive, New York, NY 10011",
      area: "100M²",
      appointmentDate: "Nov 20, 2021 07:00 AM",
      price: "$6000",
      status: "IN PROGRESS",
    },
  ];
  const headers = [
    "Name",
    "Area",
    "Appointment Date",
    "Price",
    "Status",
    "Edit",
  ];
  const options = [
    { value: "data", label: "Sorted by : date" },
    { value: "email", label: "Sorted by : email" },
    { value: "price", label: "Sorted by : price" },
    { value: "area", label: "Sorted by : area" },
  ];
  const [visibleDeals, setVisibleDeals] = useState(5);

  const loadMore = () => {
    setVisibleDeals((prev) => prev + 5);
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="head w-full flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Total: 136 deals
          </h1>

          <Select
            options={options}
            className="w-64" // Tailwind class مثلاً
            onChange={(e) => console.log(e)}
            classNames={{ option: () => "hover:!text-gray-800" }}
          />
        </div>

        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  {headers.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="text-[16px] font-semibold text-grey70 px-6 py-4 text-left"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {deals.slice(0, visibleDeals).map((deal) => (
                  <tr key={deal.id} className="hover:bg-grey30/50">
                    <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
                      <img
                        src={deal.image}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      <span> {deal.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[17px] text-primary">
                      {deal.area}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[17px] text-primary">
                      {deal.appointmentDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[17px] text-primary">
                      {deal.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          deal.status === "CLOSED"
                            ? "bg-green-100 px-3 py-1 bg-green/10 text-green"
                            : "bg-blue-100 px-3 py-1 bg-blue/10 text-blue"
                        }`}
                      >
                        {deal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-green-500 hover:text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {visibleDeals < deals.length && (
            <div className="px-6 py-3 text-right w-full flex justify-center">
              <button
                onClick={loadMore}
                className="w-fit inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deals;
