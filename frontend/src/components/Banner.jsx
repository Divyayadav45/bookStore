import React from 'react';
import Task from "../../public/Task.png";
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <div className='px-7 flex flex-col md:flex-row items-center md:items-start'>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-16 md:pl-10'>
          <div className='w-full md:w-3/4'>
            <h1 className='font-semibold text-4xl leading-tight'>
              Stay Organized, <span className='text-blue-800'>Stay Ahead!!</span>
            </h1>
            <p className='text-2xl semibold mt-4'>
              Track your tasks, monitor progress, and achieve your academic goals effortlessly.
            </p>
            <Link to="/Newuser" className="btn glass mt-6">New User</Link>
          </div>
        </div>
        <div className='order-1 w-full md:w-1/2'>
          <img src={Task} alt="Task Illustration" className='w-full md:w-3/4 mx-auto' />
        </div>
      </div>
    </>
  )
}

export default Banner;
