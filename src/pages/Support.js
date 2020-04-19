import React from 'react';

import Layout from '../components/Layout';
import SupportForm from "../components/SupportForm";
import LogoHeader from "../components/LogoHeader";

const IndexPage = () => (
    <Layout>
        <LogoHeader/>

        <header className="masthead" style={{paddingTop: "6rem", paddingBottom: "0rem"}}>
            <div className="help-support">
                <div className="text-justify text-white" style={{padding: "5px"}}>
                    Welcome to Techno-Zone Itcare help & support.
                    <br/><br/>
                    Need assistance with our products or services? We’ll get you the help you need.
                    Please fill up your query. We will get back to you at earliest. Need to talk to
                    someone? Please call +91-95942-80890.
                </div>

                <br/>
                <SupportForm/>

            </div>
        </header>
    </Layout>
);

export default IndexPage;
