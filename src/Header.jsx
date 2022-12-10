import React from 'react';
import './Header.css';

function Header ()
{
    return <div class="topnav">
            <a href='#user'>Specific User</a>
            <a href='#post'>All Post</a>
            <a href="#proj">Projects</a>
            <a>Education</a>

            <a class="welcome">Welcome to Monica's portfolio</a>
  </div>
}
export default Header