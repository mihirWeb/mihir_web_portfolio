import React from 'react';
import Hamburger from './hamburger';

function Navbar(){
    return(

        <div className='navbar'>
            <ul className='navbar-list'>
                <li><Hamburger /></li>
                <li className='my-name'><a href='#.'>  Mihir Pratap Singh</a></li>
                
            </ul>
            <div className='nav-menu-items'>
                <ul className='menu-item-list'>
                    <li><h1>Home.</h1></li>
                    <li><h1>About Me.</h1></li>
                    <li><h1>Skills.</h1></li>
                    <li><h1>Work.</h1></li>
                    <li><h1>Contact.</h1></li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;