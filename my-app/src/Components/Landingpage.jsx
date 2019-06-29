import React, { Component } from 'react';
import "../css/Landingpage.scss";

export class Landingpage extends Component {

      componentDidMount() {
        
      }
    render() {
        return (
            <div ref={div => (this.myElement = div)} className="wrapper">

                <div className="container">
                    <h2>Jakob Falkenberg</h2>
                    <h1>Portfolio</h1>
                    <button className="button_fill" onClick={this.props.nextStep}>Welcome</button>
                </div>
                
            </div>
        )
    }
}

export default Landingpage
