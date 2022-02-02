import React from 'react';

import Header from '../../component/header';
import data from '../../resources/data';
import top3d from '../../resources/top3d.png'
import { FiChevronRight } from 'react-icons/fi';
import './style.css';
import { NavLink } from 'react-router-dom';
import Challange from '../../component/challange';

const Event = (props) => {

    return(
        <>
            <Header/>
            <div className='event-main-div'>
                <div className='event-heading'>
                    <div className='event-heading-left-div'>
                        <h1>Events</h1>
                        <label>
                            we conduct various competitions that revolve around 
                            your talent. be it photography, film, illustrations. 
                            you can participate and win various prizes film, illustrations. 
                            you can participate and win various prizes.
                        </label>
                        <NavLink to='/booking' className='event-btn'>Book Event</NavLink>
                    </div>
                    <div className='event-heading-right-div'>
                        <img src={top3d}/>
                    </div>
                </div>

                <div className='event-body-div1'>
                    <NavLink to='ambassadors' className='ambassador-div'>
                        <label>Ambassador Program</label>
                        <span><FiChevronRight/></span>
                    </NavLink>

                    <NavLink  to='event-recents' className='ambassador-div'>
                        <label>Winners and Jury</label>
                        <span><FiChevronRight/></span>
                    </NavLink>
                </div>


                {/* Challage section started Here */}

                {
                    data ? data.map(dta => {
                        return(
                            <Challange
                                className = {dta.className}
                                title1={dta.title1}
                                title2={dta.title2}
                                title3={dta.title3}

                                description={dta.description}
                                img = {dta.img}
                                challanges = {dta.challanges}
                            />
                        )
                    })
                    :
                    <div>Loading...</div>
                }
            </div>
        </>
    );
}

export default Event;