import React, { Component } from 'react';
import config from '../../config';
import solo2 from '../assets/images/portfolio/solo2.jpg';


export default class Portfolio extends Component {

    showMoreLess = () => {
        if (document.getElementById('morelessBtn').textContent === 'Show More') {
            document.getElementById('morelessBtn').innerHTML = 'Show Less';
        } else {
            document.getElementById('morelessBtn').innerHTML = 'Show More';
        }
    };


    render() {
        return (
            <section id="portfolio" className="portfolio-section bg-light">
                <div className="container ">
                    <h1 className="text-black mb-4 text-monospace text-center">Who has worked with us</h1>
                    <hr className="my-4"/>


                    <button className="btn btn-primary"
                            id="morelessBtn"
                            onClick={this.showMoreLess}
                            type="button"
                            aria-expanded="false"
                            aria-controls="morelessContent"
                            data-toggle="collapse"
                            data-target="#morelessContent">
                        Show More
                    </button>

                    <div id="morelessContent1" className="collapse1">
                        <div className="row justify-content-center no-gutters">
                            {config.portfolioEntry.map((portfolio, idx) => {
                                const { image, service, address } = portfolio;

                                return (
                                    <div className="col-lg-4 col-md-6 portfolio-items"
                                         key={idx}>
                                        <div className="box">
                                            <div className="imgBx">
                                                <img className="img-fluid" src={solo2} alt=""/>
                                                <p className="text-on-image">{address}</p>
                                            </div>
                                            <div className="content">
                                                <h3>{service}</h3>
                                                <p>{address}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}