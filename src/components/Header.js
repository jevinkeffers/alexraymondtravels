import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
import { RiHomeHeartFill } from 'react-icons/ri'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"

const Header = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    if(window.location.pathname) {
      setNavbar(window.location.pathname)
    }
    console.log(window.location.pathname)
  }, [])

  return (
    <Nav navbar={navbar}>
      <Link to="/">
        <Home className="navbar-logo" alt="home" />
      </Link>
      <Bars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary='true' round='true' to='/contact'>Start Your Adventure!</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ navbar }) => (navbar !== "/" ? "#4b3621" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const Home = styled(RiHomeHeartFill)`
  color: #fffff0;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const NavLink = styled(Link)`
  color: #fffff0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fffff0;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`