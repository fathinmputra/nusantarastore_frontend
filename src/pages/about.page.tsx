import 'tailwindcss/tailwind.css';

import React from 'react';

export default function About() {
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
                href='/'
                className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
              >
                Kembali
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-bold text-center text-gray-800 my-12'>
          Tentang Nusantara Store
        </h1>
        <p className='text-center text-gray-600 mb-8'>
          NusantaraStore adalah platform E-Commerce yang mempertemukan pengrajin
          dan produsen lokal dengan pelanggan baru. Dengan berbagai macam produk
          unggulan dari seluruh Nusantara, kami berupaya meningkatkan
          kesejahteraan para pengrajin dan produsen lokal di Indonesia melalui
          digitalisasi dan mempromosikan produk-produk mereka ke seluruh negeri.
          Kami hadir untuk memberikan pengalaman belanja yang menyenangkan,
          mudah, dan aman bagi para pelanggan kami. Bergabunglah dengan
          NusantaraStore dan dukung produk-produk lokal Indonesia.
        </p>
      </div>
    </div>
  );
}
