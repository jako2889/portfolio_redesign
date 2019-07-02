import React, { Component } from 'react';
import "../css/About.scss";
import "../css/projects.scss";
import { TimelineLite } from "gsap";
import DanskespilPic from "../Assets/danskespil_project.JPG";
import CPHPIC from "../Assets/cph.jpg";
import Services from "./Services.jsx";

export class projects extends Component {
    constructor(props) {
        super(props);
        // reference to the DOM node

        this.myTween2 = new TimelineLite({paused: true});
        this.ArrayElements = [
            {
                name: "Danske Spil",
                class: "DanskeSpil",
                text: "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right? The best taco bowls are made in Trump Tower Grill. I love Hispanics! It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. My text is long and beautiful, as, it has been well documented, are various other parts of my website.",
                link: "www.google.com"
            },
            {
                name: "Copenhagen Watches",
                class: "CopenhagenWatches",
                text: "Does everybody know that pig named Lorem Ipsum? She's a disgusting pig, right? The best taco bowls are made in Trump Tower Grill. I love Hispanics! It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again. My text is long and beautiful, as, it has been well documented, are various other parts of my website.",
                link: "www.google.com"
            }
        ];
      }
    
      componentDidMount() {
          
        this.myTween2.staggerTo(this.ArrayElements, 0.5, {y: 0, opacity: 1, delay: 1}, 0.1).play();

      }
    render() {
        return (
            <div className="project_wrapper">
            <div className="projects">
            <div className="project_con">
                <div className="project_text">
                <h2>{this.ArrayElements[0].name}</h2>
                <p>{this.ArrayElements[0].text}</p>
                <button>See project</button>
                </div>
                <img src={DanskespilPic} alt={DanskespilPic}/>
            </div>
            </div>
            <Services />
            <div className="projects">
            <div className="project_con">
                <div className="project_text">
                <h2>{this.ArrayElements[1].name}</h2>
                <p>{this.ArrayElements[1].text}</p>
                <button>See project</button>
                </div>
                <img src={CPHPIC} alt={CPHPIC}/>
            </div>
            </div>
            </div>
        )
    }
}

export default projects
