import React, {useEffect} from "react"
import styled from "styled-components"
import { Button } from "../components/Button"
import Layout from "../components/layout"
import Video from '../assets/videos/travel2.mp4'
import SEO from "../components/SEO"
import Aos from 'aos'
import 'aos/dist/aos.css'


const NotFoundPage = () => {
    useEffect(() => {
        Aos.init({})
    }, [])
    return (
    <Layout>
        <ErrorContainer>
            <SEO title="404: Not found" />
            <ErrorBg>
                <ErrorVideo src={Video} type="video/mp4" autoPlay loop muted playsInline />
            </ErrorBg>
            <ErrorContent>
                <ErrorItems>
                    <ErrorH1
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                    >
                        404: Page not found
                    </ErrorH1>
                    <ErrorP
                        data-aos="fade-up"
                        data-aos-delay="350"
                        data-aos-duration="1000"
                    >
                        Return home so Alex can lead you to where you really want to go.
                    </ErrorP>
                    <Button 
                        to="/"
                        primary='true' 
                        big='true' 
                        round='true' 
                        to='/contact'
                        data-aos="flip-up"
                        data-aos-delay="350"
                        data-aos-duration="3000"
                    >
                        Return Home
                    </Button>
                </ErrorItems>
            </ErrorContent>
        </ErrorContainer>
        </Layout>
    )
}


export default NotFoundPage

const ErrorContainer = styled.div`
    background: #FFFFF0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #FFFFF0;
    
    // overlay
    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
`

const ErrorBg = styled.div`
    position: absolute;
    background: #fffff0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const ErrorVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

const ErrorContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`

const ErrorItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #FFFFF0;
    line-height: 1.1;
    font-weight: bold;
`

const ErrorH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    padding: 0 1rem;
`

const ErrorP = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    font-family: 'Playfair display';
    margin-bottom: 2rem;
    font-weight: 400;
`
