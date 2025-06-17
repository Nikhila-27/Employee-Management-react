import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div className='fixed-top'>
         <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
           <i className="fa-solid fa-users fa-xl"  />
            Employee App
          </Navbar.Brand>
         
        </Container>
      </Navbar>
    </div>
  )
}

export default Header