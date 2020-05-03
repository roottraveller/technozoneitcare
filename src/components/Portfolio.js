import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';


export default class Portfolio extends Component {

    showMoreLess = () => {
        if (document.getElementById('morelessBtn').textContent === 'Show More') {
            document.getElementById('morelessBtn').innerHTML = 'Show Less';
        } else {
            document.getElementById('morelessBtn').innerHTML = 'Show More';
        }
    };


    render() {
        return (
            <StaticQuery
                query={graphql`
                  {
                    allPortfolioJson {
                      edges {
                        node {
                          id
                          image
                          service
                          address
                        }
                      }
                    }
                    
                    allPortfolioImages: allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
                      edges {
                        node {
                          childImageSharp {
                            fluid {
                              originalName
                               ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                `}


                render={data => (
                    <section id="portfolio" className="portfolio-section bg-light">
                        <div className="container ">
                            <h1 className="text-black mb-4 text-monospace text-center">Who has worked with us</h1>
                            <hr className="my-4"/>


                            <button className="btn btn-primary morelessBtn"
                                    id="morelessBtn"
                                    onClick={this.showMoreLess}
                                    type="button"
                                    aria-expanded="false"
                                    aria-controls="morelessContent"
                                    data-toggle="collapse"
                                    data-target="#morelessContent">
                                Show More
                            </button>


                            {/*Show First 3 entry, if there are more entries then render with show more/less button */}
                            <div className="row justify-content-center no-gutters">
                                {data.allPortfolioJson.edges.slice(0, 3).map((portfolio) => {
                                    const { id, image, service, address } = portfolio.node;

                                    // fetches the image based on the image value
                                    const imageSrc = data.allPortfolioImages.edges.find(elem =>
                                        elem.node.childImageSharp.fluid.originalName === image,
                                    );

                                    return (
                                        <div className="col-lg-4 col-md-6 portfolio-items"
                                             key={id}>
                                            <div className="box">
                                                <div className="imgBx">
                                                    <Img style={{ position: 'unset' }}
                                                         fluid={imageSrc.node.childImageSharp.fluid}/>
                                                    <p className="text-on-image">{address}</p>
                                                </div>
                                                <div className="content">
                                                    <h3>{service}</h3>
                                                    <p>{address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/*if there are more entries > 3 then render with show more/less button*/}
                            <div id="morelessContent" className="collapse">
                                <div className="row justify-content-center no-gutters">
                                    {data.allPortfolioJson.edges.slice(3).map((portfolio) => {
                                        const { id, image, service, address } = portfolio.node;

                                        // fetches the image based on the image value
                                        const imageSrc = data.allPortfolioImages.edges.find(elem =>
                                            elem.node.childImageSharp.fluid.originalName === image,
                                        );

                                        return (
                                            <div className="col-lg-4 col-md-6 portfolio-items"
                                                 key={id}>
                                                <div className="box">
                                                    <div className="imgBx">
                                                        <Img style={{ position: 'unset' }}
                                                             fluid={imageSrc.node.childImageSharp.fluid}/>
                                                        <p className="text-on-image">{address}</p>
                                                    </div>
                                                    <div className="content">
                                                        <h3>{service}</h3>
                                                        <p>{address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </section>
                )}
            />
        );
    }
}