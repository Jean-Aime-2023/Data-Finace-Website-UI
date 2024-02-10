import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4'/>
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data Analytics Centrally</h1>
          <p>
            Data analytics is the process of examining and interpreting data to
            uncover meaningful insights, draw conclusions, and support
            decision-making. It involves the use of various techniques and tools
            to analyze data sets, discover patterns, and extract valuable
            information.
          </p>
          <button className='bg-black w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
