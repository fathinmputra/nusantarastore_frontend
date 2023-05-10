/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
// import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import api from '@/lib/api';

export default function SignUpPembeliPage() {
  const methods = useForm();

  const {handleSubmit, register} = methods;

  const onSubmit = (data: any) => {
    toast.promise(
       api.post('/user_pembeli/create', data),
       {
         loading: 'Loading...',
         success: () => {
           return 'Sign Up success!';
          },
         error: (err) => {
           return err.response.data.message;
         },
       },
    )
   }


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
              href='/signup'
              className='my-1 text-gray-700 hover:text-indigo-500 md:mx-4 md:my-0'
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
    </nav>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-8 rounded-md shadow-md'
      >
        <h2 className='text-2xl font-bold mb-4 text-center'>Sign Up Pembeli</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('email')}
            type='email'
            placeholder='Email'
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='user_name'
          >
            Username
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('user_name')}
            type='text'
            placeholder='Username'
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('password')}
            type='password'
            placeholder='Password'
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('name')}
            type='text'
            placeholder='Name'
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='phone'>
            Phone Number
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('phone_number')}
            type='tel'
            placeholder='Phone Number'
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
