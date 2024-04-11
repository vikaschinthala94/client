import React, { useState } from 'react';

const Demofinal = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const toggleImageHover = () => {
    setIsImageHovered(!isImageHovered);
  };

  return (
    <div className='bg-gray-50 px-4 sm:px-6 lg:px-8 my-2'>
      <div style={{ width: "150px", height: "20px"}}>
        <img src="./dribbble-removebg-preview.png" alt="value" className="h-auto max-w-40xl rounded-full"/>
      </div>
      <div className="min-h-screen flex items-top justify-center bg-gray-50 px-0 sm:px-6 lg:px-1">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col justify-top items-center mt-16">
            <div className="max-w-7xl w-full p-1 text-left">
              <h1 className="text-3xl font-bold text-stone-700 mb-4">
                What brings you to Dribbble?
              </h1>
              <h6>
                <p className="text-base text-gray-700">
                  Select the options that best describe you. Don't worry, you can explore other options later.
                </p>
              </h6>
            </div>
          </div>
          <div className="flex flex-row justify-top items-center mt-16">
            <div className="max-w-7xl w-full p-1 text-left">
              <div className='flex flex-row justify-top items-center justify-evenly'>
              <div className='relative min-w-[200px] max-w-[500px] min-h-[200px] max-h-[500px] bg-white bg-opacity-5 m-1 shadow-lg rounded-lg flex justify-center items-center backdrop-blur-10 hover:border-pink-500 border-transparent' onMouseEnter={toggleImageHover} onMouseLeave={toggleImageHover}>
      <img className={`max-w-xs transition duration-400 ease-in-out ${isImageHovered ? '-translate-y-20' : ''} mx-10`} width="100" height="100" src="https://img.icons8.com/bubbles/50/office.png" alt="office"/>
      {isImageHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <span className="text-black text-sm px-2 text-center mt-11">I'm designer look to share my work</span>
          <input type="radio" name="options" value="option1" className="mr-2 mt-7"/>

        </div>
      )}
    </div>
     <div className='relative min-w-[200px] max-w-[500px] min-h-[200px] max-h-[500px] bg-white bg-opacity-5 m-1 shadow-lg rounded-lg flex justify-center items-center backdrop-blur-10 hover:border-pink-500 border-transparent' onMouseEnter={toggleImageHover} onMouseLeave={toggleImageHover}>
      <img className={`max-w-xs transition duration-400 ease-in-out ${isImageHovered ? '-translate-y-20' : ''} mx-10`} width="100" height="100"  src="https://img.icons8.com/clouds/100/office.png" alt="office"/>
      {isImageHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
<span className="text-black text-sm px-2 text-center mt-11">I'm looking to hire a designer</span>
<input type="radio" name="options" value="option1" className="mr-2 mt-7"/>

        </div>
        
      )}
    </div>
    <div className='relative min-w-[200px] max-w-[500px] min-h-[200px] max-h-[500px] bg-white bg-opacity-5 m-1 shadow-lg rounded-lg flex justify-center items-center backdrop-blur-10 hover:border-pink-500 border-transparent' onMouseEnter={toggleImageHover} onMouseLeave={toggleImageHover}>
  <img className={`max-w-xs transition duration-400 ease-in-out ${isImageHovered ? '-translate-y-20' : ''} mx-10 flex-column`} width="100" height="100" src="https://img.icons8.com/clouds/100/home-office.png" alt="office"/>
  {isImageHovered && (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
      <span className="text-black text-sm px-2 text-center mt-11">I'm looking for design inspiration</span>
      <input type="radio" name="options" value="option1" className="mr-2 mt-7"/>
    </div>
  )}
</div>
 </div>
            </div>
          </div>
          <div className="flex flex-row justify-top items-center mt-16">
            <div className="max-w-7xl w-full p-1 text-left">
              
              <div style={{ width: "120px", height: "120px"}}>
                <a href="/Finished" className="rounded-full bg- border bg-gray-300 font-semibold relative outline-none  flex justify-center items-center cursor-pointer h-10 w-40 opacity-100">Next</a>
                <label className='text-base text-grey-700 mx-y'>on press return</label>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demofinal;
