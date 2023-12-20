import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/NoteContext';
const About = () => {
  const a = useContext(noteContext); //The context is used to access the state and update it.
  // useEffect(() => {
  //   a.update();
  // }, []);
  return (
    <div className='flex'>
      <div className='w-1/4 ml-[200px] mt-[250px] border-2 bg-purple-900 text-white rounded-xl flex flex-col'>
        <span className='text-3xl px-3 text-center'>
          Welcome to NotesStore{' '}
        </span>
        <div className='mt-[30px] text-xl px-3'>
          Here you can store notes , update or delete existing notes <br />
          Login or signup to use it.
        </div>
      </div>
      <div className='w-1/4 mx-[20px] mt-[250px] border-2 bg-purple-900 text-white rounded-xl flex flex-col'>
        <span className='text-3xl px-3 text-center'>
          {' '}
          Welcome to NotesStore{' '}
        </span>
        <div className='mt-[30px] text-xl px-3'>
          Here you can store notes , update or delete existing notes <br />
          Login or signup to use it.
        </div>
      </div>
      <div className='w-1/4 mx-[20px] mt-[250px] border-2 bg-purple-900 text-white rounded-xl flex flex-col'>
        <span className='text-3xl px-3 text-center'>
          {' '}
          Welcome to NotesStore{' '}
        </span>
        <div className='mt-[30px] text-xl px-3'>
          Here you can store notes , update or delete existing notes <br />
          Login or signup to use it.
        </div>
      </div>
    </div>
  );
};

export default About;
