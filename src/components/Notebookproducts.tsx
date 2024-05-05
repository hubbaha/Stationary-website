import React from 'react'
import ProductCard from './ProductCard';
import AboutUs from './AboutUs';

const Productdata =[
   
    {
        img:"/images/d2.webp",
        title:"Barbie Pearl Fur",
        desc:"Plush Material",
        price:"600",
    },
    {
        img:"/images/d6.webp",
        title:"Starry Star",
        desc:"Planner NoteBook",
        price:"400",
    },
    {
        img:"/images/d10.webp",
        title:"Pretty Little thing ",
        desc:"A5 size",
        price:"350",
    },
    {
        img:"/images/d5.webp",
        title:"Gradient Color",
        desc:" Lined Notebook",
        price:"450",
    },
    {
        img:"/images/d7.webp",
        title:"Leaf Lined Notebook",
        desc:"Binder Pages",
        price:"400",
    },
   
    {
        img:"/images/d3.webp",
        title:"Stay Magical Unicorn",
        desc:"Plush Material",
        price:"600",
    },
    {
        img:"/images/d8.webp",
        title:"Van Gogh ",
        desc:"A5 size",
        price:"400",
    },
    {
        img:"/images/d9.webp",
        title:"Colourful captions",
        desc:"A6 size",
        price:"250",
    },
    {
        img:"/images/d4.webp",
        title:"Fur Cover Kitty",
        desc:"Plush Material",
        price:"600",
    },
    
    
    


];


function Notebookproducts() {
  return (
    <div>
         <div>
        <h1 className="text-4xl  font-serif font-medium text-center my-10 underline decoration-accent ">NoteBooks</h1>
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

export default Notebookproducts