import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

import Layout from '../components/Layout';
import Header from '../components/Header';

const IndexPage = () => (
    <Layout>
        <Header/>
        <header className="masthead">
            <form name=""
                  method=""
                  action=""
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="text-center text-md-center">
                <input type="hidden" name="form-name" value=""/>
                <input type="hidden" name="bot-field"/>



            </form>
            <div className="position-absolute text-white" style={{top: 400, left: 400 }}>
                <ReCAPTCHA sitekey="6LcaTuAUAAAAAEZRuZBlfWmf4L7tl8CP9OGrK1aZ"/>
            </div>

        </header>
    </Layout>
);

export default IndexPage;
