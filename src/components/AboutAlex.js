import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaCompass } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import Aos from "aos"
import "aos/dist/aos.css"

const AboutAlex = () => {
    useEffect(() => {
        Aos.init({})
    }, [])

    const data = useStaticQuery(graphql`
        query {
        allFile(
            filter: {
            ext: { regex: "/(jpg)|(png)|(jpeg)/" }
            name: { in: ["AR_headshot"] }
            }
        ) {
            edges {
            node {
                childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            }
        }
        }
    `)
    return (
        <TestimonialsContainer>
            <TopLine
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                Your Travel Advisor
            </TopLine>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial
                        data-aos="fade-right"
                        data-aos-delay="150"
                        data-aos-duration="1200"
                    >
                        <FaCompass
                        css={`
                            color: #cc9999;
                            font-size: 2rem;
                            margin-bottom: 1rem;
                        `}
                        />
                        <h3>I'm Alex Raymond</h3>
                        <p>
                        {" "}
                        Travel will always tell a story. As one of the purest forms of transformation, it provides wishful thinking, imagination, new experiences and new tastes. Whether you’re looking to step outside your comfort zone, embark on a romantic getaway or just hit pause on your fast-paced life, I create tailor-made vacations that can have an outlook-altering effect perfectly curated to your specific personality. With a background in public relations and client service, I understand the importance of building that unique relationship and really listening to the finest details of your tastes and interests in an effort to give you the most substantive and enriching experience any destination has to offer. Travel is a gift, now more than ever, and sharing in the planning of trips that inspire others to embrace the unknown and seek adventure whenever possible will always be my passion.
                        </p>
                        <Link to ="https://facebook.com/alexraymondtravels/">
                            <FaFacebookSquare alt='Facebook' 
                                css={`
                                color: #cc9999;
                                font-size: 2rem;
                                margin-top: 1rem;
                                margin-right: 1rem;
                                margin-bottom: 1rem;
                            `}
                            />
                        </Link>
                        <Link to ="https://www.instagram.com/alexraymondtravels/">
                            <FaInstagramSquare alt='Instagram' 
                                css={`
                                color: #cc9999;
                                font-size: 2rem;
                                margin-top: 1rem;
                                margin-bottom: 1rem;
                            `}
                            />
                        </Link>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1200"
                >
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid} />
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default AboutAlex

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fffff0;
    color: #2a2a2a;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
    `

const TopLine = styled.p`
    color: #cc9999;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
    `

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr;
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-family: 'Playfair Display';
    font-style: italic;
}

p {
    color: #2a2a2a;
}
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1;
    margin-top: 2rem;
    grid-gap: 10px;

@media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
}
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
