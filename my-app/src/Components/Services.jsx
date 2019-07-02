import React, { Component } from 'react';
import "../css/Services.scss";

export class Services extends Component {
    render() {
        return (
            <div className="service_con">
                <h2>Services</h2>
                <div className="bar"></div>
                <div className="lists_con">
                <div className="list">
                    <h2>Discover</h2>
                    <ul>
                        <li>Research</li>
                        <li>Business</li>
                        <li>ideation</li>
                        <li>scrum</li>
                    </ul>
                </div>
                <div className="list">
                    <h2>Design</h2>
                    <ul>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Branding</li>
                        <li>Premiere</li>
                        <li>UX &amp; UI</li>
                    </ul>
                </div>
                <div className="list">
                    <h2>Development</h2>
                    <ul>
                        <li>Git &amp; Terminal</li>
                        <li>Javascript</li>
                        <li>Html &amp; Css</li>
                        <li>Tech Tools</li>
                        <li>React</li>
                    </ul>
                </div>  
                </div>              
            </div>
        )
    }
}

export default Services
