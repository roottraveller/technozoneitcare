import React from 'react';
import config from "../../config";
import Scroll from "./Scroll";

export default function Banner() {
    return (
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">
                        {config.subHeading}
                    </h2>
                </div>
                <div className="arrow bounce text-center position-absolute">
                    <Scroll
                        type="id"
                        element="aboutus"
                    >
                        <a href="#aboutus" title="know more">
                            <i className="fa fa-angle-down"/>
                        </a>
                    </Scroll>
                </div>
            </div>
        </header>
    );
}