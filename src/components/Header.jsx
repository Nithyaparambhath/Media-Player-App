import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container>
          <Navbar.Brand >
            <Link style={{ textDecoration: 'none' }} className='text-light fs-2' to={'/'}>
              <i class="fa-solid fa-cloud-arrow-up fa-bounce"></i> Media Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header