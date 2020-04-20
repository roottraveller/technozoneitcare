import React from "react";
import solo1 from "../assets/images/portfolio/solo2.jpg";


export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section bg-light">
            <div className="container ">
                <h1 className="text-black mb-4 text-monospace text-center">Who has worked with us</h1>
                <hr className="my-4"/>

                <div className="portfolio-items">
                    <div className="box">
                        <div className="imgBx">
                            <img className="img-fluid" src={solo1} alt=""/>
                        </div>
                        <div className="content">
                            <h2>Title</h2>
                            <p>Text here .</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img className="img-fluid" src={solo1} alt=""/>
                        </div>
                        <div className="content">
                            <h2>Title</h2>
                            <p>Text here .</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img className="img-fluid" src={solo1} alt=""/>
                        </div>
                        <div className="content">
                            <h2>Title</h2>
                            <p>Text here .</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img className="img-fluid" src={solo1} alt=""/>
                        </div>
                        <div className="content">
                            <h2>Title</h2>
                            <p>Text here .</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img className="img-fluid" src={solo1} alt=""/>
                        </div>
                        <div className="content">
                            <h2>Title</h2>
                            <p>Text here .</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBx">
                            <img className="img-fluid" src={solo1} alt=""/>
                        </div>
                        <div className="content">
                            <h2>Title</h2>
                            <p>Text here .</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}