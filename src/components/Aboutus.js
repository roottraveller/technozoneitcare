import React from 'react';
import ipad from "../assets/images/ipad.png";

export default function Aboutus() {
    return (
        <section id="whyus" className="about-section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="text-white mb-4">About us</h2>
                        <p className="text-white-50">
                            We are one of the best <strong>IT & Service provider</strong> companies in the north-west of
                            India. Our services are designed to take your business to the next level, reducing the gap
                            between you and the heights of success you wish to achieve. Empowered by 12+ years of
                            experience in the field of IT, We have the right expertise to help you with all your
                            technology needs. We have consistently delivered optimal solutions for our wide-ranging
                            client base.
                            <br/>
                            <br/>
                            The best part, you get a combination of human talent who are certified and experienced to
                            manage your project. A quality IT service provider will have the assets to begin new tasks
                            immediately, with an effect on the versatility of projects it has dealt with! Reduce the
                            risks and increase compliance and security for your project by hiring one of the
                            best IT firms,<strong> Techno-Zone ITcare</strong>.
                            <br/>
                            <br/>
                            <strong>Techno-Zone ITcare </strong> has established itself as a leading name in providing
                            exceptional technology solutions and services that always adhere to globally recognized
                            standards and latest technology trends. Through our offerings, we help organizations attain
                            our client's business objectives thus driving them to success.
                            <br/>
                            <br/>
                            We have a very strong service provider and distributor base within and outside Mumbai. Any
                            <strong>individual, corporate client or society></strong> who wishes to join the best IT
                            services, It is us. We understand that you want to run your business and your time and
                            energy should not be spent dealing with a computer system. All is taken care of by us.
                            Further, we dedicate countless hours to research and understand the new technologies, which
                            will assist you in obtaining your goals. Our goal is our's client's happiness.
                        </p>
                    </div>
                </div>
                <img src={ipad} className="img-fluid" alt=""/>
            </div>
        </section>
    );
}