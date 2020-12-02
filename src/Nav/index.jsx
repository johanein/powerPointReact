import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import navItems from "./navItems";

const index = memo((props) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        {navItems.map(({ url, name }) => (
          <Nav.Link key={url}>
            <Link style={{ color: "white" }} to={url}>
              {name}
            </Link>
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
});

export default index;
