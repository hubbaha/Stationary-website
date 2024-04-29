import React from 'react'
import ProductCard from './ProductCard';

const Productdata =[
    {
        img:"/images/p1.jpg",
        title:"Happy Life Bear Rabbit ",
        desc:"Gel Pens ",
        price:"450",
    },
    {
        img:"/images/P6.webp",
        title:"Cute Lead Pencil",
        desc:"Pencil",
        price:"200",
    },
    {
        img:"/images/P9.webp",
        title:"EVERLASTING PENCIL",
        desc:"Pencil",
        price:"150",
    },
    {
        img:"/images/J12.webp",
        title:"SANRIO HIGHLIGHTER SET",
        desc:"3 Highlighters ",
        price:"650",
    },
    {
        img:"/images/d4.webp",
        title:"Fur Kitty Notebook",
        desc:"A5 Size ",
        price:"700",
    },
    {
        img:"/images/j2.webp",
        title:"Sticky Higlighter",
        desc:"7 in a pack",
        price:"350",
    },
   
    {
        img:"/images/B5.webp",
        title:"Plush Embroidered Bag ",
        desc:"Zipper Closure",
        price:"550",
    },
    


];

function Newproducts() {
  return (
    <div>
      <div className='container pt-16'>
         <h2 className='font-medium font-serif text-2xl pb-4'>
            New Products
         </h2>
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
    </div>
  )
}

export default Newproducts