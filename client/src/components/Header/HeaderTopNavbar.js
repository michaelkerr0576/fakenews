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
import Moment from "react-moment";

const HeaderTopNavbar = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const onToggle = () => setOpen(!dropdownOpen);

  const currentDate = new Date();

  return (
    <div>
      <Navbar light expand="xs">
        <Nav className="mr-auto" navbar>
          <ButtonDropdown
            isOpen={dropdownOpen}
            toggle={onToggle}
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
                className="px-2 c-pointer"
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
          <Moment format="dddd, D MMMM, YYYY" withTitle>
            {currentDate}
          </Moment>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default HeaderTopNavbar;
