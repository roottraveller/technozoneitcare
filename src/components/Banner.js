import React from 'react';
import config from "../../config";
import Scroll from "./Scroll";

export default function Banner() {
    return (
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="banner-text text-white">
                    <h6 className="welcome-text">{config.welcomeText}</h6>
                    <h3>{config.heading}</h3>
                    {/*<sub>{config.subHeading}</sub>*/}
                    <Scroll
                        type="id"
                        element="aboutus">
                        <a href="#aboutus" className="know-more btn">
                            Know more
                        </a>
                    </Scroll>
                </div>

                <div className="arrow bounce text-center position-absolute">
                    <Scroll
                        type="id"
                        element="aboutus">
                        <a href="#aboutus" title="know more">
                            <i className="fa fa-angle-down"/>
                        </a>
                    </Scroll>
                </div>
            </div>
        </header>
    );
}