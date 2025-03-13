import React, { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { DotLoader } from 'react-spinners';
import ImageRock1 from '../assets/images/rockProfile.jpg';

function About() {
  const [state, setState] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setState(false);
    }, 2000); // ✅ Timeout duration added
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
      {/* Header Section */}
      <header className='p-4 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-700'>
        <Link to="/" className="flex items-center">
          <IoMdArrowRoundBack className='w-6 h-6 md:w-8 md:h-8 text-white cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-400' />
        </Link>

        <h1 className='text-white text-xl md:text-2xl font-poppins font-semibold'>
          Roshan_PortFolio_
        </h1>
      </header>

      {/* Content Section */}
      <section className='flex flex-col-reverse md:flex-row items-center md:items-start p-4 md:p-8 gap-8'>
        <div className='w-full md:w-1/2 text-center md:text-left my-[12%] mx-[5%] hover:scale-75 transition-all duration-700'>
          <h1 className="text-3xl md:text-6xl font-bold text-white">
            <span style={{ color: 'red' }}>
              <Typewriter
                words={['About,Us']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
              />
            </span>
          </h1>
          <p className='text-white my-4 font-bold text-lg md:text-xl'>
            I am Roshan, working as an accountant at Wave company. I am passionate about my work and always strive to deliver accurate financial records and effective solutions. In my free time, I enjoy bike riding and dancing, which help me stay active and refreshed. My goal is to maintain a balance between professional dedication and personal interests.
          </p>
        </div>

        <div className='w-1/2  md:w-1/2 md:h-[50%] flex justify-center items-center'>
          <img 
            src={ImageRock1}
            className='w-[100%] h-[40%] md:w-[50%] md:h-[40%] rounded-full object-cover hover:rotate-3 hover:scale-95 transition-all duration-500 my-[10%]'
          />
        </div>
      </section>
    </main>
  );
}

export default About;
