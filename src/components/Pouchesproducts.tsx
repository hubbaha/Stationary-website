import React from 'react'
import AboutUs from './AboutUs'
import ProductCard from './ProductCard';

const Productdata =[
    {
        img:"/images/B4.jpg",
        title:"Good Things ",
        desc:"Zipper Pouch ",
        price:"400",
    },
    {
        img:"/images/B1.webp",
        title:"TROPICAL LEAF",
        desc:"Zipper Pouch ",
        price:"400",
    },
    {
        img:"/images/B2.webp",
        title:"LLAMA",
        desc:"Zipper Pouch ",
        price:"400",
    },
    {
        img:"/images/B3.webp",
        title:"ALPACA ",
        desc:"Zipper Pouch",
        price:"400",
    },
    {
        img:"/images/B5.webp",
        title:"Plush Embroidered",
        desc:"Portable Bag",
        price:"550",
    },
    {
        img:"/images/B6.webp",
        title:"BAYMAX ",
        desc:"Mini Pouch",
        price:"200",
    },
   
    {
        img:"/images/B7.webp",
        title:"Minimal",
        desc:"Zipper Pouch",
        price:"350",
    },
    {
        img:"/images/B8.webp",
        title:"neutral color ",
        desc:"Zipper Pouch",
        price:"350",
    },
    
    


];

function Pouchesproducts() {
  return (
    <div>
         <div>
        <h1 className="text-4xl  font-serif font-medium text-center my-10 underline decoration-accent ">Pouches</h1>
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

export default Pouchesproducts