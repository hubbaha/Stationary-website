import AboutUs from '@/components/AboutUs';
import React from 'react';

const Collections = () => {
  return (
    <div>
      <h1 className="text-4xl  font-serif font-medium text-center my-10 underline decoration-accent ">Collections</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
              <img src="\images\c1.jpg" alt="Pen" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Pens and Pencils</h2>
              <p className="text-gray-700">
                Explore our collection of high-quality pens and pencils, perfect for writing and drawing.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
              <img src="\images\c2.jpg" alt="Notebook" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Notebooks</h2>
              <p className="text-gray-700">
                Find the perfect notebook for your needs, from small pocket-sized notebooks to large sketchbooks.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
              <img src="\images\c3.webp" alt="Pouch" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Pouches and Cases</h2>
              <p className="text-gray-700">
                Keep your stationary items organized and protected with our selection of pouches and cases.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg h-full">
            <div className="h-40">
                
              <img src="\images\c4.webp" alt="Journal" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Journaling Essentials</h2>
              <p className="text-gray-700">
                Discover our range of journaling essentials, including journals, stickers, and washi tape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Collections;