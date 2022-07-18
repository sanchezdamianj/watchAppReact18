import React from 'react';
import '../css/App.css';

const Input = (props) => {
  return (
    <input
        type={props.type}
        placeholder={props.placeholder}
        vale={props.vale}
        onChange={props.onChange? (e) => props.onChange(e) : null}

    />
  )
}

export default Input;