import React from 'react'
import styled from 'styled-components'
import { ProcessData } from '../data/ProcessData'

const Process = () => {
    return (
        <ProcessContainer>
            <TopLine>The Process</TopLine>
            <Heading>Why Choose Alex?</Heading>
            <Wrapper>
                {ProcessData.map((item, index) => {
                    return (
                        <ProcessBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </ProcessBox>
                    )
                })}
            </Wrapper>
        </ProcessContainer>
    )
}

export default Process

const ProcessContainer = styled.div`
    width: 100%;
    background: #FFFFF0;
    color: #2A2A2A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);
`
const TopLine = styled.p`
    color: #cc9999;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    /* @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    } */
`

const ProcessBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
`

const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`

const Title = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-style: strong;
    margin-bottom: 0.5rem;
`

const Description = styled.p``
