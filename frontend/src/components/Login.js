import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NoteContext';
import { useNavigate } from 'react-router-dom';
const API_BASE_URL = 'https://notestore2.onrender.com';
const Login = () => {
  const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');
  const navigate = useNavigate(); //To redirect to another page
  const context = useContext(noteContext);
  const { setToken, showAlert } = context;

  const handleSubmit = async () => {
    console.log(email);
    console.log(password);
    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);
      if (!response.ok) throw new Error('Please enter valid credentials');
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        navigate('/home');
        showAlert('Logged in successfully', 'success');
      }
    } catch (error) {
      showAlert(error.message, 'danger');
    }

    Setemail('');
    Setpassword('');
  };
  return (
    <div className='w-96 h-96  mx-auto my-[150px] flex flex-col items-center rounded-xl border-4 border-purple-800  backdrop-blur-md bg-white/40  '>
      <p className='text-2xl my-[20px]  font-black '>Login Form</p>
      <form className=' flex flex-col    mt-[15px]'>
        <input
          type='text'
          placeholder='Email'
          id='email'
          name='email'
          value={email}
          // className='w-[326px]  h-14 px-2 rounded-md  border-2 hover:border-purple-300'
          className='w-[326px]  h-14 px-2 rounded-md  border-2 '
          onChange={(e) => {
            Setemail(e.target.value);
          }}
        ></input>
        <input
          type='password'
          placeholder='Password'
          id='password'
          name='password'
          value={password}
          onChange={(e) => {
            Setpassword(e.target.value);
          }}
          // className='w-[326px] h-14 px-2 rounded-md mt-[40px] border-2  hover:border-purple-300'
          className='w-[326px] h-14 px-2 rounded-md mt-[40px] border-2  '
        ></input>
      </form>
      {/* <button className='w-[326px] h-14 rounded-full text-white bg-purple-600 mt-[45px] text-xl hover:bg-purple-700 font-mono'> */}
      <button
        type='button'
        className='w-[326px] h-14 rounded-full text-white bg-purple-600 mt-[45px] text-xl '
        onClick={() => {
          handleSubmit();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
