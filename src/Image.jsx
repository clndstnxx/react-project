import React from "react";
import wallpaper from "./wallpaper.jpeg"
import monica from "./monica.png"
import "./Image.css";

function Image(){
    return(
        <div>
            <img className='wallpaper' src={wallpaper} alt=""/>
            <center><h3>I am a QA Engineer based in Melbourne, Australia</h3></center>
            <center><img className='monica' src={monica} alt=""/></center>
            <hr></hr>
        </div>
    )
}

export default Image;