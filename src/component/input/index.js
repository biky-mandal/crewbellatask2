import React from 'react';
import './style.css';

const InputBox = (props) => {
    return(
        <div className='user-input-div'>
            <label>{props.title}</label>
            <input 
                className='user-input'
                type='text'
                
            />
        </div>
    )
}

export default InputBox