import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Ceramics_Logo from '../../../assets/images/Logo/Ceramics_Logo.png'

const NavBar = () => 
{
  return (
    <>
        <Navbar expand="xl" fixed='top' className="py-4" style={{backgroundColor: '#0e224f'}}>
        <Navbar.Brand className='mx-5'>
          <img src={Ceramics_Logo} alt="Ceramics House" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5 bg-primary' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-6 fw-bold">
            <Nav.Link className='mx-3 text-white' href="#">GALLERY</Nav.Link>
            <Nav.Link className='mx-3 text-white' href="#">NEW ITEMS</Nav.Link>
            <Nav.Link className='mx-3 text-white' href="#">COLLECTIONS</Nav.Link>
            <Nav.Link className='mx-3 text-white' href="#">RECENT WORKS</Nav.Link>
            <Nav.Link className='mx-3 text-white' href="#">CONTACT US</Nav.Link>
            <Nav.Link className='mx-3 text-white' href="#">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar
