import React from 'react'
import AboutUs from './AboutUs'
import ProductCard from './ProductCard';

const Productdata =[
    {
        img:"/images/d1.jpg",
        title:"Sticky Notes ",
        desc:"Different sizes ",
        price:" 850",
    },
    {
        img:"/images/j1.webp",
        title:"COLOR PEN MARKER",
        desc:"6 in a pack",
        price:"900",
    },
    {
        img:"/images/j3.webp",
        title:"DEEP SEA GOLD",
        desc:"10 Washi tapes",
        price:"1000",
    },
    {
        img:"/images/j4.jpg",
        title:"MIXED FANTASY",
        desc:"Washi tapes ",
        price:"120",
    },
    {
        img:"/images/J5.webp",
        title:"pATTERN STAMP MARKER",
        desc:"Different colors",
        price:"250",
    },
    {
        img:"/images/J6.webp",
        title:"DUAL TONE HIGHLIGHTER ",
        desc:"6 in a set",
        price:"1200",
    },
   
    {
        img:"/images/J7.webp",
        title:"Color Pen",
        desc:"Set of 12",
        price:"1550",
    },
    {
        img:"/images/J8.webp",
        title:"MOTIVATIONAL SERIES",
        desc:"Stickers ",
        price:"450",
    },
    {
        img:"/images/J9.webp",
        title:"Index tapes",
        desc:"Washi tape set",
        price:"550",
    },
    {
        img:"/images/J10.webp",
        title:"CANDY COLOR ",
        desc:"Scissor",
        price:"250",
    },
    {
        img:"/images/J11.webp",
        title:"Soft highligter",
        desc:"4 in a set",
        price:"650",
    },
    {
        img:"/images/J12.webp",
        title:"SANRIO HIGHLIGHTER SET",
        desc:"3 Highlighters",
        price:"650",
    },
    {
        img:"/images/J13.webp",
        title:"Cute Emoji Highlighter",
        desc:"6 in a set",
        price:"750",
    },
    {
        img:"/images/J14.webp",
        title:"Minimal lines",
        desc:"Washi Tapes",
        price:"250",
    },
    
    
    
    


];

function Journalingproduct() {
  return (
    <div> <div>
    <h1 className="text-4xl  font-serif font-medium text-center my-10 underline decoration-accent ">Journaling Essentials</h1>
    <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 
     xl:gap-x-20 xl:gap-y-10'>
        {Productdata.map((item, index)=> (
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            />
        ))
        }

        </div>

    </div>
    <AboutUs></AboutUs>
   </div>
  )
}

export default Journalingproduct