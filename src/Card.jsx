import React from 'react'
import './Card.css'
import coursera from './coursera.png'
import linkedin from './linkedin.png'
import "./Image.css";


function Card () 
{
    return <div className='row'>
        <center>
        <h1>Certifications</h1>
    <div class="column">
    <img className='course' src={linkedin} alt=""/>
        <h2>Selenium </h2>
        <p>Issued by: LinkedIn Learning</p>
        <hr></hr>

    </div>

    <div class="column">
    <img className='course' src={linkedin} alt=""/>
        <h2>JIRA</h2>
        <p>Issued by: LinkedIn Learning</p>
        <hr></hr>

    </div>

    <div class="column">
    <img className='course' src={coursera} alt=""/>
        <h2>Object-oriented Programming</h2>
        <p>Issued by: Coursera</p>
        <hr></hr>
    </div>
    </center>
    </div>

}

export default Card