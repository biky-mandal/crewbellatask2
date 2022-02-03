import React, { useState } from 'react';
import './style.css';

export const InputBox = (props) => {

    return(
        <div className='user-input-div'>
            <label>{props.title}</label>
            <input 
                name={props.name}
                className='user-input'
                type='text'
                onChange={(e) => props.getData(props.name, e.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export const SelectBoxCountry = (props) => {

    return(
        <div className='user-input-div'>
            <label>Country</label>
            <select 
                name={props.name}
                className='user-select-input'
                type='select'
                onChange={(e) => props.getData(props.name, e.target.value)}
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
export const SelectBox = (props) => {


    return(
        <div className='user-input-div'>
            <label>Visibility to audience ?</label>
            <select 
                className='user-select-input'
                type='select'
                name={props.name}
                onChange={(e) => props.getData(props.name, e.target.value)}
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
                placeholder={props.placeholder}
                onChange={(e) => props.getData(props.name, e.target.value)}
            />
        </div>
    )
}