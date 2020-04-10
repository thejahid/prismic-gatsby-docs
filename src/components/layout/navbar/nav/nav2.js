import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import window from "global"
import { Nav, Navbar, Collapse, NavbarToggler, Container } from "reactstrap"
import Navitem from "./navitem"


const Nav2 = () => {

    //Nacbar Toggler
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    //Nacbar Color on Scroll
    window.onscroll = () => {
        const scrollNav = document.querySelector("nav")
        const scrollMe = window.scrollY
        if( scrollMe >= 100 ) {
            scrollNav.classList.add("scroll")
        } else {
            scrollNav.classList.remove("scroll")
        } 
    }

    return(
        <Fragment>
            <Navbar className="navbar-expand-lg fixed-top">
                <Container>
                    <Link className='navbar-brand d-lg-none' to='/'>Navbar</Link>
                    <NavbarToggler data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" onClick={toggle} />
                    <Collapse id="navbarToggle" className="justify-content-between" isOpen={isOpen} navbar>
                        <Nav navbar>
                            <Navitem name='Home' url='/' />
                            <Navitem name='About' url='about' />
                            <Navitem name='Services' url='services' />
                        </Nav>
                        <Link className='navbar-brand d-none d-lg-block' to='/'>Navbar</Link>
                        <Nav navbar>
                            <Navitem name='Home' url='/' />
                            <Navitem name='About' url='about' />
                            <Navitem name='Services' url='services' />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Nav2
