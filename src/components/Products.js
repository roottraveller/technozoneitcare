import React from 'react';
import cpPlus from "../assets/images/products/cp-plus.jpg";
import hikeVision from "../assets/images/products/hik-vision.jpg"

export default function Products() {
    return (
        <section id="products" className="products-section bg-light">
            <div className="container">
                <h2 className="title text-black mb-4 text-monospace text-center">
                    Featured Products
                </h2>
                <hr className="my-4"/>

                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7">
                        <img className="featured-img img-fluid mb-3 mb-lg-0" src={cpPlus} alt=""/>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>CP-PLUS</h4>
                            <p className="text-black-50 mb-0">
                                Network Camera,
                                Network Video Recorder (NVR),
                                EzyHome,
                                Analog HD Camera,
                                Speed Dome(PTZ),
                                Digital Video Recorder (DVR),
                                Time & Attendance,
                                Mobile Surveillance,
                                Video Door Phones,
                                Accessories,
                            </p>
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
                            <p className="text-black-50 mb-0">
                                Network Camera,
                                Analog Camera,
                                Thermal Camera,
                                PTZ,
                                Network Video Recorder,
                                Digital Video Recorder,
                                Encoder & Decoder,
                                Accessories,
                                Video Encode & Decode Card,
                                Transmission & Display,
                                Enterprise Network Storage,
                                Access Control,
                                Alarm,
                                Video Intercom
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}