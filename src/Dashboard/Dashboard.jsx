import React from "react";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-2  gap-[10px]  justify-center items-center grid-tem grid-auto-rows minmax(100px, h-auto) border border-[solid] border-red-500   ">
      <div>
        <input type="button" value="Transfer" />
      </div>
      <div>
        <input type="button" value="Withdrawer" />
      </div>
      <div>
        <input type="button" value="Balance" />
      </div>
      <div>
        <input type="button" value="Deposit" />
      </div>
    </div>
  );
};

export default Dashboard;
