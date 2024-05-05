import page from '@/app/page'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
          <Link className='navbar__link relative ' href='/'>
            HOME
          </Link>
          <Link className='navbar__link relative' href='/Collection'>
            COLLECTIONS
          </Link>
          <Link className='navbar__link relative' href='/Pens'>
            PENS/PENCILS
          </Link>
          <Link className='navbar__link relative' href='/Notebooks'>
            NOTEBOOKS
          </Link>
          <Link className='navbar__link relative' href='/Pouches'>
            POUCHES
          </Link>
          <Link className='navbar__link relative' href='/Journaling'>
            JOURNALING ESSENTIALS
          </Link>
          <Link className='navbar__link relative text-red-700' href='/Sale'>
            SALE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar