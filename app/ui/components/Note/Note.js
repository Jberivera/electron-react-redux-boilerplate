import React from 'react';
import css from './Note.scss';

const Note = ({ count, onClick }) => {
  return (
    <h1 className={css.counter} onClick={(e) =>{
      onClick();
    }}>
      Ready for start to apply react, redux using webpack { count }
    </h1>
  );
}

export default Note;
