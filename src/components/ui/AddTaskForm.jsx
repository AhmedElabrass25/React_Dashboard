import React from "react";

const AddTaskForm = ({ setOpenAddTaskForm }) => {
  return (
    <>
      <div className="fixed inset-0 bg-grey50 bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-[95%] max-w-2xl p-6">
          <div className="flex items-start justify-between mb-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Add New Task
            </h2>
            <button
              onClick={() => setOpenAddTaskForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </div>

          <form className="">
            {/* Description */}
            <div>
              <textarea
                type="text"
                placeholder="Enter Task Description"
                className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50 mb-3"
              ></textarea>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Due Date</h2>
              {/* Date input */}
              <input
                type="date"
                className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50 mb-3"
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setOpenAddTaskForm(false)}>Cancel</button>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700"
              >
                Save Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
