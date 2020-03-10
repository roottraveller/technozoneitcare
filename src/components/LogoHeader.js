import React from 'react';
import config from '../../config';
import {Link} from 'gatsby';

export default function LogoHeader() {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light fixed-top`}
            id="mainNav"
        >
            <div className="container logo">
                <Link className="navbar-brand" to="/">
                    {config.siteTitle}
                </Link>

            </div>
        </nav>
    );
}
