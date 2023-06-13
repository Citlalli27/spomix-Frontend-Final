import React, {useState} from 'react'
import {AiOutlineMenu} from'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='text-white bg-indigo-950 flex justify-between items-center h-28  mx-auto px-4'>
        <div className='inline-flex p-8'>
            <p className='w-full text-3xl font-bold text-rose-500'>Spo</p>
            <p className='w-full text-3xl font-bold text-white'>mix</p>
        </div>
        
    </div>
  )
}

export default Navbar
