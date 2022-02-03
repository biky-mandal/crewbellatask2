import React from 'react';
import { useParams } from 'react-router-dom';

import './style.css';

const Payment = (props) => {
    const params = useParams();

    const data = JSON.parse(params.finalData);
    return(
        <div className='payment-main-div'>
            <h1>All information entered by User</h1>
            {
                data ? 
                    <div className='payment-content-div'>
                        <label>Link: <span>{data.link}</span></label>
                        <label>Title: <span>{data.title}</span></label>
                        <label>Visibility: <span>{data.visibility}</span></label>
                        <label>Description: <span>{data.description}</span></label>
                        <label>Name: <span>{data.name}</span></label>
                        <label>Phone Number: <span>{data.phone}</span></label>
                        <label>Instagram ID: <span>{data.instagram}</span></label>
                        <label>Facebook ID: <span>{data.facebook}</span></label>
                        <label>Country: <span>{data.country}</span></label>
                        <label>Email: <span>{data.email}</span></label>
                        <label>Protected PassWord: <span>{data.protectedPass}</span></label>

                    </div>
                :
                <div>Enter all information and Come to this page.</div>
            }
        </div>
    );
}

export default Payment;