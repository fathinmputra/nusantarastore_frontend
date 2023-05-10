import React from 'react';

const ExamplePage = () => {
  return (
    <div>
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
            <div className='flex flex-col md:flex-row md:mx-6'></div>
          </div>

          <div className='md:flex items-center'>
            <div className='flex flex-col md:flex-row md:mx-6'>
              <a
                href='/'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Kembali
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full md:w-1/2 p-4'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Pembeli</h2>
            <a href='/signup/pembeli' rel='noopener noreferrer'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                Halaman Sign Up Pembeli
              </button>
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Penjual</h2>
            <a href='/signup/penjual' rel='noopener noreferrer'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                Halaman Sign Up Penjual
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
