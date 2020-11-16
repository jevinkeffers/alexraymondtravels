import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Alex Raymond Travels</h1>
                    <p>Itenarary design focused on the ART of discovery.</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>More From Alex Raymond</FooterLinkTitle>
                    <FooterLink to="/blog">From The Newsletter</FooterLink>
                    <FooterLink to="/contact">Get In Touch</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="https://facebook.com/alexraymondtravels">Facebook</FooterLink>
                    <FooterLink to="https://www.instagram.com/alexraymondtravels/">Instagram</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Epperly Travel</FooterLinkTitle>
                    <FooterLink to="https://www.epperlytravel.com/">Visit Online</FooterLink>
                    <FooterLink to="https://www.epperlytravel.com/about/">About</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
        <FooterCopyright>
        <p>
            © 2020 | Page built and designed by <Link to="https://github.com/jevinkeffers" alt="Kevin Jeffers GitHub" target="_blank">Kevin Jeffers </Link> with <Link to="https://www.gatsbyjs.com/" alt="Gatsby JS" target="_blank"> Gatsby</Link>.
        </p>
        </FooterCopyright>
        </>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #2A2A2A;
    background: #FFFFF0;
`

const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        font-family: 'Playfair Display';
        font-style: italic;
        margin-bottom: 1rem;
        color: #cc9999;
    }

    p {
        font-family: 'Playfair Display';
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #2a2a2a;

    &:hover {
        color: #cc9999;
        transition: 0.3s ease-out;
    }
`

const FooterCopyright = styled.p `
    font-size: .7rem;
    background-color: #FFFFF0;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    justify-content: center;

    a:link {
        text-decoration: underline;
        color: #2a2a2a;
    }

    a:visited {
        text-decoration: underline;
        color: #2a2a2a;
    }

    a:hover {
        text-decoration: underline;
        color: #cc9999;
    }

`