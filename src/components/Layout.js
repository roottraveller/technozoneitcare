import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../assets/sass/global.scss';

export default class Layout extends Component {
    render() {
        const { children } = this.props;
        const keywords = 'technician, it support, webcam, laptop, desktop, electric, cctv camera, smart door' +
            'time attendance device, door phone device, intercom, power supply, wireless camera, wireless, ' +
            'computer systems, servers, routing, switching, workstations, internet';

        return (
            <StaticQuery
                query={graphql`
                  query SiteTitleQuery {
                    site {
                      siteMetadata {
                        title
                      }
                    }
                  }
                `}

                render={data => (
                    <>
                        <Helmet
                            title={data.site.siteMetadata.title}
                            meta={[
                                { name: 'description', content: 'It services based company' },
                                { name: 'keywords', content: keywords },
                                { author: 'author', content: 'roottraveller' },
                            ]}>
                            {/*Use by show more less button*/}
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
                            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"/>
                            <html lang="en"/>
                        </Helmet>
                        <div className={'hithere'}>{children}</div>
                    </>
                )}

            />
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
