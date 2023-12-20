import React, { useContext, useEffect, useRef, useState } from 'react';
import Addnote from './Addnote';
import Modal from './Modal';
import Noteitem from './Noteitem';
import noteContext from '../context/notes/NoteContext';
const Notes = () => {
  const context = useContext(noteContext);
  const {
    notes,
    getAllNotes,
    setNote,
    editNote,

    newnote,
    setNewnote,
    title,
    setTitle,
    description,
    setDescription,
    tag,
    setTag,
  } = context;
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    getAllNotes();
  }, []);
  const updateNote = (n) => {
    console.log('updated');
    //ref.current.click();
    setNewnote({ ...n });
    console.log(n);
    setShow(true);
  };
  return (
    <>
      <Addnote show={show} setShow={setShow} />

      <div className='grid grid-cols-5 gap-3 mx-20'>
        {notes.length === 0 && 'No notes to display'}
        {notes.map((n) => {
          return <Noteitem n={n} key={n._id} updateNote={updateNote} />;
        })}
      </div>
      <Modal show={show} setShow={setShow} />
    </>
  );
};

export default Notes;
