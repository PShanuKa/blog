import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='bg-slate-200 p-2 px-8  flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>Blog <span className='text-blue-700'>LK</span></h1>
        <div className='flex flex-row gap-2'>
            <Link className='text-base font-semibold' to='/'>Home</Link>
            <Link className='text-base font-semibold' to='/sign-in'>Signin</Link>
            <Link className='text-base font-semibold' to='/sign-up'>Signup</Link>
        </div>
    </div>
   
  )
}

export default Navbar