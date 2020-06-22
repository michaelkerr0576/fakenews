import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const HeaderBottomNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        light
        expand="md"
        className="d-flex flex-row-reverse border-bottom c-bottomNav"
      >
        {/* create hamburger menu on medium screens */}
        <NavbarToggler
          style={{
            padding: ".375rem .75rem",
          }}
          className="c-button c-select c-buttonLightGray mb-1"
          onClick={toggle}
        >
          <i className="fas fa-bars mr-2"></i>SECTIONS
          <i className="fas fa-caret-down ml-2"></i>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav nav-fill w-100" navbar>
            <NavItem>
              {/* className="text-left text-md-center" */}
              <NavLink href="/news">NEWS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sport">SPORT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/business">BUSINESS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/opinion">OPINION</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lifestyle">LIFESTYLE</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/culture">CULTURE</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="c-crosshatch pb-1"></div>
    </div>
  );
};

export default HeaderBottomNavbar;
