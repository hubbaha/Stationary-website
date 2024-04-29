import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";


function Header() {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>
                    <div className='header__icon_wrapper'>
                    <FaFacebook />
                    </div>
                    <div className='header__icon_wrapper'>
                    <IoLogoInstagram />
                    </div>
                    <div className='header__icon_wrapper'>
                    <FaTwitter />
                    </div>
                </div>
                <div className='text-gray-500 text-[12px]'> FREE DELIVERY ACROSS PAKISTAN</div>
            </div>
        </div>
    </div>
  )
}

export default Header