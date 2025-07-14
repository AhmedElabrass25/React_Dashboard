// App.jsx
import React, { useState } from "react";
import { Pencil } from "lucide-react";
import Select from "react-select";
import EditTaskForm from "../ui/EditTaskForm";

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
  const [openEditTaskForm, setOpenEditTaskForm] = useState(false);

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
    <>
      <div className="pt-6">
        <div className="container">
          {/* =============Tasks Header============== */}
          <div className="head w-full flex items-center justify-between mb-5">
            <h1 className="text-lg md:text-2xl font-bold text-gray-800">
              Total: {tasks.length} deals
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
              <table className="min-w-full mb-10">
                {/* Table head */}
                <thead className="text-primary uppercase">
                  <tr className="border-b-[1px] border-grey30 py-6">
                    <th scope="col" className="px-6 py-3 text-start">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded"
                        checked={tasks
                          .slice(0, visibleDeals)
                          .every((t) => checkedTasks.includes(t.id))}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      Due Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-start ">
                      Task
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      Edit
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody>
                  {tasks.slice(0, visibleDeals).map(({ id, date, desc }) => (
                    <tr
                      key={id}
                      className="border-b border-gray-100 hover:bg-grey30/10 text-[17px]"
                    >
                      <td className="px-6 py-6 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={checkedTasks.includes(id)}
                          onChange={() => handleCheckboxChange(id)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap flex items-center gap-2">
                        <span>{date}</span>
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap text-gray-800">
                        {desc}
                      </td>
                      <td className="px-6 py-6 whitespace-nowrap text-right">
                        <Pencil
                          onClick={() => setOpenEditTaskForm(true)}
                          className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Load More */}
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
      </div>
      {/* Edit Task */}
      {openEditTaskForm && (
        <EditTaskForm setOpenEditTaskForm={setOpenEditTaskForm} />
      )}
    </>
  );
}
export default Tasks;
