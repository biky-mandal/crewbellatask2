import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../../component/header';
import { DescriptionBox, InputBox, SelectBox, SelectBoxCountry } from '../../component/input';
import bookingpic from '../../resources/bookingpic.png';
import './style.css';

const Booking = (props) => {

    const [countryData, setCountryData] = useState();

    useEffect(() => {
        const getCounties = () => {
            fetch('https://countriesnow.space/api/v0.1/countries/flag/unicode')
            .then((res) => res.json())
            .then(json => {
                setCountryData(json.data);
            })
        } 

        getCounties();
    },[]);

    console.log(countryData);

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
                        <InputBox title='Film link (Youtube/Vimeo/Google Drive)'/>
                        <InputBox title='Title' />

                        <img src={bookingpic}/>
                    </div>

                    <div className='bmb-right-div'>
                        <SelectBox/>
                        <DescriptionBox title='Film and Team description' />
                        <InputBox title='Name'/>
                        <div className='bmb-right-div-bottom'> 
                            <div className='bmb-rdb-left'>
                                <InputBox title='Phone'/>
                                <InputBox title='Instagram' />

                                {countryData ? 
                                    <SelectBoxCountry
                                        data={countryData}
                                    />
                                    :
                                    null
                                }
                            </div>

                            <div className='bmb-rdb-right'>
                                <InputBox title='Email'/>
                                <InputBox title='Facebook'/>
                                <InputBox title='Is file password protected ?' />
                            </div>

                        </div>
                            <label className='terms-agree'>By clicking 'POST NOW' you agree to our 
                                <NavLink to='terms'> Terms of POST</NavLink>
                            </label>
                        
                        <div className='final-submit-btn-div'>
                            <button className='free-btn'>POST NOW (FREE)</button>
                            <button className='paid-btn'>POST NOW (29$)</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
 );
}

export default Booking;