import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto my-8 border rounded-lg shadow-lg max-[520px]:mx-3'>
        <h1 className='text-3xl text-center font-medium my-8'>Signup</h1>
        <form action="" className='flex flex-col gap-4 p-3'>
            <input className='bg-white p-3 outline-none border rounded-md' type="text" placeholder='Username' />
            <input className='bg-white p-3 outline-none border rounded-md' type="Email" placeholder='Email' />
            <input className='bg-white p-3 outline-none border rounded-md'  type="password" placeholder='Password' />
            <button className='text-white text-lg rounded-md p-3 bg-blue-600 hover:opacity-90' type='submit'>Signup</button>
        </form>

        <div className='mb-7'>        
            <p className='text-center'>Already Have an account? <Link to='/sign-in' className='text-blue-500'>Signin</Link></p>
        </div>
    </div>
  )
}

export default SignUp