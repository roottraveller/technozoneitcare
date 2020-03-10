import React from 'react';

import Layout from '../components/Layout';
import {Link} from 'gatsby';
import LogoHeader from "../components/LogoHeader";

const IndexPage = () => (
    <Layout>
        <LogoHeader/>
        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <h1 className="mx-auto my-0 text-uppercase">Thank you!</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">
                        You have successfully subscribed for new updates.
                    </h2>
                    <Link to="/" className="btn btn-primary">
                        Go Back
                    </Link>
                </div>
            </div>
        </header>
    </Layout>
);

export default IndexPage;
