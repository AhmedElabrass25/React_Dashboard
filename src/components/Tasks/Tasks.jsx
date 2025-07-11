// App.jsx
import React, { useState } from "react";
import { Pencil } from "lucide-react";
import Select from "react-select";

const tasks = [
  {
    id: 1,
    date: "14 Nov 2021",
    desc: "Description goes here",
    status: "overdue",
  },
  {
    id: 2,
    date: "24 Dec 2021",
    desc: "Web conference agenda (overdue)",
    status: "overdue",
  },
  {
    id: 3,
    date: "24 Nov 2022",
    desc: "Meeting with partners",
    status: "completed",
  },
  {
    id: 4,
    date: "24 Nov 2022",
    desc: "Add new services",
    status: "normal",
  },
  {
    id: 5,
    date: "24 Nov 2022",
    desc: "Upload new legals (terms & conditions)",
    status: "completed",
  },
  {
    id: 6,
    date: "24 Nov 2022",
    desc: "Sales report due",
    status: "normal",
  },
  {
    id: 7,
    date: "24 Nov 2022",
    desc: "Description goes here",
    status: "normal",
  },
];
const options = [
  { value: "data", label: "Sorted by : date" },
  { value: "email", label: "Sorted by : email" },
  { value: "price", label: "Sorted by : price" },
  { value: "area", label: "Sorted by : area" },
];

function Tasks() {
  const [visibleDeals, setVisibleDeals] = useState(5);
  const [checkedTasks, setCheckedTasks] = useState([]);

  const handleCheckboxChange = (id) => {
    setCheckedTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  };
  const toggleAll = (e) => {
    if (e.target.checked) {
      const allIds = tasks.slice(0, visibleDeals).map((t) => t.id);
      setCheckedTasks(allIds);
    } else {
      setCheckedTasks([]);
    }
  };
  const loadMore = () => {
    setVisibleDeals((prev) => prev + 5);
  };

  return (
    <div className="p-6">
      <div className="mx-auto overflow-hidden">
        <div className="head w-full flex items-center justify-between mb-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Total: {tasks.length} deals
          </h1>

          <Select
            options={options}
            className="w-64" // Tailwind class مثلاً
            onChange={(e) => console.log(e)}
            classNames={{ option: () => "hover:!text-gray-800" }}
          />
        </div>

        <table className="w-full table-auto text-sm text-left border-t border-gray-200 mb-10">
          <thead className="text-primary uppercase">
            <tr className="border-b-[1px] border-grey30">
              <th className="px-6 py-3 w-1/4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded"
                  checked={tasks
                    .slice(0, visibleDeals)
                    .every((t) => checkedTasks.includes(t.id))}
                  onChange={toggleAll}
                />
              </th>
              <th className="px-6 py-3 w-1/4">Due Date</th>
              <th className="px-6 py-3 w-3/4">Task</th>
              <th className="px-6 py-3 text-right">Edit</th>
            </tr>
          </thead>
          <tbody>
            {tasks.slice(0, visibleDeals).map(({ id, date, desc, status }) => (
              <tr
                key={id}
                className="border-b border-gray-100 hover:bg-grey30/10 text-[17px]"
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={checkedTasks.includes(id)}
                    onChange={() => handleCheckboxChange(id)}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                </td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <span>{date}</span>
                </td>
                <td className="px-6 py-4 text-gray-800">{desc}</td>
                <td className="px-6 py-4 text-right">
                  <Pencil className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {visibleDeals < tasks.length && (
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
  );
}
export default Tasks;
