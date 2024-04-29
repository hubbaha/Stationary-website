import React from 'react'
import { PiBugBeetleDuotone } from "react-icons/pi";
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';



function HeaderMain() {
  return (
    <div className='border-b border-gray-200 py-6'>
        <div className='container sm:flex justify-between items-center  '>
            <div className=' pb-4 sm:pb-0 text-blackish flex justify-start font-bold text-2xl '>
                <PiBugBeetleDuotone className='text-yellow-500 font-bold text-2xl text-center'/> 
                BumbleBee
            </div>
            <div className='w-full sm:w-[300px] md:w-[100%] relative flex justify-center items-center '>
            <input className=' border-gray-200 border p-2 px-4 rounded-lg w-[60%] ' 
            type="text" 
            placeholder='Enter any product name...' />
           </div>
           <div className='hidden lg:flex gap-2 text-gray-500 text-[25px]'>
            <BiUser/>
            <div className='relative'>
                <HiOutlineShoppingBag/>
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[10px] h-[10px] text-[7px] text-white
                grid place-items-center '>0</div>
            </div>
           </div>
        </div>
       
    </div>
  )
}

export default HeaderMain