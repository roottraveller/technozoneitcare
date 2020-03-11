import React, {Component} from 'react';
import Scroll from './Scroll';
import config from '../../config';
import {Link} from 'gatsby';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
            visibilityClass: '',
        };
    }

    toggleMenu = value => {
        this.setState({openMenu: value});
    };

    handleScroll = () => {
        const {visibilityClass} = this.state;
        if (window.pageYOffset > 300) {
            if (visibilityClass !== 'navbar-shrink') {
                this.setState({visibilityClass: 'navbar-shrink'});
            }
        } else {
            if (visibilityClass === 'navbar-shrink') {
                this.setState({visibilityClass: ''});
            }
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const {openMenu, visibilityClass} = this.state;
        return (
            <nav
                className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
                id="mainNav"
            >
                <div className="container">
                    <Scroll
                        onClick={_ => this.toggleMenu(!openMenu)}
                        type="class"
                        element="hithere"
                    >
                        <a className="navbar-brand" href="#hithere">
                            {config.siteTitle}
                        </a>
                    </Scroll>
                    <button
                        onClick={_ => this.toggleMenu(!openMenu)}
                        className={`navbar-toggler navbar-toggler-right ${
                            openMenu ? '' : 'collapsed'
                            }`}
                        type="button"
                        aria-controls="navbarResponsive"
                        aria-expanded={openMenu}
                        aria-label="Toggle navigation"
                    >
                        Menu &nbsp;&nbsp;
                        {/*case of small screen*/}
                        <i className="fas fa-bars"/>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
                        id="navbarResponsive"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Scroll
                                    onClick={_ => this.toggleMenu(!openMenu)}
                                    type="id"
                                    element="aboutus"
                                >
                                    <a className="nav-link" href="#aboutus">
                                        Why Us
                                    </a>
                                </Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll
                                    onClick={_ => this.toggleMenu(!openMenu)}
                                    type="id"
                                    element="products"
                                >
                                    <a className="nav-link" href="#products">
                                        Products
                                    </a>
                                </Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll
                                    onClick={_ => this.toggleMenu(!openMenu)}
                                    type="id"
                                    element="services"
                                >
                                    <a className="nav-link" href="#services">
                                        Services
                                    </a>
                                </Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll
                                    onClick={_ => this.toggleMenu(!openMenu)}
                                    type="id"
                                    element="contact"
                                >
                                    <a className="nav-link" href="#contact">
                                        Contact
                                    </a>
                                </Scroll>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/Support" className="nav-link">
                                    Help & Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
