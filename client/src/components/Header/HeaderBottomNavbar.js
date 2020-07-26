import React, { useState } from "react";
import { Navbar, Nav, NavbarToggler, NavItem, NavLink, Collapse } from "reactstrap";

const HeaderBottomNavbar = (props) => {
  const [isOpen, setOpen] = useState(false);

  const onToggle = () => setOpen(!isOpen);

  return (
    <Navbar
      light
      expand="md"
      sticky="top"
      className="d-flex flex-row-reverse border-bottom c-bottomNav border-top bg-white p-0 m-0"
    >
      {/* create hamburger menu on medium screens */}
      <NavbarToggler
        style={{
          border: "none",
        }}
        className="c-button c-select c-buttonLightGray p-2"
        onClick={onToggle}
      >
        <i className="fas fa-bars mr-2"></i>SECTIONS
        <i className="fas fa-caret-down ml-2"></i>
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="navbar-nav nav-fill w-100" navbar>
          <NavItem>
            {/* className="text-left text-md-center" */}
            <NavLink href="/news">POLITICS</NavLink>
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
      <div className="c-crosshatch pb-1"></div>
    </Navbar>
  );
};

export default HeaderBottomNavbar;
