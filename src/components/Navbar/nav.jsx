import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import './nav.css';
import { Link } from 'react-router-dom';
export default class nav extends Component {
  render() {
    return (
      <div>
        <Navbar bg='dark' variant={"dark"} expand="lg" >
          
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/probst">Problem Statement</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Nav className='nav-btn'>
            <Button variant="outline-success"><Link to= "/login">Sign-in</Link></Button>
            <Button variant="outline-success"><Link to= "/signup">Sign-up</Link></Button>
            </Nav>
         
        </Navbar>
      </div>
    )
  }
}
