import React, { useState, useRef, useEffect } from "react";
import dataBase from "../Database/Database";
import Input from "../Components/Input";
import Button from "../Components/Button";

// const Sample = () => {
//   const [user, setUser] = useState({
//     id: "1",
//   });
//   const handleSubmit = (e) => {
//     e.preventdefult();
//   };
//   console.log(user);
//   return (
//     <div className="flex flex-col justify-center items-center mt-10 gap-10">
//       <h1>Sample</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col justify-center items-center  gap-10"
//       >
//         <Input onChange={(e) => setUser()} />
//         <Button />
//       </form>

//       <div className="border h-82 w-80 flex flex-col p-4">
//         {dataBase.map((items) => (
//           <ul key={items.id} className="flex flex-col gap-6 mt-4">
//             <li>First Name : {items.name}</li>
//             <li>Middle Name : {items.middleName}</li>
//             <li>Last Name : {items.surName}</li>
//             <li>Age : {items.age}</li>
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sample;



function Sample() {
  // Creating a ref
  const [data,setData]=useState('')
  const myRef = useRef(null);

    // Accessing the current property of the ref to get the DOM element
   
 
  return (
    <div>
      {/* Assigning the ref to an input element */}
      <input
        ref={myRef}
        type="text"
        onChange={(e) => setData(e.target.value)}
      />
      {myRef.current.focus()}
    </div>
  );
}export default Sample;