/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";

import { store } from "./App";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const Finished = () => {
  const [data, setData] = useState(null);
  const [token] = useContext(store);

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

  return (
    
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div>
              <img
                width="100px"
                height="30px"
                src="/dribbble-removebg-preview.png"
                className="h-8"
                alt="Logo"
              />
            </div>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-gray-700 mt-2 hover:bg-blue-800 focus:ring-4 w-30 h-9 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Upload
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div style={{ width: "35px", height: "35px", marginLeft: "20px"}}>
              <img
                src="./3d city.jpeg"
                alt="value"
                className="h-auto max-w-20xl mt-2 rounded-full"
              />
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-1 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Inspiration
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Find Work
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Learn Design
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Go pro
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Hire Designers
                </a>
              </li>
              <button
                type="button"
                class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-5 h-5 me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.293 13.293a1 1 0 0 1-1.414 1.414l-2.5-2.5a6 6 0 1 1 1.414-1.414l2.5 2.5zM14 10a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Search
              </button>
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/external-shopping-bags-essential-mobile-apps-inipagistudio-mixed-inipagistudio.png"
                alt="external-shopping-bags-essential-mobile-apps-inipagistudio-mixed-inipagistudio"
              />
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="min-h-screen flex items-top mt-20 justify-center bg-gray-50 px-0 sm:px-6 lg:px-1">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col justify-top items-center mt-20">
            <div className="max-w-7xl w-full p-1 text-center ">
              <h1 className="text-3xl font-bold text-stone-700 mb-4">
                Please verify your email...
              </h1>
              <h6>
                <p className="text-base text-gray-700">
                  <img
                    className="mx-auto"
                    width="150"
                    height="150"
                    src="https://img.icons8.com/plasticine/100/new-post--v2.png"
                    alt="new-post--v2"
                  />
                  Please verify your email address.we've sent a confirmation
                  email to:
                </p>
              </h6>
              
              <h1 className="text-3xl font-bold text-stone-700 mb-4">
                Account@fefero.design
              </h1>
              {data && (
                <h1>{data.email}</h1>
              )}
              <h6>
                <p className="text-base text-gray-700">
                  click the confirmation link in that email to begin using
                  Dribbble
                </p>
              </h6>
              <h6>
                <p className="text-base text-gray-700">
                  Didn't receive the email? check your spam folder.{" "}
                </p>
              </h6>
              <h6>
                <p className="text-base text-gray-700">
                  you still don't see it.you can
                  <a
                    href="/"
                    className="block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    resend to verification email
                  </a>
                </p>
              </h6>
              <h6>
                <p className="text-base text-gray-700">
                  wrong email address?{" "}
                  <a
                    href="/"
                    className="block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    check it
                  </a>
                </p>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-gray-100">
        <ul className="flex flex-col justify-evenly p-1 md:p-0 mt-1 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="w-10 h-20 ">
              <img
                width="100%"
                height="100%"
                src="/dribbble-removebg-preview.png"
                className="h-8 w-full -mt-10"
                alt="Logo"
              />
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <p className="text-xs">
                  Dribbble is the world's leading community for creatives to
                  share gro, and get
                </p>
              </div>
              <div className="flex flex-row w-10 h-10 justify-evenly p-1 gap-1 mt-4">
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                  </svg>
                </span>
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 488 512"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                </span>

                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
                <span class="[&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
          <div className="flex flex-col text-pretty text-xs  mt-5 gap-3">
            <h1>For designers</h1>
            <div className="flex flex-col font-bold text-gray-400 gap-2">
              <a href="#">Go pro!</a>
              <a href="#">Explore design work</a>
              <a href="#">Design blog</a>
              <a href="#">Overtime podcast</a>
              <a href="#">playoffs</a>
              <a href="#">weekly warm-up</a>
              <a href="#">Refer a friend</a>
              <a href="#">code of conduct</a>
            </div>
          </div>

          <div className="flex flex-col text-pretty text-xs  mt-5 gap-3">
            <h1>Hire designers</h1>
            <div className="flex flex-col font-bold text-gray-400 gap-2">
              <a href="#">Post a job opening</a>
              <a href="#">Post a freelance project</a>
              <a href="#">Search for designers</a>
            </div>
            <div>
              <h1>Brands</h1>
              <a className="flex flex-col font-bold text-gray-400 gap-2" href="#">
                Advertise with us
              </a>
            </div>
          </div>

          <div className="flex flex-col text-pretty text-xs  mt-5 gap-3">
            <h1>Company</h1>
            <div className="flex flex-col font-bold text-gray-400 gap-2">
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">media</a>
              <a href="#">Testimonials</a>
              <a href="#">API</a>
              <a href="#">Terms of service</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookie policy</a>

            </div>
            
          </div>
          <div className="flex flex-col text-pretty text-xs gap-3  mt-5">
            <h1>Directories</h1>
            <div className="flex flex-col font-bold text-gray-400 gap-2">
              <a href="#">Design jobs</a>
              <a href="#">Designers for hire</a>
              <a href="#">Freelance designers for hire</a>
              <a href="#">Tags</a>
              <a href="#">places</a>
              
            </div>
            <div>
              <h1>Design assets</h1>
              <a className="flex flex-col font-bold text-gray-400 mt-2" href="#">
                Dribbble Marketplace
              </a>
              <a className="flex flex-col font-bold text-gray-400 mt-2" href="#">
                Creative Market
              </a>
              <a className="flex flex-col font-bold mt-2 text-gray-400" href="#">
                Fontspring
              </a>
              <a className="flex flex-col font-bold mt-2 text-gray-400" href="#">
                Font Squirrel
              </a>
            </div>
          </div>
          <div className="flex flex-col text-pretty text-xs gap-3 mt-5">
            <h1>Design Resources</h1>
            <div className="flex flex-col font-bold text-gray-400 gap-2">
              <a href="#">Freelancing</a>
              <a href="#">Design Hiring </a>
              <a href="#">Design portfolio</a>
              <a href="#">Design Education</a>
              <a href="#">Creative Process</a>
              <a href="#">Design Industry Trends</a>

            </div>
            
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Finished;
