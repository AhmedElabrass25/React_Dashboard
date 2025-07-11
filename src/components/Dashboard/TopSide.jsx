import React from "react";
import img from "../../assets/User.png";
import { BriefcaseBusiness, Dot, PenLine, Users } from "lucide-react";
import { Link } from "react-router-dom";
import BottomSide from "./BottomSide";

const TopSide = () => {
  return (
    <>
      <div className="w-full flex items-start justify-between flex-wrap gap-6">
        <div className="w-full md:w-[48%] xl:w-[30%]  rounded-xl px-4 py-6 shadow-sm bg-blue text-white">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-lg font-semibold">Next Appointment</h2>
            <Dot size={60} />
          </div>
          <div className="w-full flex items-center gap-5">
            <img src={img} alt="alt........" />
            <p className="text-md font-medium flex flex-col">
              <span>319 Haul Road,</span>
              <span>Glenrock, WY</span>
            </p>
          </div>
          <div className="mt-4 text-sm ">
            <p>
              <strong className="font-thin text-grey30 text-lg tracking-[0.5px]">
                Appointment Date :
              </strong>{" "}
              <span className="text-lg font-medium">Nov 18, 17:00</span>
            </p>
            <p>
              <strong className="font-thin text-grey30 text-lg tracking-[0.5px]">
                Room Area :
              </strong>{" "}
              <span className="text-lg font-medium"> 100 m²</span>
            </p>
            <p>
              <strong className="font-thin text-grey30 text-lg tracking-[0.5px]">
                People :
              </strong>{" "}
              <span className="text-lg font-medium">10</span>
            </p>
            <p>
              <strong className="font-thin text-grey30 text-lg tracking-[0.5px]">
                Price :
              </strong>{" "}
              <span className="text-lg font-medium">$5750</span>
            </p>
          </div>
          <button className="mt-4 w-full bg-white font-bold text-blue py-2 rounded-full hover:bg-grey30 transition">
            See Detail
          </button>
        </div>
        {/* =================Recent Deals=========== */}
        <div className="w-full md:w-[48%] xl:w-[30%] bg-white rounded-xl p-5 shadow-sm">
          <div className="flex justify-between mb-5 py-2">
            <h2 className="text-xl font-bold text-primary">Recent Deals</h2>
            <a href="#" className="text-[16px] text-indigo-600 font-medium">
              View All
            </a>
          </div>
          <ul className="flex flex-col gap-5 text-sm">
            <li className="flex justify-between">
              <div className="w-full flex items-center gap-2">
                <img src={img} alt="alt........" />
                <p className="text-md font-medium flex flex-col">
                  <span className="text-bold text-lg">319 Haul Road,</span>
                  <span className="text-grey70">Glenrock, WY</span>
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">$5750</p>
                <p className="text-grey70 whitespace-nowrap">
                  Nov 14,07 : 00 AM
                </p>
              </div>
            </li>
            <li className="flex justify-between">
              <div className="w-full flex items-center gap-2">
                <img src={img} alt="alt........" />
                <p className="text-md font-medium flex flex-col">
                  <span className="text-bold text-lg">319 Haul Road,</span>
                  <span className="text-grey70">Glenrock, WY</span>
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">$5750</p>
                <p className="text-grey70 whitespace-nowrap">
                  Nov 14,07 : 00 AM
                </p>
              </div>
            </li>
            <li className="flex justify-between">
              <div className="w-full flex items-center gap-2">
                <img src={img} alt="alt........" />
                <p className="text-md font-medium flex flex-col">
                  <span className="text-bold text-lg">319 Haul Road,</span>
                  <span className="text-grey70">Glenrock, WY</span>
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">$5750</p>
                <p className="text-grey70 whitespace-nowrap">
                  Nov 14,07 : 00 AM
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* =================Customers=========== */}
        <div className="w-full bg-white md:w-[48%] xl:w-[30%] rounded-xl p-5 shadow-sm">
          <div className="flex justify-between flex-wrap mb-5">
            <h2 className="text-xl font-bold text-primary">Customers</h2>
            <Link to="/" className="text-lg text-indigo-600">
              View All
            </Link>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between mb-5">
              <div className="w-full flex items-center gap-2">
                <img src={img} alt="alt........" />
                <p className="text-md font-medium flex flex-col">
                  <span className="text-bold text-lg">Ahmed Mo</span>
                  <span className="text-grey70">Frontend</span>
                </p>
              </div>
              <PenLine />
            </li>
            <li className="flex justify-between mb-5">
              <div className="w-full flex items-center gap-2">
                <img src={img} alt="alt........" />
                <p className="text-md font-medium flex flex-col">
                  <span className="text-bold text-lg">Ahmed Mo</span>
                  <span className="text-grey70">Frontend</span>
                </p>
              </div>
              <PenLine />
            </li>
            <li className="flex justify-between mb-5">
              <div className="w-full flex items-center gap-2">
                <img src={img} alt="alt........" />
                <p className="text-md font-medium flex flex-col">
                  <span className="text-bold text-lg">Ahmed Mo</span>
                  <span className="text-grey70">Frontend</span>
                </p>
              </div>
              <PenLine />
            </li>
            <li className="flex justify-between mb-5">
              <div className="w-full flex items-center gap-2">
                <img src={img} alt="alt........" />
                <p className="text-md font-medium flex flex-col">
                  <span className="text-bold text-lg">Ahmed Mo</span>
                  <span className="text-grey70">Frontend</span>
                </p>
              </div>
              <PenLine />
            </li>
          </ul>
        </div>
        {/* =================BottomSide=========== */}
        <BottomSide />
      </div>
    </>
  );
};

export default TopSide;
