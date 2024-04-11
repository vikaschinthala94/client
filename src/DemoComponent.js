import React, { useContext, useEffect, useState } from "react";

import { store } from "./App";
import axios from "axios";
import { Navigate } from "react-router-dom";

const DemoComponent = () => {
  const [data, setData] = useState(null);
  const [token] = useContext(store);
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

  useEffect(() => {
    axios
      .get("http://localhost:8080/myhome", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    return <Navigate to="/loginhere" />;
  }
  return (
    <div className=" bg-gray-50 px-4 sm:px-6 lg:px-8 my-2 ">
      <div style={{ width: "150px", height: "20px" }}>
        <img
          src="./dribbble-removebg-preview.png"
          alt="value"
          className="h-auto max-w-40xl rounded-full"
        />
      </div>
      {data && (
        <div className="min-h-screen flex items-top justify-center bg-gray-50 px-4 sm:px-6 lg:px-1">
          <div className="max-w-md w-full space-y-8">
            <div className="flex flex-col justify-top items-center mt-16">
              <div className="max-w-7xl w-full p-1 text-left">
                <h1 className="text-2xl font-bold text-stone-700 mb-4">
                  Welcome! {data.username} Let's create your profile
                </h1>
                <h6>
                  <p className="text-base text-gray-700">
                    Let others get to know you better! You can do these later
                  </p>
                </h6>
              </div>
            </div>
            {/* ----------------------------------------------------------------- */}
            <div className="flex flex-row justify-top items-center mt-16">
              <div className="max-w-7xl w-full p-1 text-left">
                <h1 className="text-1xl font-bold text-stone-700 mb-4">
                  Add an avatar
                </h1>
                <div className="flex flex-column justify-top items-center  ">
                  <div style={{ width: "100px", height: "100px",backgroundColor:"gray",borderRadius:"50%" }}>
                   
                   
                    <img
                      src={file}
                      alt=""
                      className="h-auto max-w-20xl rounded-full mt-1"
                    />
                  </div>
                  <div>
                 
             
  <button
    // onClick={() => handleUpload()}
    className="mx-16 my-12 bg-white border border-gray-400 font-semibold relative outline-none flex justify-center items-center cursor-pointer h-7 w-30 opacity-100 rounded-lg"
  >
  <input  
  type="file"
  onChange={handleChange}
  className="hidden"
  id="upload"
  accept="image/*"
  aria-label="Upload Image"
/>
<label
  htmlFor="upload"
  className="relative z-10 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
>
  Upload pic
</label>
  </button>
  <h1 className="mx-16 text-base text-gray-700">
    <span></span> - or choose one of our defaults
  </h1>
</div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}
            <div className="flex flex-row justify-top items-center mt-16">
              <div className="max-w-7xl w-full p-1 text-left">
                {/* <h1 className="text-1xl font-bold text-stone-700 mb-4">Add a Location</h1> */}
                <div>
                  {/* <input type="text" className=' bg- border border-gray-600'/> */}
                  <form>
                    <label for="fname">Add a Location</label>
                  </form>
                  <input
                    type="text"
                    id="fname"
                    className="w-full px-5 py-3 my-2 border-b-2 border-gray-500"
                  ></input>
                </div>

                <div style={{ width: "120px", height: "120px" }}>
                  <a
                    href="/Demofinal"
                    className=" rounded-full bg- border bg-gray-300 font-semibold relative outline-none  flex justify-center items-center cursor-pointer h-10 w-40 opacity-100"
                  >
                    Next
                  </a>
                  <label className="text-base text-gray-700 mx-y">
                    on press return
                  </label>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoComponent;
