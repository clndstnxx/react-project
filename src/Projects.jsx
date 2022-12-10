import React from "react"
import "./Image.css";
import postcode from "./postcode.png"
import kiddoit from "./kiddoit.png"

function Projects(){
    return<div className="row" id="proj">
      <center>
      <h1>My Projects</h1>
<div class="row">
  <div class="project">
      <img className='postcode' src={postcode} alt=""/>
  </div>
  <div class="project">
    <h3>POSTCODE</h3>
    <p>POSTCODE is a mobile-based Truck Sharing Application that connects users and the truck driver to send, deliver, and receive packages</p>
  </div>
</div>

<div class="row">
  <div class="project">
  <img className='kiddoit' src={kiddoit} alt=""/>
  </div>
  <div class="project">
    <h3>Kiddo.It</h3>
    <p>KIDDO.IT is a web-based Child Learning Support. The main features of this application are providing engaging and fun materials for children.</p>
  </div>
</div>
</center>
      

  
</div>

}

export default Projects