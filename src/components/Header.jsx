import React from 'react'
import {TbBusinessplan} from 'react-icons/tb'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-700 shadow-lg fixed top-0 left-0 right-0'>
        {/* <div className="container-fluid flex w-full flex items-center text-xl text-black">
          Header
        </div> */}

          <a href="#" className="flex justify-start items-center text-xl text-black space-x-1">
           <span>genesis</span> 
           <TbBusinessplan />
            </a>
            <div className='flex space-x-2 justify-center'>
              <button
              type='button'
              className='inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:bg-green-700'
              >connect wallet</button>
            </div>
        </header>
  )
}

export default Header
