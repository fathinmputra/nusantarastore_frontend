import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";

export default function LoginPembeliPage() {
  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // your login authentication code here
    // history.push("/dashboard");
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-8 rounded-md shadow-md'
      >
        <h2 className='text-2xl font-bold mb-4 text-center'>LOGIN</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
