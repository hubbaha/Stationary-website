import React from 'react'
import SaleCard from './SaleCard';
import AboutUs from './AboutUs';
const Productdata =[
    {
        img:"/images/d2.webp",
        title:"Barbie Pearl Fur",
        desc:"Plush Material",
        price:"600",
    },
    {
        img:"/images/d5.webp",
        title:"Gradient Color",
        desc:" Lined Notebook",
        price:"450",
    },
    {
        img:"/images/p7.webp",
        title:"UNICORN",
        desc:"Pencil Set of 12",
        price:"550",
    },
    {
        img:"/images/p4.webp",
        title:"Panda With Strawberry",
        desc:"6 in a pack ",
        price:"800",
    },
    {
        img:"/images/B2.webp",
        title:"LLAMA",
        desc:"Zipper Pouch ",
        price:"400",
    },
    {
        img:"/images/B8.webp",
        title:"neutral color ",
        desc:"Zipper Pouch",
        price:"350",
    },
   
    {
        img:"/images/d1.jpg",
        title:"Sticky Notes ",
        desc:"Different sizes ",
        price:" 850",
    },
    {
        img:"/images/j3.webp",
        title:"DEEP SEA GOLD",
        desc:"10 Washi tapes",
        price:"1000",
    },
    {
        img:"/images/J6.webp",
        title:"DUAL TONE HIGHLIGHTER ",
        desc:"6 in a set",
        price:"1200",
    },


];



function Saleproducts() {
  return (
    <div> 
      <div>
        <h1 className="  text-4xl  font-serif font-medium text-center my-10  text-red-600 ">SALE</h1>
    <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 
    xl:gap-x-20 xl:gap-y-10'>
       {Productdata.map((item, index)=> (
           <SaleCard
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

export default Saleproducts