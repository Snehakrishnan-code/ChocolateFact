import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Chocolate Range</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header