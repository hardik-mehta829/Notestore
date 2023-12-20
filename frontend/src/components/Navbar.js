import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import noteContext from '../context/notes/NoteContext';

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  const { token, showAlert, setToken } = useContext(noteContext);
  return (
    <ul className='h-[80px] flex   items-center bg-[#FAF9F6]  '>
      {localStorage.getItem('token') && (
        <Link
          className='  w-[70px]  ml-[20px] font-sans text-xl h-full flex items-center hover:underline decoration-purple-900  underline-offset-8'
          to='/home'
        >
          Notes
        </Link>
      )}
      {!localStorage.getItem('token') && (
        <Link
          className=' w-[70px] ml-[20px] font-sans text-xl h-full flex items-center hover:underline decoration-purple-900  underline-offset-8'
          to='/'
        >
          Login
        </Link>
      )}
      {!localStorage.getItem('token') && (
        <Link
          className=' w-[70px]  ml-[20px] font-sans text-xl h-full flex items-center hover:underline decoration-purple-900  underline-offset-8'
          to='/signup'
        >
          Signup
        </Link>
      )}
      {localStorage.getItem('token') && (
        <Link
          className=' w-[70px]  ml-[20px] font-sans text-xl h-full flex items-center hover:underline decoration-purple-900  underline-offset-8'
          to='/'
          onClick={() => {
            showAlert('Logged out successfully', 'success');
            localStorage.removeItem('token');
          }}
        >
          Logout
        </Link>
      )}
    </ul>
  );
};

export default Navbar;

// import React, { useContext } from 'react';
// import taskContext from '../Context';

// const Navbar = () => {
//   const { selectedId, setDetail, setId } = useContext(taskContext);
//   return (
//     <div className='navbar'>
//       <button
//         className={selectedId === 0 ? 'navstyle' : ''}
//         onClick={() => {
//           setId(0);
//           setDetail(false);
//         }}
//       >
//         Start
//       </button>
//       <button
//         className={selectedId === 1 ? 'navstyle' : ''}
//         onClick={() => {
//           setId(1);
//           setDetail(false);
//         }}
//       >
//         Education
//       </button>
//       <button
//         className={selectedId === 2 ? 'navstyle' : ''}
//         onClick={() => {
//           setId(2);
//           setDetail(false);
//         }}
//       >
//         Hobbies
//       </button>
//       <button
//         className={selectedId === 3 ? 'navstyle' : ''}
//         onClick={() => {
//           setId(3);
//           setDetail(false);
//         }}
//       >
//         Contact
//       </button>
//     </div>
//   );
// };

// export default Navbar;
