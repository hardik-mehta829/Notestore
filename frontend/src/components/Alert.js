import React, { useContext } from 'react';
import noteContext from '../context/notes/NoteContext';

const Alert = () => {
  const { showAlert, alert } = useContext(noteContext);

  return (
    <div>
      <div
        className={`${
          alert && alert.type === 'success' ? 'bg-green-600' : 'bg-red-600 '
        } text-white  position absolute top-4 left-[40%]    text-center text-2xl   h-[44px] rounded-2xl transition duration-500 ease-linear ${
          alert ? 'translate-y-10 px-3' : '-translate-y-16'
        } `}
      >
        {alert && alert.msg}
      </div>
      )
    </div>
  );
};

export default Alert;
