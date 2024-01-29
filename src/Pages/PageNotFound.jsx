import React from 'react'
import Jerry from '../Assets/jerryno.gif'
const PageNotFound = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center text-red-500  ">
      <h1>Page Not Found</h1>
      <p>Error 404</p>
      <div className='flex  justify-center items-center  mt-20 shadow-md'>
        <img src={Jerry} alt="" className='h-40 rounded-lg'/>
      </div>
    </div>
  );
}
export default PageNotFound;