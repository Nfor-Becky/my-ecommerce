import React from 'react'
const LoginSignup = () => {
  return (
    <div className='w-full h-[100%] bg-pink-100 p-11'>
      <div className="container w-[580px] rounded h-[600px] bg-white m-auto py-10 px-14 ">
        <h1 className='my-5 uppercase text-3xl font-medium'>Sign-up</h1>
        <div className="fields flex flex-col mb-3 mt-7 gap-7">
            <input type="text"placeholder='Your Name' className='h-[72px] w-full pl-5 border-solid  border border-gray-500 rounded outline-none text-gray-800 text-lg'/>
            <input type="text"placeholder='Email Address'  className='h-[72px] w-full pl-5 border-solid border border-gray-500 rounded outline-none text-gray-800 text-lg'/>
            <input type="text"placeholder='Password'  className='h-[72px] w-full pl-5 border-solid border border-gray-500 rounded outline-none text-gray-800 text-lg'/>
        </div>
        <button className='text-white rounded-full px-4 py-2 cursor-pointer bg-red-500 w-full'>Continue</button>
        <p className=" mt-1 text-sm  text-gray-400">Already have an account? <span className='text-red-400 font-bold'>Login</span></p>
        <div className="flex items-center mt-5 gap-3">
            <input type="checkbox" name='' id='' />
            <p className='text-lg text-gray-500'>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
