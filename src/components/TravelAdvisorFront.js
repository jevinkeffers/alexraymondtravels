import React, { useEffect } from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Img from "gatsby-image"
import { AiFillQuestionCircle } from "react-icons/ai"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from './Button'
import Aos from "aos"
import "aos/dist/aos.css"

const TravelAdvisor = () => {
    useEffect(() => {
        Aos.init({})
    }, [])

    const data = useStaticQuery(graphql`
        query {
        allFile(
            filter: {
            ext: { regex: "/(jpg)|(png)|(jpeg)/" }
            name: { in: ["compass"] }
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
                Your Guide To The World
            </TopLine>
            {/* <Description
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
            >
                What People are Saying
            </Description> */}
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial
                        data-aos="fade-right"
                        data-aos-delay="150"
                        data-aos-duration="1200"
                    >
                        <AiFillQuestionCircle
                        css={`
                            color: #cc9999;
                            font-size: 2rem;
                            margin-bottom: 1rem;
                        `}
                        />
                        <h3>Why Travel With An Advisor?</h3>
                        <p>
                            {" "}
                            Peace of mind, exclusivity, insider knowledge and experience are just a few of the reasons why a trusted travel advisor can be your most loyal confidante. Let's talk about why traveling with a personal advisor will make your trip a dream come true.
                        </p>
                        <div>
                        <Button 
                            primary='true'
                            big='false' 
                            round='true'
                            to='/travel-advisor'
                            data-aos="flip-up"
                            data-aos-delay="350"
                            data-aos-duration="3000"
                            css={`
                                color: #FFFFF0;
                                transform: translateY(-2px);
                                position: top;
                                
                                &:hover {
                                background: "#white";
                                border: 2px solid #cc9999;
                                transform: translateY(-2px);
                                color: #cc9999;
                            }
                            }
                        `}
                        >
                        Read more
                        </Button>
                        </div>
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

export default TravelAdvisor

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

// const Description = styled.p`
// text-align: start;
// padding-left: 2rem;
// margin-bottom: 4rem;
// font-size: clamp(1.5rem, 5vw, 2rem);
// font-weight: bold;
// `

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
    margin-bottom: 2rem;
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
    height: 80%;
`

// const SocialLinks = styled.p`
//     color: #fffff0;
//     display: flex;
//     align-items: center;
//     font-size: 2rem;
//     margin: 0 1rem;
//     cursor: pointer;
// `