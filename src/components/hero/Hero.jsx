import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";
export const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>
                        <h1>Tag line goes <br/>
                            here here <br/>
                            here here
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>description goes 1 1 1 1 1 1 1</span>
                        <span>description goes 2 2 2 22 2 2 2</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text"/>
                        <button className="button">Search</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Buzz word
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span><span className="secondaryText">
                                2uzz word
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span><span className="secondaryText">
                                3uzz word
                            </span>
                        </div>
                    </div>

                </div>
                {/* right side*/}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="hero image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero