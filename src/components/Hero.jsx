import React from 'react'

const Hero = () => {
  return (
    <div className='py-24  px-6 text-center bg-white text-gray-800'>
        <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight -scroll-mb-12'>
            <span className='capitalize'>
                bring creative projects to life on 
                </span>
            <br />
            <span className='uppercase text-green-600'>
                Genesis
            </span>

        </h1>
        <button
        type='button'
        className='inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:bg-green-700'
        >
                Add Project
        </button>
        
    </div>
  )
}

export default Hero