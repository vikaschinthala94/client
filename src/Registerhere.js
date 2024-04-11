import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Registerhere = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const changeHandler = (e) => {
    setData({...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Check if all inputs are not empty
    if (Object.values(data).every((input) => input!== "")) {
      try {
        const res = await axios.post("http://localhost:8080/register", data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please fill in all the fields");
    }
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate('/loginhere');
    
  };

  return (
    <div style={{display:'flex',flexWrap:"wrap",gap:"20px"}}>

        <div style={{width:"600px",height:"20px"}}> 
        <img className="h-50 w-100  " src="./loginwatchbg.avif" alt="Logo" />

        </div>
        <div className="max-w-md w-full space-y-8 py-10">
            <div>
            <img className="h-20 w-30" src="./dribbble-removebg-preview.png" alt="Logo" />                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    sign up to Dribble
                </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={submitHandler} autocomplete="off">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="username" className="sr-only">
                        Username
                        </label>
                        
                        <input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={changeHandler} />
                                      <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="confirmpassword" className="sr-only">
                            Confirm Password
                        </label>
                        <input id="confirmpassword" name="confirmpassword" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" onChange={changeHandler} />
                    </div>

                </div>
                </div>
               <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Register
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-center">
                <h6>Already have an Account?  
                  <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Login
                  </Link>
                </h6>
            </div>
        </div>
      </div>
    
  );
};

export default Registerhere;