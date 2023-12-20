import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/NoteContext';
const API_BASE_URL = 'https://notestore2.onrender.com';
const Signup = () => {
  const context = useContext(noteContext);
  const { token, setToken, showAlert } = context;
  const [detail, setDetail] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      if (detail.name.length < 3)
        throw new Error('Minimum name length should be 3');
      if (detail.password.length < 5)
        throw new Error('Minimum password length should be 5');
      const response = await fetch(
        'https://notestore2.onrender.com/api/auth/createuser',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            name: detail.name,
            email: detail.email,
            password: detail.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error('Please enter valid credentials');
      if (data.success) {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        navigate('/home');
        showAlert('Signed up successfully', 'success');
      }
    } catch (error) {
      console.log(error);
      showAlert(error.message, 'danger');
    }
    setDetail({ name: '', email: '', password: '' });
  };
  return (
    <div className='w-96 h-[470px]  mx-auto my-[150px] flex flex-col items-center rounded-md border-4 border-purple-800 backdrop-blur-md bg-white/40'>
      <p className='text-2xl my-[20px]  font-black'>Signup Form</p>
      <form className=' flex flex-col    mt-[15px]'>
        <input
          type='text'
          placeholder='Name'
          id='name'
          name='name'
          value={detail.name}
          onChange={(e) => {
            handleChange(e);
          }}
          // className='w-[326px]  h-14 px-2 rounded-md  border-2 hover:border-purple-300'
          className='w-[326px]  h-14 px-2 rounded-md  border-2 '
        ></input>
        <input
          type='text'
          placeholder='Email'
          id='email'
          name='email'
          value={detail.email}
          onChange={(e) => {
            handleChange(e);
          }}
          className='w-[326px]  h-14 px-2 rounded-md  border-2 mt-10'
          // className='w-[326px]  h-14 px-2 rounded-md  border-2 hover:border-purple-300 mt-[40px]'
        ></input>
        <input
          type='password'
          placeholder='Password'
          id='password'
          name='password'
          value={detail.password}
          onChange={(e) => {
            handleChange(e);
          }}
          className='w-[326px] h-14 px-2 rounded-md mt-[40px] border-2  '
          // className='w-[326px] h-14 px-2 rounded-md mt-[40px] border-2  hover:border-purple-300'
        ></input>
      </form>
      <button
        type='submit'
        className='w-[326px] h-14 rounded-full text-white bg-purple-600 mt-[45px] text-xl font-mono'
        onClick={handleSubmit}
      >
        {/* <button className='w-[326px] h-14 rounded-full text-white bg-purple-600 mt-[45px] text-xl hover:bg-purple-700 font-mono'> */}
        Signup
      </button>
    </div>
  );
};

export default Signup;
