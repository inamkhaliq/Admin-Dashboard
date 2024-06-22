import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    let navigate=useNavigate();
  return (
    <section>
        <div className='w-screen h-screen flex justify-center items-center'>
            <button 
                onClick={()=>{navigate("/admin-Dashboard")}}
                className='py-2 px-4 rounded-sm bg-[#EA3238] text-[#FFFF] leading-6 text-base font-semibold'
            >
                Admin Dashboard
            </button>
        </div>
    </section>
  )
}

export default SignIn