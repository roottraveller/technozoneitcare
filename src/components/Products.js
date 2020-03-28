import React from 'react';
import cpPlus from "../assets/images/products/cp-plus.jpg";
import hikeVision from "../assets/images/products/hik-vision.jpg"

export default function Products() {
    return (
        <section id="products" className="products-section bg-light">
            <div className="container">
                <h1 className="title text-black mb-4 text-monospace text-center">
                    Featured Products
                </h1>
                <hr className="my-4"/>

                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7">
                        <img className="featured-img img-fluid mb-3 mb-lg-0" src={cpPlus} alt=""/>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>CP-PLUS</h4>
                            <div className="text-black-50 mb-0">
                                <ul id="menu">
                                    <li>Network Camera</li>
                                    <li>Network Video Recorder (NVR)</li>
                                    <li>EzyHome</li>
                                    <li>Analog HD Camera</li>
                                    <li>Speed Dome(PTZ)</li>
                                    <li>Digital Video Recorder (DVR)</li>
                                    <li>Time & Attendance</li>
                                    <li>Mobile Surveillance</li>
                                    <li>Video Door Phones</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7">
                        <img className="featured-img img-fluid mb-3 mb-lg-0" src={hikeVision} alt=""/>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4><i>HIKVISION</i></h4>
                            <div className="text-black-50 mb-0">
                                <ul id="menu">
                                    <li>Network Camera</li>
                                    <li>Analog Camera</li>
                                    <li>Thermal Camera</li>
                                    <li>Network Video Recorder</li>
                                    <li>Digital Video Recorder</li>
                                    <li>Encoder & Decoder</li>
                                    <li>Accessories</li>
                                    <li>Video Encode & Decode Card</li>
                                    <li>Transmission & Display</li>
                                    <li>Enterprise Network Storage</li>
                                    <li>Access Control</li>
                                    <li>Alarm</li>
                                    <li>Video Intercom</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}