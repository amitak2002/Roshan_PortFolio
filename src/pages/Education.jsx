import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { Typewriter } from 'react-simple-typewriter';
import { DotLoader } from 'react-spinners';
import Study from '../assets/images/study.png'
import Resume from '../../public/amitResume.pdf'
import { MdCloudDownload } from "react-icons/md";


function Education() {

  const [state, setState] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setState(false);
    }, 4000);
    return () => clearTimeout(timeOut);
  }, []);

  if (state) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-900">
        <DotLoader color="#ffffff" />
      </div>
    );
  }

  return (
    <main className='w-full min-h-screen bg-gray-900'>
      {/* Header */}
      <header className='p-4 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-700'>
        <Link to="/" className="flex items-center">
          <IoMdArrowRoundBack className='w-6 h-6 md:w-8 md:h-8 text-white cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-400' />
        </Link>

        <h1 className='text-white text-xl md:text-2xl font-poppins font-semibold'>
          Roshan_PortFolio_
        </h1>
      </header>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center my-4 md:my-6">
        <span style={{ color: 'red' }}>
          <Typewriter
            words={['Education']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
          />
        </span>
      </h1>

      {/* Education Section */}
      <section className='w-full flex flex-col md:flex-row justify-center items-center'>

        {/* Left Section */}
        <div className='w-full md:w-1/2 flex justify-center items-start p-4'>
          <div className=''>

            {/* Timeline Container */}
            <div className='flex flex-col'>

              {/* Timeline Item 1 */}
              <div className='flex  gap-2'>
                <div className='flex flex-col items-center'>
                  <div className='w-[15px] h-[15px] rounded-full bg-white'></div>
                  <div className='w-[1.5px] h-[100px] bg-white'></div>
                </div>
                <img src={Study}
                  className='w-[35px] h-[35px]'
                />
                <h1 className='text-white'>10th 2015-2017</h1>
              </div>

              {/* Timeline Item 2 */}
              <div className='flex  gap-2'>
                <div className='flex flex-col items-center'>
                  <div className='w-[15px] h-[15px] rounded-full bg-white'></div>
                  <div className='w-[1.5px] h-[100px] bg-white'></div>
                </div>
                <img src={Study}
                  className='w-[35px] h-[35px]'
                />
                <h1 className='text-white'>12th 2017-2019</h1>
              </div>

              {/* Timeline Item 3 */}
              <div className='flex  gap-2'>
                <div className='flex flex-col items-center'>
                  <div className='w-[15px] h-[15px] rounded-full bg-white'></div>
                  <div className='w-[1.5px] h-[100px] bg-white'></div>
                </div>
                <img src={Study}
                  className='w-[35px] h-[35px]'
                />
                <h1 className='text-white'>B.Com 2019-2022</h1>
              </div>

              <div className='flex  gap-2'>
                <div className='flex flex-col items-center'>
                  <div className='w-[15px] h-[15px] rounded-full bg-white'></div>
                </div>
                <img src={Study}
                  className='w-[35px] h-[35px]'
                />
                <h1 className='text-white'>Job</h1>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/2 p-4 text-white text-center flex justify-evenly'>
          <div className='flex gap-2'>
            <a 
              href={Resume}
              download={"AmitResume.pdf"}
              className='text-2xl'
            >DownLoad Resume</a>
            <MdCloudDownload className='text-2xl'/>
          </div>

          <div>
            <a 
              href={Resume}
              target="_blank"
              className='text-2xl'
            >
              View Resume
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}

export default Education;
