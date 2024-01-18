import React from "react";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-2  gap-[10px]  justify-center items-center grid-tem grid-auto-rows minmax(100px, h-auto) border border-[solid] border-red-500    ">
      <div className=" bg-amber-50 h-200 h-[200px] flex justify-center items-center ">
        Create New Custmer
      </div>
      <div className=" bg-amber-50 h-200 h-[200px] flex justify-center items-center ">
        Deposit
      </div>
      <div className=" bg-amber-50 h-200 h-[200px] flex justify-center items-center ">
        Withdraw
      </div>
      <div className=" bg-amber-50 h-200 h-[200px] flex justify-center items-center ">
        Transfer
      </div>
      <div className=" bg-amber-50 h-200 h-[200px] flex justify-center items-center ">
        Balance
      </div>
    </div>
  );
};

export default Dashboard;
