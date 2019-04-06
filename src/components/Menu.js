import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export class MenuComponent extends React.Component {
    render() {
        return (
       <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">GTTP</Navbar.Brand>
         <Nav className="ml-auto">
           <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href="#login">Login</Nav.Link>
           <Nav.Link href="#register">Register</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
export default MenuComponent