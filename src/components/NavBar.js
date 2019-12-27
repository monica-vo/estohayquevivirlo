import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../styles/navbar.css'
import { TiSpiral } from 'react-icons/ti';


export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="/"><h2 className='homeLink'><TiSpiral className='spiral'/></h2></Navbar.Brand>
              {/* <Nav className="contacto"> */}
                {/* <Nav.Item > <Nav.Link href = '/about'>Contacto / Contact</Nav.Link></Nav.Item> */}
              {/* </Nav> */}
          </Navbar>
        )
    }
}



