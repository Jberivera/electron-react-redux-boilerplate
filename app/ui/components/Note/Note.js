import React from 'react';
import style from './Note.scss';
import classNames from 'classnames/bind';

const css = classNames.bind(style);

const Note = ({ count, onClick }) => {
  return (
    <h1 className={css('counter')} onClick={(e) =>{
      onClick();
    }}>
      Ready for start to apply react, redux using webpack { count }
    </h1>
  );
}

export default Note;
