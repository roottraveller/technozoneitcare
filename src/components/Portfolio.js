import React from "react";
import config from "../../config";

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section bg-light">
            <div className="container ">
                <h1 className="text-black mb-4 text-monospace text-center">Who has worked with us</h1>
                <hr className="my-4"/>

                <div className="portfolio-items">
                    {config.portfolioEntry.map((portfolio, idx) => {
                        const {image, service, address} = portfolio;
                        return (
                            <div className="box" key={idx}>
                                <div className="imgBx">
                                    <img className="img-fluid" src={image} alt=""/>
                                </div>
                                <div className="content">
                                    <h3>{service}</h3>
                                    <p>{address}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}