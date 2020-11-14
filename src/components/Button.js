import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? "#cc9999" : "#FFFFF0")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
    color: #FFFFF0;
    font-size: ${({ big }) => (big ? "20px" : "16px")};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? "50px" : "none")};

    &:hover {
        background: ${({ primary }) => (primary ? "#FFFFF0" : "#cc9999")};
        transform: translateY(-2px);
        color: #cc9999;
    }
`
