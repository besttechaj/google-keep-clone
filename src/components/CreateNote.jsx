import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const addEvent = () => {
    props.passNote(note);

    setNote({
      title: '',
      content: '',
    });
  };

  const InputEvent = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { name, value } = event.target;
    //the above line means that object destructuring to its original form
    // const value = event.target.event;
    // const name = event.target.name;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div className='main_note'>
      <form>
        <input
          name='title'
          type='text'
          placeholder='title'
          autoComplete='off'
          value={note.title}
          onChange={InputEvent}
        />
        <textarea
          name='content'
          rows=''
          column=''
          placeholder='Write a note...'
          value={note.content}
          onChange={InputEvent}
        ></textarea>
        <Button onClick={addEvent}>
          <AddCircleOutlineIcon className='plus_sign' />
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
