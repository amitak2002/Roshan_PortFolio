import React  ,{useState , useEffect} from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { DotLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import Phone from '../assets/images/phone.png'
import Gmail from '../assets/images/gmail.png'
import { Typewriter } from 'react-simple-typewriter';
import ContactImg from '../assets/images/contact.jpg'


function Contact() {

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
      <header className='p-4 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-700'>
        <Link to="/" className="flex items-center">
          <IoMdArrowRoundBack className='w-6 h-6 md:w-8 md:h-8 text-white cursor-pointer hover:scale-110 transition-all duration-200 hover:text-red-400' />
        </Link>

        <h1 className='text-white text-xl md:text-2xl font-poppins font-semibold'>
          Roshan_PortFolio_
        </h1>
      </header>

      <h1 className="text-2xl md:text-6xl font-bold text-white text-center my-8 md:my-6">
        <span style={{ color: 'orange' }}>
          <Typewriter
            words={['Contact,us |']}
            loop={Infinity}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
          />
        </span>
      </h1>

      <section className='w-full flex flex-col md:flex-row justify-between items-center'>
        <div className='w-1/2 md:w-full my-2 md:my-4 p-4 '>
          <div className='w-full md:w-full flex flex-col md:flex-row justify-center items-center text-white gap-2 my-6 md:my-8'>
            <img  
              src={Phone}
              className='w-[50px] h-[50px] rounded-full my-4 md:my-6'
            />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              <span style={{ color: 'red' }}>
                <Typewriter
                  words={['+91844866XXXX']}
                  loop={Infinity}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={50}
                />
              </span>
            </h1>
          </div>

          <div className='w-full md:w-full flex flex-col md:flex-row justify-center items-center text-white gap-2 my-6 md:my-8'>
            <img  
              src={Gmail}
              className='w-[50px] h-[50px] rounded-full my-4 md:my-6'
            />
            <h1 className="text-3xl md:text-4xl font-bold text-white ">
              <span style={{ color: 'red' }}>
                  <Typewriter
                      words={['roshan@gmail.com']}
                      loop={Infinity}
                      cursor
                      cursorStyle='|'
                      typeSpeed={100}
                      deleteSpeed={50}
                  />
              </span>
          </h1>

          </div>
        </div>

        {/* {right} */}
        <div className='w-1/2 md:w-full my-2 md:my-4 flex justify-center items-center p-8'>
          <img
            src={ContactImg}
            className='md:w-[80%] md:h-[350px] rounded-full hover:scale-90 transition-all duration-700 hover:rotate-45 '
          />
        </div>
      </section>

      
    </main>


  )
}

export default Contact;