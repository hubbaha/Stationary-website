import React from 'react'
import { IoMdContact } from "react-icons/io";

function AboutUs() {
    
   
      return (
        <div className='bg-white'>
        <div className="bg-gray-100 my-8 py-6">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif text-gray-700 text-center mb-4">About Us</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white text-accent rounded-lg shadow-lg p-6">
                  <h3 className=" font-medium uppercase  mb-2">Our Mission</h3>
                  <p className="text-gray-700 text-sm">
                    We provide high-quality stationary items to customers worldwide.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white text-accent border-spacing-y-10  rounded-lg shadow-lg p-6">
                  <h3 className="font-medium uppercase  mb-2">Our History</h3>
                  <p className="text-gray-700 text-sm">
                    We have been in business for over 10 years, building a reputation for quality and reliability.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white text-accent rounded-lg shadow-lg p-6">
                  <h3 className="font-medium uppercase  mb-2">Our Values</h3>
                  <p className="text-gray-700 text-sm">
                    We treat our customers, employees, and partners with respect and integrity.
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-1">
              <h3 className=" text-gray-700 text-md font-serif mb-1">Contact Us</h3>
              <p className="text-gray-700 text-xs justify-center">
                Address: Urdu bazar, Lahore<br>
                </br>Call us at:+92 3360750485<br>
                </br>
                <a href="#">Email: bumblebee@gmail.com</a> 
            
              
              </p>

              
            </div>
          </div>
          
        </div>
        <p className='text-xs text-gray-700'>© BUMBLEBEE 2023. All Rights Reserved</p>
    </div>
        
      );
    };
    
    export default AboutUs;