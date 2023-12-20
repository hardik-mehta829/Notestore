import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/NoteContext';

const Addnote = (show, setShow) => {
  const [note, setNote] = useState({ title: '', description: '', tag: '' });
  const { addNote } = useContext(noteContext);
  const handleDescription = (e) => {
    //console.log(e.target.value);
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    //to prevent page from loading
    console.log(note);
    addNote(note);
    setNote({ title: '', description: '', tag: '' });
  };
  return (
    <div className='  w-1/2 h-[470px]  mx-auto my-[50px] flex flex-col  rounded-md    border-4   border-purple-800     '>
      <p className='text-2xl my-[20px]  font-black  mx-auto '>Add a Note</p>
      <form className='flex flex-col  mt-[15px] mx-2'>
        <input
          type='text'
          placeholder='title'
          required
          minLength={5}
          value={note.title}
          id='title'
          name='title'
          // className='w-[876px]  h-14 px-2 rounded-md  border-2 hover:border-purple-300'
          className='w-[93%]  h-14 px-2 rounded-md  border-2 hover:border-purple-300'
          onChange={(e) => handleDescription(e)}
        ></input>
        <input
          type='text'
          placeholder='tag'
          id='tag'
          value={note.tag}
          required
          name='tag'
          // className={`w-[876px]  h-14 px-2 rounded-md  border-2 hover:border-purple-300 mt-[40px]`}
          className={`w-[93%]  h-14 px-2 rounded-md  border-2 hover:border-purple-300  mt-[40px] `}
          onChange={(e) => handleDescription(e)}
        ></input>
        <input
          type='text'
          placeholder='description'
          id='description'
          value={note.description}
          required
          minLength={5}
          name='description'
          // className='w-[876px] h-14 px-2 rounded-md mt-[40px] border-2  hover:border-purple-300'
          className='w-[93%] h-14 px-2 rounded-md mt-[40px] border-2  hover:border-purple-300'
          onChange={(e) => handleDescription(e)}
        ></input>
      </form>
      <button
        type='submit'
        // className='w-[326px] h-14 rounded-full text-white bg-purple-600 brightness-125 mt-[45px] text-xl hover:bg-purple-700 font-mono mx-auto '
        className='w-[326px] h-14 rounded-full text-white bg-purple-600 brightness-125 mt-[45px] text-xl  font-mono mx-auto '
        disabled={note.title.length < 3 || note.description.length < 5}
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default Addnote;
