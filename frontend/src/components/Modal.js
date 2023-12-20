import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/NoteContext';

const Modal = ({ show, setShow }) => {
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
  const ref = useRef(null);
  const refClose = useRef(null);

  const handleSubmit = () => {
    console.log(newnote);
    const newnotes = notes.filter((n) => {
      return n._id !== newnote._id;
    });
    setTitle('');
    setDescription('');
    setTag('');
    setNote(newnotes.concat(newnote));
    editNote(newnote);
    setNewnote({ title: '', tag: '', description: '' });
    setShow(false);

    // setTimeout(() => {
    //   setNewnote({ title: '', tag: '', description: '' });
    //   setShow(false);
    // }, 500);
  };
  useEffect(() => {
    console.log(show);
  }, [show]);
  return (
    <div>
      <div
        // className={`${
        //   show ? 'z-[10]' : `z-[-1]`
        // }  w-[100%] h-[100%] fixed top-0 left-0  transition-opacity duration-500 ease-in bg-black ${
        //   show ? 'opacity-50' : 'opacity-0'
        // }  `}
        className={`${
          show ? 'z-[10]' : `z-[-1]`
        }  w-[100%] h-[100%] fixed top-0 left-0  transition-opacity duration-500 ease-in bg-black ${
          show ? 'bg-opacity-50' : 'bg-opacity-0'
        }  `}
        // className={`${
        //   show ? 'z-[10]' : `z-[-1]`
        // }  w-[100%] h-[100%] fixed top-0 left-0  transition-opacity duration-500 ease-in bg-black ${
        //   show ? 'opacity-50' : 'opacity-0'
        // }  `}

        // style={{
        //   position: 'fixed',
        //   top: 0,
        //   left: 0,
        //   width: '100%',
        //   height: '100%',
        //   background: show ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0,0,0,0)',
        //   zIndex: show ? 1000 : -1,
        //   opacity: show ? 1 : 0,

        //   transition: 'opacity 0.5s ease',

        // }}
      ></div>
      <div
        // className={`${
        //   show ? 'z-[20]' : 'z-[0]'
        // } absolute w-1/3 h-[470px]  mx-auto  flex flex-col  rounded-md border-4 border-purple-800    bg-white  left-[630px] top-0  transition-opacity duration-[1000] ease-in ${
        //   show ? 'opacity-100' : 'opacity-0'
        // }
        // } `}
        className={`${
          show ? 'z-[20]' : 'z-[0]'
        } absolute w-1/3 h-[470px]  mx-auto  flex flex-col  rounded-md border-4 border-purple-800    bg-white  left-[630px] top-0  transition-opacity duration-500 ease-in ${
          show ? 'opacity-100' : 'opacity-0'
        }
        } `}
        // className={`${
        //   show ? 'z-[20]' : 'z-[0]'
        // } absolute w-1/3 h-[470px]  mx-auto  flex flex-col  rounded-md border-4 border-purple-800    bg-white  left-[630px] top-0  transition-opacity duration-[1000] ease-in
        // }
        // } `}
      >
        <div className='flex my-[20px] '>
          <p className='text-2xl  font-black  mx-auto'>Update Your note</p>
          <button
            className='h-10 w-10 mr-5 text-3xl hover:bg-purple-600 hover:text-white'
            onClick={() => {
              setShow(false);
            }}
          >
            x
          </button>
        </div>
        <form className=' flex flex-col    mt-[15px] mx-2'>
          <input
            type='text'
            placeholder='title'
            id='title'
            name='title'
            required
            minLength={5}
            value={newnote ? newnote.title : ''}
            onChange={(e) => {
              setTitle(e.target.value);
              setNewnote({
                ...newnote,
                [e.target.name]: e.target.value,
              });
            }}
            // className='w-[576px]  h-14 px-2 rounded-md  border-2 hover:border-purple-300'
            className='w-[576px]  h-14 px-2 rounded-md  border-2 '
          ></input>
          <input
            type='text'
            placeholder='tag'
            id='tag'
            name='tag'
            value={newnote ? newnote.tag : ''}
            onChange={(e) => {
              setTag(e.target.value);
              setNewnote({
                ...newnote,
                [e.target.name]: e.target.value,
              });
            }}
            // className='w-[576px]  h-14 px-2 rounded-md  border-2 hover:border-purple-300 mt-[40px]'
            className='w-[576px]  h-14 px-2 rounded-md  border-2  mt-[40px]'
          ></input>
          <input
            type='text'
            placeholder='description'
            id='description'
            name='description'
            required
            minLength={5}
            value={newnote ? newnote.description : ''}
            onChange={(e) => {
              setDescription(e.target.value);

              setNewnote({
                ...newnote,
                [e.target.name]: e.target.value,
              });
            }}
            // className='w-[576px] h-14 px-2 rounded-md mt-[40px] border-2  hover:border-purple-300'
            className='w-[576px] h-14 px-2 rounded-md mt-[40px] border-2  '
          ></input>
        </form>
        <button
          type='submit'
          disabled={
            (newnote && newnote.title.length < 3) ||
            (newnote && newnote.description.length < 5)
          }
          onClick={(e) => {
            handleSubmit();
          }}
          // className='w-[326px] h-14 rounded-full text-white bg-purple-600 mt-[45px] text-xl hover:bg-purple-700 font-mono mx-auto '
          className='w-[326px] h-14 rounded-full text-white bg-purple-600 mt-[45px] text-xl  font-mono mx-auto '
        >
          Update Note
        </button>
      </div>
      {/* <button
        className='text-green-500 z-50 relative'
        onClick={() => {
          setShow((s) => !s);
        }}
      >
        Click
      </button> */}
    </div>
  );
};

export default Modal;
