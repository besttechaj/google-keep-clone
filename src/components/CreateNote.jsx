import React from 'react';
import Button from '@material-ui/core/Button';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
const CreateNote = () => {
  const addNote = () => {
    console.log('note is added');
  };
  return (
    <div className='main_note'>
      <form>
        <input type='text' placeholder='title' autoComplete='off' />
        <textarea rows='' column='' placeholder='Write a note...'></textarea>
        <Button onClick={addNote}>
          <AddCommentOutlinedIcon className='plus_sign' />
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
