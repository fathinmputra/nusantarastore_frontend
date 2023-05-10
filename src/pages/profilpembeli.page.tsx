import React from 'react';

export default function Home() {
  const email = 'fathinmp11@gmail.com';
  const username = 'fathinmp';
  const name = 'Fathin Muhashibi Putra';
  const phoneNumber = '081234567890';
  const address = 'Jl. Keputih Tegal Timur I No.101';

  return (
    <div className="bg-white">
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
                href='/produkpembeli'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Kembali
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 my-4">
        <div className="text-center">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="/fathin.jpg"
            alt="User avatar"
          />
          <h2 className="text-xl font-bold mt-2">{name}</h2>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
        <hr className="my-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="text-sm font-medium text-gray-500">Email:</div>
          <div>{email}</div>
          <div className="text-sm font-medium text-gray-500">Phone:</div>
          <div>{phoneNumber}</div>
          <div className="text-sm font-medium text-gray-500">Address:</div>
          <div>{address}</div>
        </div>
      </div>
    </div>
  );
}
