import React, { useState } from "react";
import ProfileImage from '../Assets/Gboluwaga.jpg'

const NewCustomer = () => {
  const [user,setUser]=useState({
    firstName:"",
    middleName:"",
    lastName:"",
    password:"",


  })
  const handleSubmit=(e)=>{
 
  }
  

  return (
    <div className="flex flex-col justify-center items-center p-4  ">
      <h1 className="mt-4"> Create New Customer</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-6 mt-10"
      >
        <div className="border h-20 w-20 rounded-[100%] shadow-md">
          <img
            src={ProfileImage}
            alt="profile avatar"
            className="h-full w-full rounded-[100%]"
          />
        </div>
        <input
          type="text"
          placeholder="First Name"
          className=" outline-none  rounded border focus:border-green-300"
          required
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Middle Name"
          className=" outline-none  rounded border focus:border-green-300"
          required
          onChange={(e) => setUser({ ...user, middleName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          className=" outline-none  rounded border focus:border-green-300"
          required
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          className=" outline-none  rounded border focus:border-green-300"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className=" outline-none  rounded border focus:border-green-300"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className=" outline-none  rounded border focus:border-green-300"
          required
        />
        <input
          type="submit"
          value="Create"
          className="bg-green-500 rounded p-1 text-white active:bg-green-400 w-44 "
        />
      </form>
    </div>
  );
};

export default NewCustomer;
