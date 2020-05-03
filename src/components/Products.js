import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';


export default function Products() {

    return (
        <StaticQuery
            query={graphql`
                  {
                    allProductsJson {
                      edges {
                        node {
                          id
                          image
                          brand
                          items
                        }
                      }
                    }
                    
                    allProductImages: allFile(filter: {relativeDirectory: {eq: "products"}}) {
                      edges {
                        node {
                          childImageSharp {
                            fluid(maxWidth: 500, maxHeight: 500) {
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
                <section id="products" className="products-section bg-light">
                    <div className="container">
                        <h1 className="title text-black mb-4 text-monospace text-center">
                            Featured Products
                        </h1>
                        <hr className="my-4"/>


                        {
                            data.allProductsJson.edges.map((products) => {
                                const { id, image, brand, items } = products.node;

                                // fetches the image based on the image value
                                const imageSrc = data.allProductImages.edges.find(elem =>
                                    elem.node.childImageSharp.fluid.originalName === image,
                                );

                                return <div className="row align-items-center no-gutters mb-4 mb-lg-5" key={id}>
                                    <div className="col-xl-8 col-lg-7">
                                        <Img style={{ position: 'unset' }}
                                             className="featured-img"
                                             fluid={imageSrc.node.childImageSharp.fluid}/>
                                    </div>
                                    <div className="col-xl-4 col-lg-5">
                                        <div className="featured-text text-center text-lg-left">
                                            <h4>{brand}</h4>
                                            <div className="text-black-50 mb-0">
                                                <ul id="menu">
                                                    {
                                                        items.map((item, idx) => {
                                                            return <li key={idx}>{item}</li>;
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>;
                            })}

                    </div>
                </section>
            )}
        />
    );
}