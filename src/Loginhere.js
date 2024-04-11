import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from './App';
import {Navigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Loginhere = () => {
    const [token, setToken] = useContext(store);
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8080/login',data).then(
            res => setToken(res.data.token)
        )
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    if(token){
        return <Navigate to='/democomponent' />
     }
  return (
    <div style={{display:'flex',flexWrap:"wrap",justifyContent:""}} className=" justify-center bg-gray-50 py-0 px-4 sm:px-1 lg:px-10">

        <div style={{width:"100%",height:"50px"}}> 
        <img className="h-50 w-100  " src="./loginbg2.avif" alt="Logo" />

        </div>

        
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 sm:px-6 lg:px-50 ">
        <div className="max-w-md w-full space-y-8">
            <div>
            <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <img className="h-20 w-30" src="./dribbble-removebg-preview.png" alt="Logo" />
                    </div>

                </div>
                
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Login your account!
                </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={submitHandler} autocomplete="off">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={changeHandler} />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                </div>

                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Sign in
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-center">
                <h6>Don't have an Account ?  <Link to="/Register" className="font-medium text-indigo-600 hover:text-indigo-500">
                    register
                </Link></h6>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Loginhere