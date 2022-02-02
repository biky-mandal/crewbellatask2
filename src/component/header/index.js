import React, { useState } from 'react';

import { FiUser, FiSearch } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { BsCalendar4Event } from 'react-icons/bs';

import Logo from '../../resources/crewbella.png';

import './header.css'; // Importing css file 
import { NavLink } from 'react-router-dom';


const Header = (props) => {

    const [searchValue, setSearchValue] = useState();

    return(
        <header className='header-div'>
            <span className='logo'><img src={Logo}/></span>
            
            <div className='navs'>
                <NavLink to='/' className='nav-item'>
                    <span><GoHome/></span>
                    <label>Home</label>
                </NavLink>

                <NavLink to='/booking' className='nav-item'>
                    <span><BsCalendar4Event/></span>
                    <label>BOOKING</label>
                </NavLink>

                <NavLink to='/account' className='nav-item'>
                    <span><FiUser/></span>
                    <label>Account</label>
                </NavLink>
            </div>

            <div className='search-div'>
                <span><FiSearch/></span>
                <input 
                    className='search-bar'  
                    placeholder='search'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </header>
    );
}

export default Header;