import React from "react";

const EditTaskForm = ({ setOpenEditTaskForm }) => {
  return (
    <>
      <div className="fixed inset-0 bg-grey50 bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg w-[95%] max-w-2xl p-6">
          <div className="flex items-start justify-between mb-8">
            <h2 className="text-lg font-semibold text-gray-800">Edit Task</h2>
            <button
              onClick={() => setOpenEditTaskForm(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✖
            </button>
          </div>

          <form className="">
            <div className="w-full flex items-center justify-between mb-5 px-5">
              <h2 className="text-lg font-semibold text-gray-800">
                Completed ?{" "}
              </h2>
              <label className="switch">
                <input type="checkbox" className="text-green w-4 h-6" />
                <span className="slider"></span>
              </label>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Due Date</h2>
              {/* Date input */}
              <input
                type="date"
                className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50 mb-3"
              />
            </div>
            {/* Description */}
            <div>
              <textarea
                type="text"
                placeholder="Enter Task Description"
                className="w-full border border-gray-200 px-3 py-2 rounded-md bg-gray-50 mb-3"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setOpenEditTaskForm(false)}
                className="text-red/50"
              >
                Delete
              </button>
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
    </>
  );
};

export default EditTaskForm;
