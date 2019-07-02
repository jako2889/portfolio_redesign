import React, { Component } from 'react';
import "../css/GetInTouch.scss";
import Coffee from "../Assets/004-cafe.svg";
import JakobGit from "../Assets/jakob_GIT.jpg";

export class GetInTouch extends Component {
    render() {
        return (
            <div className="GetInTouch_wrapper">
                <h2>Get In Touch!</h2>
                <div className="bar"></div> 
                <div className="GIT_container">
                <div className="GIT_content">
                <div className="GIT_Text">
                  <h2>Address</h2>
                  <p>Tværvangen 15, København N, DK</p>
                  <h2>Email</h2>
                  <a href = "mailto: jakobfalkenberg22@gmail.com">Jakobfalkenberg22@gmail.com</a>
                  <h2>Phone</h2>
                  <a href="tel:+4520662811">+45 20 66 28 11</a>
                  <h2>LinkedIN</h2>
                  <a href="www.google.com">Jakob Linkedin</a>   
                </div>
                <img src={JakobGit} alt={JakobGit}/>
                </div>
                </div>
                <h3>Lets grap a coffee and talk!</h3>
                <img src={Coffee} alt={Coffee}/>
                <img src={Coffee} alt={Coffee}/>
                <img src={Coffee} alt={Coffee}/>
            </div>
        )
    }
}

export default GetInTouch
