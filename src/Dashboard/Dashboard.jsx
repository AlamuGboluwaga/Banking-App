import React from "react";
import {useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className=" grid grid-cols-2  gap-[10px]  justify-center items-center grid-tem grid-auto-rows minmax(100px, h-auto) border border-[solid] border-red-500    ">
      <div
        className=" bg-gray-50 h-200 h-[200px] flex justify-center items-center  hover:bg-blue-400 hover:text-white "
        onClick={(e) => {
          navigate("/newcustomer");
        }}
      >
        New Custmer
      </div>
      <div
        className=" bg-gray-50 h-200 h-[200px] flex justify-center items-center hover:bg-blue-400 hover:text-white "
        onClick={(e) => {
          navigate("/deposit");
        }}
      >
        Deposit
      </div>
      <div
        className=" bg-gray-50 h-200 h-[200px] flex justify-center items-center  hover:bg-blue-400 hover:text-white "
        onClick={(e) => {
          navigate("/withdraw");
        }}
      >
        Withdraw
      </div>
      <div
        className=" bg-gray-50 h-200 h-[200px] flex justify-center items-center  hover:bg-blue-400 hover:text-white "
        onClick={(e) => {
          navigate("/transfer");
        }}
      >
        Transfer
      </div>
      <div
        className=" bg-gray-50 h-200 h-[200px] flex justify-center items-center  hover:bg-blue-400 hover:text-white "
        onClick={(e) => {
          navigate("/balance");
        }}
      >
        Balance
      </div>
    </div>
  );
};

export default Dashboard;
