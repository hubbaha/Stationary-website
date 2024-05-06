import AboutUs from '@/components/AboutUs';
import Link from 'next/link';
import React from 'react';

const Collections = () => {
  return (
    <div>
      <h1 className="text-4xl  font-serif font-medium text-center my-10 underline decoration-accent ">Collections</h1>
      <div className="flex flex-wrap">
        <Link className="w-full md:w-[420px] p-4"  href='/Pens'>
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
              <img src="\images\c1.jpg" alt="Pen" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <div className="text-xl font-semibold mb-2" >Pens and Pencils</div>
              <p className="text-gray-700">
                Explore our collection of high-quality pens and pencils, perfect for writing and drawing.
              </p>
            </div>
          </div>
        </Link>
        <Link className="w-full md:w-[420px] p-4" href='/Notebooks'>
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
              <img src="\images\c2.jpg" alt="Notebook" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <div className="text-xl font-semibold mb-2" >Notebooks</div>
              <p className="text-gray-700">
                Find the perfect notebook for your needs, from small pocket-sized notebooks to large sketchbooks.
              </p>
            </div>
          </div>
        </Link>
        <Link className="w-full md:w-[420px] p-4" href='/Pouches'>
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
              <img src="\images\c3.webp" alt="Pouch" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <div className="text-xl font-semibold mb-2">Pouches and Cases</div>
              <p className="text-gray-700">
                Keep your stationary items organized and protected with our selection of pouches and cases.
              </p>
            </div>
          </div>
        </Link>
        <Link className="w-full md:w-[420px] p-4" href='/Journaling'>
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
                
              <img src="\images\c4.webp" alt="Journal" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <div className="text-xl font-semibold mb-2">Journaling Essentials</div>
              <p className="text-gray-700">
                Discover our range of journaling essentials, including journals, stickers, and washi tape.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Collections;