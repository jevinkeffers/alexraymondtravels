import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
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
    font-family: 'Playfair Display';
    padding: 0 2rem;

    h1 {
        margin-bottom: 1rem;
        color: #cc9999;
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

