import React, { useState } from 'react';

import './App.css';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className='container'>
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              setAddItem={setAddItem}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
