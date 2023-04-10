import React from 'react';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
const Note = () => {
  return (
    <div className='note'>
      <h2>Title</h2>
      <br />
      <p>this is the content</p>
      <DeleteOutlineTwoToneIcon className='deleteIcon' />
    </div>
  );
};

export default Note;
