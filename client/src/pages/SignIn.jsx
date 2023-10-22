import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='p-3 max-w-lg mx-auto my-8 border rounded-lg shadow-lg max-[520px]:mx-3'>
        <h1 className='text-3xl text-center font-medium my-8'>Signin</h1>
        <form action="" className='flex flex-col gap-4 p-3'>
            <input className='bg-white p-3 outline-none border rounded-md' id='email' type="Email" placeholder='Email' />
            <input className='bg-white p-3 outline-none border rounded-md' id='password' type="password" placeholder='Password' />
            <button className='text-white text-lg rounded-md p-3 bg-blue-600 hover:opacity-90' type='submit'>Signin</button>
        </form>

        <div className='mb-7'>        
            <p className='text-center'>Don't Have an account? <Link to='/sign-up' className='text-blue-500'>Signin</Link></p>
        </div>
    </div>
  )
}

export default SignIn