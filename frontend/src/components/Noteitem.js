import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { n, updateNote } = props;
  const handleDelete = () => {
    deleteNote(n);
  };
  return (
    <div className='w-[300px] border-2 border-purple-800 rounded-xl flex flex-col'>
      <p className='text-2xl mx-auto'>{n.title}</p>
      <p>{n.description}</p>
      <div className='flex mt-9 ml-8'>
        <i className='fa-sharp fa-solid fa-trash' onClick={handleDelete}></i>
        <i
          className='fa-regular fa-pen-to-square ml-44'
          onClick={() => {
            updateNote(n);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Noteitem;
