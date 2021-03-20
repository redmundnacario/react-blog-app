import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar as NavbarB,Nav} from 'react-bootstrap'

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <NavbarB 
            className="navbar-container"
            variant="dark"
            collapseOnSelect expand="md">
            <div className = "container">
                <NavbarB.Brand href="#home" >
                    <h3>
                    <i className="fas fa-blog"></i>
                    </h3>
                </NavbarB.Brand>
                <NavbarB.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarB.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>

                </NavbarB.Collapse>
            </div>
        </NavbarB>
    )
}

export default Navbar

