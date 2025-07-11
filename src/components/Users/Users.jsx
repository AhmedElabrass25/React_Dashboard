import React, { useState } from "react";
import Select from "react-select";
import { CircleUser } from "lucide-react";
import { Pencil } from "lucide-react";

const Users = () => {
  const customers = [
    {
      id: 1,
      name: "Deanna Annis",
      email: "deannannis@gmail.com",
      phone: "999-999-9999",
      address: "475 Spruce Drive, Pittsburgh, PA 23122",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "George Gamble",
      email: "goeorgegamble@gmail.com",
      phone: "999-999-9999",
      address: "2213 Thorn Street, Glenrock, WY 12345",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 3,
      name: "Andrea Willis",
      email: "andreawillis@gmail.com",
      phone: "999-999-9999",
      address: "1952 Chicago Avenue, Fresno, PA 93230",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "Andrea Willis",
      email: "andreawillis@gmail.com",
      phone: "999-999-9999",
      address: "1952 Chicago Avenue, Fresno, PA 93230",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "Andrea Willis",
      email: "andreawillis@gmail.com",
      phone: "999-999-9999",
      address: "1952 Chicago Avenue, Fresno, PA 93230",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 6,
      name: "Andrea Willis",
      email: "andreawillis@gmail.com",
      phone: "999-999-9999",
      address: "1952 Chicago Avenue, Fresno, PA 93230",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
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
    <>
      <div className="pt-6">
        <div className="container">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="head w-full flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Total: 78 customers
              </h1>

              <Select
                options={options}
                className="w-64" // Tailwind class مثلاً
                onChange={(e) => console.log(e)}
                classNames={{ option: () => "hover:!text-gray-800" }}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full mb-10">
                <thead>
                  <tr className="text-left text-sm text-grey70 border-b-2">
                    <th scope="col" className="py-2 px-4">
                      {" "}
                      <CircleUser />
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Name
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Email
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Phone
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Address
                    </th>
                    <th scope="col" className="py-2 px-4">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.slice(0, visibleDeals).map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition border-b"
                    >
                      <td className="py-6 px-4">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </td>
                      <td className="py-4 px-4  whitespace-nowrap font-medium text-primary">
                        {user.name}
                      </td>
                      <td className="py-4 px-4  whitespace-nowrap text-sm text-primary">
                        {user.email}
                      </td>
                      <td className="py-4 px-4  whitespace-nowrap text-sm text-primary">
                        {user.phone}
                      </td>
                      <td className="py-4 px-4  whitespace-nowrap text-sm text-primary">
                        {user.address}
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap ">
                        <button className="text-primary hover:text-blue-500">
                          <Pencil size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Load More */}
            {visibleDeals < customers.length && (
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
    </>
  );
};

export default Users;
