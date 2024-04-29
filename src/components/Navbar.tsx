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
          <Link className='navbar__link relative' href='#'>
            PENS/PENCILS
          </Link>
          <Link className='navbar__link relative' href='#'>
            NOTEBOOKS
          </Link>
          <Link className='navbar__link relative' href='#'>
            POUCHES
          </Link>
          <Link className='navbar__link relative' href='#'>
            JOURNALING ESSENTIALS
          </Link>
          <Link className='navbar__link relative text-red-700' href='#'>
            SALE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar