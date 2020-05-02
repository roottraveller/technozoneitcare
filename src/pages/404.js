import React from 'react';

import Layout from '../components/Layout';
import { Link } from 'gatsby';
import LogoHeader from '../components/LogoHeader';

const IndexPage = () => (
    <Layout>
        <LogoHeader/>

        <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
                <div className="mx-auto text-center">
                    <span role="img" aria-label="heart" className="emoji_404">☹️</span>
                    <h1 className="mx-auto my-0 text-uppercase text-white">Page not found</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Not a valid URL</h2>
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>
                </div>
            </div>
        </header>
    </Layout>
);

export default IndexPage;
