import React from 'react';

import computer from "../assets/images/services/computer.jpg";
import cctv from "../assets/images/services/cctv.jpg";
import card_swip from "../assets/images/services/card_swip.jpg";
import access_control from "../assets/images/services/access_control.jpg";
import finger_print_lock from "../assets/images/services/finger_print_lock.jpg";
import fire_sensor from "../assets/images/services/fire_sensor.jpg";
import server from "../assets/images/services/server.jpg";
import wiring from "../assets/images/services/wiring.jpg";
import scrap from "../assets/images/services/scrap.jpg";
import biometric from "../assets/images/services/biometric.jpg";

export default function Services() {
    return (
        <section id="services" className="services-section bg-light">
            <div className="container">
                <h1 className="text-black mb-4 text-monospace text-center">Services</h1>
                <hr className="my-4"/>

                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={computer} alt=""/>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Computer Laptop and Desktop</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={cctv} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">CCTV Camera & Spy Products</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={card_swip} alt=""/>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Smart Time Attendance & Access Control</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={access_control} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Smart Door Access & Alerm System</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={biometric} alt=""/>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Biometric Card Reader</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={finger_print_lock} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Finger Print lock & Door Interlocking System</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={fire_sensor} alt=""/>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Fire Alarm System</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={server} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Server & Data Center Solutions</h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={wiring} alt=""/>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Home & Office Electric Wiring
                                    </h4>
                                    <p className="mb-0 text-white-50">
                                        An example of text here
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 mr-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={scrap} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Household Scrap</h4>
                                    <p className="mb-0 text-white-50">
                                        Electronics appliances,
                                        Electronic Scrap,
                                        Electrical Scrap,
                                        Battery Recycling
                                    </p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}