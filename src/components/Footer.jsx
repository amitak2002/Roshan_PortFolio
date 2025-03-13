import React from 'react';

function Footer() {
  return (
    <footer className='w-full bg-gray-800 flex flex-col md:flex-row justify-between items-center p-8'>
      <div className='text-gray-600 mx-8'>
        <h1 className='my-1 text-xl p-2'>*Phone Number :- +91 844XYZ-YYYY</h1>
        <h1 className='my-1 text-xl p-2'>*Email :- roshanraoyadav@gmail.com</h1>
        <h1 className='my-1 text-xl p-2'>*Address :- Gr Noida Tilapta</h1>
      </div>
      <div className='text-gray-600 flex flex-col  mx-8'>
        <a 
          href="https://www.instagram.com/rao_rock_yaduvanshi" 
          target="_blank" 
          rel="noopener noreferrer"
          className='my-1 text-xl p-2 hover:text-red-400 transition-colors'
        >
          Instagram :- rao_rock_yaduvnshi
        </a>
        <a 
          href="https://www.facebook.com/RockSuman" 
          target="_blank" 
          rel="noopener noreferrer"
          className='my-1 text-xl p-2 hover:text-blue-400 transition-colors'
        >
          Facebook :- RockSuman
        </a>
      </div>
      
    </footer>
  );
}

export default Footer;
