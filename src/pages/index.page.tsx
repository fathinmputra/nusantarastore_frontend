import 'tailwindcss/tailwind.css';

import React from 'react';

export default function Home() {
  return (
    <div className='bg-gray-100 h-screen'>
      <nav className='bg-white shadow-lg'>
        <div className='container mx-auto px-6 py-3 md:flex md:justify-between md:items-center'>
          <div className='flex items-center justify-between'>
            <div>
              <a
                href='/'
                className='text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700'
              >
                NUSANTARA STORE
              </a>
            </div>

            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                aria-label='toggle menu'
              >
                <svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className='md:flex items-center'>
            <div className='flex flex-col md:flex-row md:mx-6'>
              <a
                href='/about'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                About
              </a>
              <a
                href='/signup'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Sign Up
              </a>
              <a
                href='/login'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className='container mx-auto px-6 flex justify-center items-center h-full'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>
          Selamat Datang di Nusantara Store
        </h1>
      </div>
    </div>
  );
}
