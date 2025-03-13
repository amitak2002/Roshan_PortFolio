import React ,{useState , useEffect }from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ImageRock from '../assets/images/rock1.jpg'
import { DotLoader } from 'react-spinners';

function Index() {

  const [state , setState] = useState(true)

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
    <main className='flex flex-col md:flex-row justify-center items-center bg-gray-900 gap-4 p-4'>
      <div className='w-full md:w-[60%] p-10 md:p-20 rounded-full hover:scale-75 transition-transform duration-[500ms]'>
        <div className='my-2 font-poppins'>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hello , My Name is_
            <span style={{ color: 'red' }}>
              <Typewriter
                words={['Roshan Yadav']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
              />
            </span>
          </h1>
        </div>

        <div className='font-poppins text-base md:text-xl my-4 leading-[1.8] text-white'>
          <p className='leading-[1.99]'>
            Hello! I'm <span className='text-red-700 text-lg md:text-2xl'>Roshan Yadav</span>, 
            a dedicated Accountant with a background in B.Com and professional experience at Wave Company. 
            I specialize in Tally and have a strong passion for accounting and financial management. 
            My expertise lies in maintaining accurate records, managing financial data, and ensuring smooth business operations. 
            I am committed to delivering precise results with attention to detail.
          </p>
        </div>
      </div>

      <div className='w-1/2 h-1/2 md:w-1/2 flex justify-center'>
      <img
        src={ImageRock}
        alt="Profile Image"
        className="w-[300px] h-[200px] md:w-[400px] md:h-[400px] rounded-full hover:scale-110 transition-all duration-200 hover:-rotate-90"
      />

      </div>
    </main>
  );
}

export default Index;
