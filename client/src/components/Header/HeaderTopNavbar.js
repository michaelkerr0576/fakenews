import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavbarText,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const HeaderTopNavbar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div>
      <Navbar light expand="xs">
        <Nav className="mr-auto" navbar>
          <ButtonDropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className="mt-1"
          >
            <DropdownToggle caret className="c-button c-select">
              <i className="fas fa-search mr-2"></i>SEARCH
            </DropdownToggle>
            <DropdownMenu className="c-select">
              <DropdownItem disabled>Search for articles...</DropdownItem>
              <DropdownItem divider />
              <InputGroup
                style={{
                  width: "400px",
                  maxWidth: "75vw",
                }}
                className="px-2"
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="c-button">
                    <i className="fas fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="SEARCH..." className="c-button c-select" />
              </InputGroup>
            </DropdownMenu>
          </ButtonDropdown>
        </Nav>
        <NavbarText
          style={{
            paddingTop: "0px",
            paddingLeft: "4px",
            fontSize: "0.88rem",
            fontWeight: "400",
            fontStyle: "italic",
          }}
          className="text-right"
        >
          Tuesday, November 24, 2015
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default HeaderTopNavbar;
