import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import EmailBg from "../assets/images/email.jpg"
import { Button } from "./Button"
import Aos from "aos"
import "aos/dist/aos.css"

function EmailForm() {
useEffect(() => {
    Aos.init({})
}, [])

const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
})
const handleServerResponse = (ok, msg, form) => {
    setServerState({
    submitting: false,
    status: { ok, msg },
    })
    if (ok) {
    form.reset()
    }
}
const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
    method: "post",
    url: "https://formspree.io/f/maylbdeq",
    data: new FormData(form),
    })
    .then(r => {
        handleServerResponse(true, "Thanks!", form)
    })
    .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
    })
}
return (
    <EmailContainer>
    <EmailContent>
        <h1 data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
        Receive Exclusive Offers!
        </h1>
        <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
        Sign up for Alex's newsletter for deals from Epperly Travels, travel
        advice, recommendations, and more!
        </p>
        <form onSubmit={handleOnSubmit}>
        <FormWrap
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
        >
            <p>
            <label htmlFor="email">
                <input type="email" placeholder="Enter your email" id="email" />
            </label>
            </p>
            <p>
            <label htmlFor="email">
                <input type="text" placeholder="Your name" id="name" />
            </label>
            </p>
            <p>
            <label htmlFor="email">
                <input
                type="textarea"
                placeholder="Where would you like to go?"
                id="message"
                />
            </label>
            </p>
            <p>
            <Button
                type="submit"
                disabled={serverState.submitting}
                as="button"
                type="submit"
                primary="true"
                round="true"
                css={`
                height: 48px;

                @media screen and (max-width: 768px) {
                    width: 100%;
                    min-width: 350px;
                }

                @media screen and (max-width: 400px) {
                    width: 100%;
                    min-width: 250px;
                }
                `}
            >
                Sign Up!
            </Button>
            </p>
            {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
            </p>
            )}
        </FormWrap>
        </form>
    </EmailContent>
    </EmailContainer>
)
}

export default EmailForm

const EmailContainer = styled.div`
background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 35%,
    rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
background-size: cover;
height: 650px;
width: 100%;
padding: 5rem calc((100vw - 1300px) / 2);
color: #fffff0;
display: flex;
justify-content: center;
align-items: center;
`

const EmailContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-family: "Playfair Display";
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
}

p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
}

form {
    z-index: 10;
}
`

const FormWrap = styled.div`
input {
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
}

@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
    margin-bottom: 1rem;
    width: 100%;
    margin-right: 0;
    }
}
`
