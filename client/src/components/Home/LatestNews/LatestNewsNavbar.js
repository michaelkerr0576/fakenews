import React from "react";
import {
  Navbar,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const LatestNewsColumnNavbar = (props) => {
  return (
    <div>
      <Navbar light className="c-latestNewsNav">
          <InputGroup className="w-100 m-0 p-0 c-pointer">
            <InputGroupAddon addonType="prepend">
              <InputGroupText className="c-button border bg-white">
                <i className="fas fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="SEARCH..." className="c-button c-select bg-white" />
          </InputGroup>
      </Navbar>
    </div>
  );
};

export default LatestNewsColumnNavbar;
