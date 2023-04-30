import React from 'react';

const ExamplePage = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-full md:w-1/2 p-4'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Pembeli</h2>
            <a href='/login/pembeli' target='_blank' rel='noopener noreferrer'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                Pembeli
              </button>
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-bold mb-4'>Penjual</h2>
            <a href='/login/penjual' target='_blank' rel='noopener noreferrer'>
              <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
                Penjual
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
