import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function CNavbar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='/'>GarageLib</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/Apropos'>A propos</Nav.Link>
          <Nav.Link href='/Contact'>Sign up</Nav.Link>
          <Nav.Link href='/Login'>Login</Nav.Link>
          <Button variant='outline-primary'>Login</Button>{' '}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CNavbar;
