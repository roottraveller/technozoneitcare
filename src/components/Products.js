import React from 'react';
import bgMaster from "../assets/images/bg-masthead.jpg";

export default function Products() {
    return (
        <section id="products" className="products-section bg-light">
            <div className="container">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7">
                        <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt=""/>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Shoreline</h4>
                            <p className="text-black-50 mb-0">
                                Grayscale is open source and MIT licensed. This means you can
                                use it for any project - even commercial projects! Download it,
                                customize it, and publish your website!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}