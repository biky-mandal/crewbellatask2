import React from 'react';

import Header from '../../component/header';
import InputBox from '../../component/input';
import './style.css';

const Booking = (props) => {
    return(
        <>
            <Header/>
            <div className='booking-main-div'>
                <div className='booking-main-top-div'>
                    <label className='festival-type'>'International Uniwood Film festival'</label>
                    <h3>The short film challange</h3>
                </div>
                <div className='booking-main-bottom-div'>
                        <div className='bmb-left-div'>
                            <InputBox
                                title='Film link (Youtube/Vimeo/Google Drive)'
                            />

                            <InputBox
                                title='Title'
                            />
                        </div>

                        <div className='bmb-right-div'>

                        </div>
                </div>
            </div>
        </>

    );
}

export default Booking;