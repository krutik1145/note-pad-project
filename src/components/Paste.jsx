// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RemoveFromPastes } from "../redux/PasteSlice";
// import toast from "react-hot-toast";

// const Paste = () => {
//   const pastes = useSelector((state) => state.paste.pastes);
//   const [searchTerm, setSearchTerm] = useState("");
//   console.log("Pastes array:", pastes);
//   const dispatch = useDispatch();

//   const filteredData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   function handleDelete(pasteId) {
//     dispatch(RemoveFromPastes(pasteId));
//   }
//   return (
//     <div>
//       <div>
//         <input
//           className="p-2 rounded-2xl min-w-[600px] mt-6"
//           type="text"
//           placeholder="search here"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="flex flex-col gap-5 mt-5">
//         {filteredData.length > 0 &&
//           filteredData.map((paste) => {
//             return (
//               <div className="border">
//                 <div>{paste.title}</div>

//                 <div>
//                   {/* {paste.content} */}
//    {paste.content.length > 100 ? paste.content.slice(0, 100) + "..." : paste.content}

//                 </div>

//                 <div
//                   className="flex flex-row gap-4
//                              place-content-evenly"
//                 >
//                   <button>
//                   <a href={`/?pasteId=${paste?._id}`}
//                    className="text-xs px-3 py-1"
//                    >edit</a>

//                     </button>

//                   <button>
//                      <a href={`/pastes/${paste?._id}`}
//                      className="text-xs px-3 py-1">
//                      view
//                      </a>
//                    </button>

//                   <button onClick={() => handleDelete(paste?._id)}
//                      className="text-xs px-3 py-1">
//                     delete
//                   </button>

//                   <button
//                     onClick={() => {
//                       navigator.clipboard.writeText(paste?.content);
//                       toast.success("copied to clipboard");
//                     }}
//                      className="text-xs px-3 py-1">
                  
//                     copy
//                   </button>

//                   <button 
//                    onClick={() => {
//                   const shareLink = `${window.location.origin}/pastes/${paste?._id}`;
//                   navigator.clipboard.writeText(shareLink);
//                   toast.success("Share link copied!");
//   }}
//    className="text-xs px-3 py-1">
                    
//                   share</button>
//                 </div>
//                 <div>{paste.createdAt}</div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default Paste;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(RemoveFromPastes(pasteId));
  }
 

  return (
    <div className="p-4">
      <div>
        <input
          className="p-2 rounded-2xl min-w-[600px] mt-6 border border-gray-300"
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div className="border border-gray-300 p-4 rounded-lg shadow-sm">
              <div className="text-lg font-semibold mb-1">{paste.title}</div>

              <div className="text-sm text-gray-600 mb-3">
                {paste.content.length > 100
                  ? paste.content.slice(0, 100) + "..."
                  : paste.content}
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                <a
                  href={`/?pasteId=${paste?._id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
                >
                  Edit
                </a>
                <a
                  href={`/pastes/${paste?._id}`}
                  className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded"
                >
                  View
                </a>
                <button
                  onClick={() => handleDelete(paste?._id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Copied to clipboard");
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
                >
                  Copy
                </button>
                <button
                  onClick={() => {
                    const shareLink = `${window.location.origin}/pastes/${paste?._id}`;
                    navigator.clipboard.writeText(shareLink);
                    toast.success("Share link copied!");
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white text-xs px-3 py-1 rounded"
                >
                  Share
                </button>
              </div>

              <div className="text-xs text-gray-500">{paste.createdAt}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;
