import React, { Component } from 'react';
import Landingpage from "./Landingpage.jsx";
import About from "./About.jsx";

export class FrontPageState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1
        };
      }
          // PROCEED TO NEXT STEP
    nextStep = (e) => {
        e.preventDefault();

        const { step } =  this.state;
        this.setState({
            step: step + 1
        });
    }

    // BACK TO PREVIOUS STEP
    prevStep = () => {
        const { step } =  this.state;
        this.setState({
            step: step - 1
        });
    }
    render() {
        const step = this.state.step;
        switch(step) {
            case 1:
              return <Landingpage
              nextStep={this.nextStep} />;
            case 2:
              return <About
              nextStep={this.nextStep}
              prevStep={this.prevStep} />;
            default:
              return null;
          }
    }
}

export default FrontPageState
