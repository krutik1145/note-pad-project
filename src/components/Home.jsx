// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
// import { addToPastes, UpdateToPastes } from "../redux/PasteSlice";
// import toast  from 'react-hot-toast';


// const Home = () => {
//   const [title, setTitle] = useState("");
//   const [value, setValue] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const pasteId = searchParams.get("pasteId");
//   const dispatch = useDispatch();
//   const allPastes = useSelector((state) => state.paste.pastes);
  
//   useEffect(() => {
//     console.log("PasteId from URL:", pasteId);
//     console.log("All Pastes:", allPastes);
    
//     if (pasteId) {
//       const paste = allPastes.find((p) => p._id === pasteId);
//       console.log("Found Paste:", paste);
      
//       if (paste) {
//         setTitle(paste.title);
//         setValue(paste.content);
//       } else {
//         // Fallback in case paste is not found
//         setTitle("");
//         setValue("");
//       }
//     }
//   }, [pasteId, allPastes]);
  

//   function createPaste() {
//     const paste = {
//       title: title,
//       content: value,
//       _id: pasteId || Date.now().toString(36),
//       createdAt: new Date().toISOString(),
//     };

//     if (pasteId) {
//       //update
//       dispatch(UpdateToPastes(paste));
//       toast.success("updated successfully")
//     } else {
//       //create
//       dispatch(addToPastes(paste));
//       toast.success("created successfullu")
//     }

    
    

//     //after creation or updations
//     setTitle("");
//     setSearchParams("");
//     setValue("");
//   }
  
  
  

//   return (
//     <div>
//       <div className="flex flex-col md:flex-row gap-4 space-between items-center">
//         <input
//           className="w-full md:w-[70%] p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"

//           type="text"
//           placeholder="ENTER TITLE HERE"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <button
//           onClick={createPaste}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-sm transition duration-200"
//         >
//           {pasteId ? "update my paste" : "create my paste"}
//         </button>
//       </div>
//       <div className="mt-6">
//         <textarea
//           className="w-[90vw] max-w-[1000px] p-4 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 resize-none focus:ring-2 focus:ring-purple-400 "
//           value={value}
//           placeholder="enter your text here "
//           onChange={(e) => setValue(e.target.value)}
//           rows={20}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, UpdateToPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      } else {
        setTitle("");
        setValue("");
      }
    }
  }, [pasteId, allPastes]);

  // const createPaste = () => {
  //   const paste = {
  //     title,
  //     content: value,
  //     _id: pasteId || Date.now().toString(36),
  //     createdAt: new Date().toISOString(),
  //   };

  //   if (pasteId) {
  //     dispatch(UpdateToPastes(paste));
  //     toast.success("Updated successfully!");
  //   } else {
  //     dispatch(addToPastes(paste));
  //     toast.success("Created successfully!");
  //   }

  //   setTitle("");
  //   setSearchParams("");
  //   setValue("");
  // };
  function createPaste() {
  if (!title.trim() || !value.trim()) {
    toast.error("Title and content cannot be empty!");
    return;
  }

  const paste = {
    title: title.trim(),
    content: value.trim(),
    _id: pasteId || Date.now().toString(36),
    createdAt: new Date().toISOString(),
  };

  if (pasteId) {
    dispatch(UpdateToPastes(paste));
    toast.success("Updated successfully!");
  } else {
    dispatch(addToPastes(paste));
    toast.success("Created successfully!");
  }

  setTitle("");
  setValue("");
  setSearchParams("");
}

  

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mt-10 flex flex-col items-center">
      {/* Input + Button */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          className="w-full md:w-[70%] p-3 rounded-xl border border-gray-500 bg-[#1e1e1e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="ENTER TITLE HERE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      {/* Textarea */}
      <div className="w-full flex justify-center mt-8">
        <textarea
          className="w-full max-w-5xl h-[500px] p-4 rounded-lg border border-gray-600 bg-[#1e1e1e] text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-blue-500"
          value={value}
          placeholder="Enter your text here..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home
