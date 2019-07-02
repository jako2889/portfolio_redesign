import React, { Component } from 'react';
import "../css/Header.scss";
import Logo from "../Assets/Logo.svg";

export class Header extends Component {
    render() {
        return (
            <div className="header_wrapper">
                <div className="header_con">
                    <img src={Logo} alt={Logo}/>
                    <div className="header_links">
                        <a href="">CV</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
