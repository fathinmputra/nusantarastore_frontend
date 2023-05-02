/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
// import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import api from '@/lib/api';

export default function SignUpPenjualPage() {
  const methods = useForm();

  const {handleSubmit, register} = methods;

  const onSubmit = (data: any) => {
    toast.promise(
       api.post('/user_penjual/create', data),
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
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-8 rounded-md shadow-md'
      >
        <h2 className='text-2xl font-bold mb-4 text-center'>Sign Up Pe</h2>
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
