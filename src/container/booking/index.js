import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Header from '../../component/header';
import { DescriptionBox, InputBox, SelectBox, SelectBoxCountry } from '../../component/input';
import bookingpic from '../../resources/bookingpic.png';
import './style.css';

const Booking = (props) => {

    const navigate = useNavigate();

    const [countryData, setCountryData] = useState();

    // all booking data
    const [link, setLink] = useState();
    const [title, setTitle] = useState();
    const [visibility, setVisibility] = useState();
    const [description, setDescription] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [instagram, setInstagram] = useState();
    const [facebook, setFacebook] = useState();
    const [country, setCountry] = useState();
    const [email, setEmail] = useState();
    const [protectedPass, setProtectedPass] = useState();


    // getting Country data from API
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

    // Getting all data from child Component
    // This function will invoke in respective child component
    const getData = (name, data) => {
        if(name === 'Link') setLink(data);
        if(name === 'Title') setTitle(data);
        if(name === 'Visibility') setVisibility(data);
        if(name === 'Description') setDescription(data);
        if(name === 'Name') setName(data);
        if(name === 'Phone') setPhone(data);
        if(name === 'Instagram') setInstagram(data);
        if(name === 'Facebook') setFacebook(data);
        if(name === 'Country') setCountry(data);
        if(name === 'Email') setEmail(data);
        if(name === 'Protected') setProtectedPass(data);
    }

    // this function will check input and prceed to Payment page..
    const toPaymentPage = () => {

        if(link && title && visibility && description){
            const data = {
                link, title, visibility, description, name, phone, instagram, facebook, country, email, protectedPass
            }
    
            const finalData = JSON.stringify(data);
            navigate(`/payment/${finalData}`);

        }else{
            alert('enter all data!')
        }

    }


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
                            name='Link'
                            title='Film link (Youtube/Vimeo/Google Drive)' 
                            placeholder='https://youtu.be/2E47X2F0iRY'
                            getData = {getData}/>
                        <InputBox 
                            name='Title'
                            title='Title' 
                            placeholder='Title'
                            getData = {getData}/>

                        <img src={bookingpic}/>
                    </div>

                    <div className='bmb-right-div'>
                        <SelectBox name='Visibility' getData={getData}/>
                        <DescriptionBox name='Description' title='Film and Team description' placeholder='Description' getData = {getData}/>
                        <InputBox name='Name' title='Name' placeholder='Biky Mandal' getData = {getData}/>
                        <div className='bmb-right-div-bottom'> 
                            <div className='bmb-rdb-left'>
                                <InputBox name='Phone' title='Phone' placeholder='8472802283' getData = {getData}/>
                                <InputBox name='Instagram' title='Instagram' placeholder='mbiky12' getData = {getData}/>

                                {countryData ? 
                                    <SelectBoxCountry
                                        name='Country'
                                        data={countryData}
                                        getData = {getData}
                                    />
                                    :
                                    null
                                }
                            </div>

                            <div className='bmb-rdb-right'>
                                <InputBox name='Email' title='Email' placeholder='mbiky50@gmail.com' getData = {getData}/>
                                <InputBox name='Facebook' title='Facebook' placeholder='biky.mandal.1' getData = {getData}/>
                                <InputBox name='Protected' title='Is file password protected ?' placeholder='Enter Pass' getData = {getData}/>
                            </div>

                        </div>
                            <label className='terms-agree'>By clicking 'POST NOW' you agree to our 
                                <NavLink to='terms'> terms of use</NavLink>.
                            </label>
                        
                        <div className='final-submit-btn-div'>
                            <button onClick={toPaymentPage} className='free-btn'>POST NOW (FREE)</button>
                            <button onClick={toPaymentPage} className='paid-btn'>POST NOW (29$)</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <label>Developed by <span>BIKY MANDAL</span></label>
            </div>
        </>
 );
}

export default Booking;