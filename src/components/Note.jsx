import React from 'react';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
const Note = (props) => {
  return (
    <div className='note'>
      <h2>{props.title}</h2>
      <br />
      <p>{props.content}</p>
      <DeleteOutlineTwoToneIcon className='deleteIcon' />
    </div>
  );
};

export default Note;
