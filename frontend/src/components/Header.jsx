import React from 'react'
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/userActions';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.jpg';
import '../assets/styles/index.css';


const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <Container>

            <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Atif OnlineShop" height="50px" width="50px" className="d-inline-block align-top"     /> 
              Atif OnlineShop
            </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <LinkContainer to="/cart">
                <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/login">
                <Nav.Link><FaUser /> Sign In</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/signup">
                <Nav.Link><FaUser /> Sign Up</Nav.Link>
                </LinkContainer>

                {/* <Nav.Link href="/signup"><FaUser /> Sign Up</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  );
};

export default Header