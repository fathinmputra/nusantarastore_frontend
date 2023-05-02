import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import api from '@/lib/api';

// import { useHistory } from "react-router-dom";

export default function LoginPembeliPage() {

  const methods = useForm();

  const {handleSubmit, register} = methods;
  

  const onSubmit = (data) => {
   toast.promise(
      api.post('/login/pembeli', data),
      {
        loading: 'Loading...',
        success: (res) => {
          localStorage.setItem('token', res.data.token);
          return 'Login success!';
        },
        error: (err) => {
          return err.response.data.message;
        },
      },
   )
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-8 rounded-md shadow-md'
      >
        <h2 className='text-2xl font-bold mb-4 text-center'>LOGIN PEMBELI</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('email')}
            type='email'
            placeholder='Email'
          />
        </div>
        <div className='mb-6'>
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
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
          Log In
        </button>
      </form>
    </div>
  );
}
