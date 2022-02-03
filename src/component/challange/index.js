import React from 'react';

// import filmmaking from '../../resources/filmmaking.png';
import { FiChevronRight, FiCheck } from 'react-icons/fi';
import './style.css';

const Challange = (props) => {
    return (
        <div className={props.className}>
            <div className='challage-div-left'>
                <img src={props.img} alt={props.title} />
            </div>
            <div className='challage-div-right'>
                <h2>{props.title1}<br></br>{props.title2}<br></br>{props.title3}</h2>
                <h3>{props.description}</h3>

                {
                    props.challanges.map(c => {
                        if(c.open){
                            return(
                                <div className='active-div'>
                                    <div className='active-left-div'>
                                        <label className='a-title-name'>{c.title}</label>
                                        <label className='a-date-mentioned'>{c.date}</label>
                                    </div>
                                    <span><FiChevronRight /></span>
                                </div>
                            )
                        }else{
                            return(
                                <div className='inactive'>
                                    <div className='inactive-left-div'>
                                        <label className='i-title-name'>{c.title}</label>
                                        <label className='i-date-mentioned'>{c.date}</label>
                                    </div>
                                    <span><FiCheck /></span>
                                </div>
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}

export default Challange;