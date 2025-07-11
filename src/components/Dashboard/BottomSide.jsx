import React from "react";
import img from "../../assets/User.png";
import {
  BriefcaseBusiness,
  Dot,
  MoveRight,
  ShieldAlert,
  Users,
} from "lucide-react";

const BottomSide = () => {
  return (
    <>
      {/* <div className="pt-5 w-full flex items-start flex-wrap gap-5"> */}
      <div className="w-full md:w-[48%] xl:w-[31%]">
        {/* =============Users============== */}
        <div className="bg-white rounded-xl px-4 py-8 border border-grey30 flex items-center justify-between mb-5">
          <div>
            <h3 className="text-lg text-grey70 font-semibold mb-5">
              Customers
            </h3>
            <p className="text-4xl font-bold text-primary">78</p>
          </div>
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-t from-white to-green/30">
            <Users className="text-green" size={60} />
          </div>
        </div>
        {/* =============Deals============== */}
        <div className="bg-white rounded-xl px-4 py-8 border border-grey30 flex items-center justify-between">
          <div>
            <h3 className="text-lg text-grey70 font-semibold mb-5">Deals</h3>
            <p className="text-4xl font-bold text-primary">136</p>
          </div>
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-t from-white to-pink/30">
            <BriefcaseBusiness className="text-pink" size={60} />
          </div>
        </div>
      </div>
      {/* ================In progress============= */}
      <div className="bg-white w-full md:w-[48%] xl:w-[32%] rounded-xl p-4 shadow-sm">
        <div className="w-full flex items-center justify-between pb-4 border-b-[1px] border-grey30">
          <div className="w-full flex items-center gap-2">
            <img src={img} alt="alt........" />
            <p className="text-md font-medium flex flex-col">
              <span className="text-bold text-lg">319 Haul Road,</span>
              <span className="text-grey70">Glenrock, WY</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-fit whitespace-nowrap text-[17px] font-semibold bg-grey30 py-1 px-2 rounded-[30px] text-blue">
              In Progress
            </button>
            <MoveRight color="#514ef3" />
          </div>
        </div>
        <ul className="py-4 text-sm flex flex-col flex-wrap gap-5">
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue">
              <span className="h-2 w-2 rounded-full bg-white"></span>
            </div>
            <div>
              <p className="text-thin text-sm text-grey70">17 Nov 2021</p>
              <p className="text-primary text-lg">
                Installation of the new air conditioning system
              </p>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue">
              <span className="h-2 w-2 rounded-full bg-white"></span>
            </div>
            <div>
              <p className="text-thin text-sm text-grey70">20 Nov 2021</p>
              <p className="text-primary text-lg">
                Installation of the new air conditioning system
              </p>
            </div>
          </li>
        </ul>
        <div className="loadMore text-center py-6">
          <button className="w-fit text-lg font-semibold bg-grey30 py-2 px-4 rounded-[30px] text-blue">
            Load More
          </button>
        </div>
      </div>
      {/* =============================== */}
      <div className="bg-white w-full md:w-[48%] xl:w-[31%] rounded-xl p-4 shadow-sm">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold text-primary">Tasks To Do</h2>
          <a href="#" className="text-sm text-indigo-600">
            View All
          </a>
        </div>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-center gap-6 ">
            <span className="data text-red">30 Nov 2021</span>
            <span className="warning">
              {" "}
              <ShieldAlert className="text-red" />
            </span>
            <span className="todo text-primary text-lg">
              Meeting with partners
            </span>
          </li>
          <li className="flex items-center gap-6 ">
            <span className="data text-grey70">24 Oct 2022</span>
            <span className="todo text-primary text-lg">Lunch with Steve</span>
          </li>
          <li className="flex items-center gap-6">
            <span className="data text-grey70">24 Oct 2022</span>
            <span className="todo text-primary text-lg">Lunch with Steve</span>
          </li>
        </ul>
        <button className="mt-3 w-full text-indigo-600 border border-indigo-200 hover:bg-indigo-100 py-2 rounded-md">
          + Add new task
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default BottomSide;
