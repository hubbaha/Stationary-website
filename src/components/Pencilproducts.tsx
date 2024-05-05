import React from 'react'
import ProductCard from './ProductCard';
import AboutUs from './AboutUs';

const Productdata =[
    {
        img:"/images/p1.jpg",
        title:"Happy Life Bear Rabbit ",
        desc:"Gel Pens ",
        price:"450",
    },
    {
        img:"/images/p2.webp",
        title:"Cute Pokemon",
        desc:"Pens",
        price:"350",
    },
    {
        img:"/images/p3.webp",
        title:"M&G Solid Color",
        desc:"Gel Pens",
        price:"200",
    },
    {
        img:"/images/p4.webp",
        title:"Panda With Strawberry",
        desc:"6 in a pack ",
        price:"800",
    },
    {
        img:"/images/p5.webp",
        title:"Meow Series",
        desc:"Erasable Gel Pens",
        price:"250",
    },
    {
        img:"/images/p6.webp",
        title:"Dear Annie ",
        desc:"Lead Pencil",
        price:"200",
    },
   
    {
        img:"/images/p7.webp",
        title:"UNICORN",
        desc:"Pencil Set of 12",
        price:"550",
    },
    {
        img:"/images/p8.webp",
        title:"Simply dinosaur ",
        desc:"Gel Pens",
        price:"250",
    },
    {
        img:"/images/p9.webp",
        title:"EVERLASTING",
        desc:"Lead Pencil",
        price:"150",
    },
    
    
    


];

function Pencilproducts() {
  return (
    <div>
        <div>
        <h1 className="text-4xl  font-serif font-medium text-center my-10 underline decoration-accent ">Pens/Pencils</h1>
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

export default Pencilproducts