import React from 'react';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
const Note = (props) => {
  const handleDelete = (id) => {
    return props.setAddItem((prevData, index) => {
      return prevData.filter((element, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className='note'>
      <h2>{props.title}</h2>
      <br />
      <p>{props.content}</p>
      <DeleteOutlineTwoToneIcon
        className='deleteIcon'
        onClick={() => {
          handleDelete(props.id);
        }}
      />
    </div>
  );
};

export default Note;
