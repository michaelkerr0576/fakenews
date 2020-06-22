import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const LatestNewsColumnNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light className="c-latestNewsNav px-0 mb-4">
        <InputGroup
          className="w-100 m-0 p-0"
          style={{
            maxWidth: "350px",
          }}
        >
          <div className="c-crosshatch w-100 pb-1"></div>
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="c-button">
              <i className="fas fa-search"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="SEARCH..." className="c-button c-select" />
        </InputGroup>
        {/* create hamburger menu on medium screens */}
        <div>
          <div className="c-crosshatch w-100 pb-1"></div>
          <NavbarToggler
            style={{
              padding: ".375rem .75rem",
            }}
            className="c-button c-select c-buttonLightGray"
            onClick={toggle}
          >
            <i className="fas fa-bars mr-2"></i>SECTIONS
            <i className="fas fa-caret-down ml-2"></i>
          </NavbarToggler>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav nav-fill w-100 m-0 mt-2 p-0" navbar>
            <NavItem className="border-bottom">
              <NavLink href="/news">NEWS</NavLink>
            </NavItem>
            <NavItem className="border-bottom">
              <NavLink href="/sport">SPORT</NavLink>
            </NavItem>
            <NavItem className="border-bottom">
              <NavLink href="/business">BUSINESS</NavLink>
            </NavItem>
            <NavItem className="border-bottom">
              <NavLink href="/opinion">OPINION</NavLink>
            </NavItem>
            <NavItem className="border-bottom">
              <NavLink href="/lifestyle">LIFESTYLE</NavLink>
            </NavItem>
            <NavItem className="border-bottom">
              <NavLink href="/culture">CULTURE</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default LatestNewsColumnNavbar;
