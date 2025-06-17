// // import React from 'react'
// // import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useSearchParams } from "react-router-dom";
// // import { addToPastes, UpdateToPastes } from "../redux/PasteSlice";
// // import toast  from 'react-hot-toast';
// const ViewPaste = () => {

// const {id}=useParams();

// const allPastes = useSelector((state)=> state.paste.pastes);


// const paste = allPastes.filter((p)=> p._id === id [0]);

// console.log("final paste", paste);

//   return (
//     <div>
//       ViewPaste
//       <div>
//       <div className="flex flex-row gap-7 place-content-between">
//         <input
//           className="p-2 rounded-xl mt-2 w-[100%] pl-4"
//           type="text"
//           placeholder="ENTER TITLE HERE"
//           value={paste.title}
//           disabled
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         {/* <button
//           onClick={createPaste}
//           className=" p-2 rounded-2xl flex flex-row gap-7"
//         >
//           {pasteId ? "update my paste" : "create my paste"}
//         </button> */}
//       </div>
//       <div className="mt-">
//         <textarea
//           className="rounded-2xl  mt-8 min-w-[500px] p-4"
//           value={paste.content}
//           placeholder="enter your text here "
//           disabled
//           onChange={(e) => setValue(e.target.value)}
//           rows={20}
          
//         />
//       </div>
//     </div>
  
//     </div>
//   )
// }

// export default ViewPaste
 


import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id); // ✅ Corrected

  console.log("final paste", paste);

  return (
    <div>
      <h2 className="text-2xl font-bold  mb-6 text-center">ViewPaste</h2>

      {paste ? (
        <div>
          <div className="flex flex-col gap-6">
            <input
              className="block text-sm mb-2"
              type="text"
              placeholder="ENTER TITLE HERE"
              value={paste.title} 
              disabled
            />
            <br />
          </div>
          
          <div>
            <textarea
              className="w-[90vw] max-w-[1000px] p-4 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 resize-none cursor-not-allowed"
              value={paste.content}
              placeholder="enter your text here "
              disabled
              rows={20}
            />
          </div>
        </div>
      ) : (
        <p className="w-full  p-4 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 cursor-not-allowed">Paste not found </p>
      )}
    </div>
  );
  
};
export default ViewPaste
