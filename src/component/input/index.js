import React, { useState } from 'react';
import './style.css';

export const InputBox = (props) => {
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

export const SelectBoxCountry = (props) => {

    const [country, setCountry] = useState();

    console.log(country);
    return(
        <div className='user-input-div'>
            <label>Visibility to audience ?</label>
            <select 
                className='user-select-input'
                type='select'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >
                {
                    props.data.map(c => {
                        return(
                            <option value={c.name}>{c.unicodeFlag} {c.name}</option>
                        )
                    })
                }
                <option>Select Visibility</option>
                <option value='public'>Keep it Public</option>
                <option value='private'>Keep it Private</option>
            </select>
        </div>
    )
}
export const SelectBox = () => {

    const [visibility, setVisibility] = useState();

    return(
        <div className='user-input-div'>
            <label>Visibility to audience ?</label>
            <select 
                className='user-select-input'
                type='select'
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
            >
                <option>Select Visibility</option>
                <option value='public'>Keep it Public</option>
                <option value='private'>Keep it Private</option>
            </select>
        </div>
    )
}


export const DescriptionBox = (props) => {
    return(
        <div className='user-input-div'>
            <label>{props.title}</label>
            <textarea 
                className='user-input-textarea'
                type='text'
                rows='4'
            />
        </div>
    )
}