import React, { Component } from 'react';
import { TweenMax, Back, TimelineLite } from "gsap";
import "../css/About.scss";
import profile_picture from "../Assets/jakob.jpg";

export class About extends Component {
    constructor(props) {
        super(props);
        // reference to the DOM node
        this.myIntro = null;
        this.barJs = null;
        this.barAdobe = null;
        this.barReact = null;
        this.barOTT = null;
        // reference to the animation
        this.introTween = null;
        this.barTweenjs = null;
        this.barTweenAdobe = null;
        this.barTweenReact = null;
        this.barTweenOTT = null;

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
        // use the node ref to create the animation
        this.barTweenjs = TweenMax.from(this.barJs, 1, {
            width: 0,
            delay: .5,
            ease: Back.easeOut.config(1.0002)
          });
        // use the node ref to create the animation
        this.barTweenAdobe = TweenMax.from(this.barAdobe, 1, {
            width: 0,
            delay: .5,
            ease: Back.easeOut.config(1.0002)
          });
        // use the node ref to create the animation
        this.barTweenReact = TweenMax.from(this.barReact, 1, {
            width: 0,
            delay: .5,
            ease: Back.easeOut.config(1.0002)
          });
        // use the node ref to create the animation
        this.barTweenOTT = TweenMax.from(this.barOTT, 1, {
            width: 0,
            delay: .5,
            ease: Back.easeOut.config(1.0002)
          });

        this.myTween2.staggerTo(this.ArrayElements, 0.5, {y: 0, opacity: 1, delay: 1}, 0.1).play();;
      }
    render() {
        return (
            <div className="wrapper_about" ref={div => (this.myIntro = div)}>
                <div className="container_about">
                <div className="intro">
                    <div className="text">
                    <h1>HI. NICE TO MEET YOU!</h1>
                    <p>I'm a multimedia designer and always learning web developer.
                    I like creating beautiful and unique websites and digital content! Below you can see a little about me and some projects i've been doing.</p>
                    <div className="skills">
                    <h3>Skills</h3>
                    <div className="javascript" ref={div => (this.barJs = div)}>Javascript</div>
                    <div className="Adobe" ref={div => (this.barAdobe = div)}>Adobe</div>
                    <div className="React" ref={div => (this.barReact = div)}>React</div>
                    <div className="OtherTechTools" ref={div => (this.barOTT = div)}>GSAP, SASS etc</div>
                    </div>
                    </div>
                    <img src={profile_picture} alt={profile_picture}/>
                    <div className="scroll-down"></div>    
                </div>
                <div className="projects">
                <h2>Projects i've been doing.</h2>    
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
                </div>
            </div>
        )
    }
}

export default About
