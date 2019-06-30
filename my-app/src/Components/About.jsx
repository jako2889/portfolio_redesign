import React, { Component } from 'react';
import { TweenMax, Back, TimelineLite } from "gsap";
import "../css/About.scss";

export class About extends Component {
    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myIntro = null;
        // reference to the animation
        this.introTween = null;

        this.myTween2 = new TimelineLite({paused: true});
        this.ArrayElements = [
            {
                name: "Danske Spil",
                class: "DanskeSpil"
            },
            {
                name: "Copenhagen Watches",
                class: "CopenhagenWatches"
            },
            {
                name: "Alm. Brand",
                class: "AlmBrand"
            },
            {
                name: "Huset",
                class: "Huset"
            },
        ];
      }
    
      componentDidMount() {
        // use the node ref to create the animation
        this.introTween = TweenMax.from(this.myIntro, 1, {
          y: 1100,
          ease: Back.easeOut.config(1.0002)
        });

        this.myTween2.staggerTo(this.ArrayElements, 0.5, {y: 0, opacity: 1, delay: 1}, 0.1).play();;
      }
    render() {
        return (
            <div className="wrapper" ref={div => (this.myIntro = div)}>
                <h1>Welcome!</h1>
                <ul>
                    {this.ArrayElements.map((element, index) => <li
                        className={element.class}
                        key={element.name}
                        ref={li => this.ArrayElements[index] = li}
                    >
                        {element.name}
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default About
