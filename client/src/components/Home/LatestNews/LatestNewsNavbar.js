import React from "react";
import {
  Navbar,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

//Importiong Components
import ArticleSearch from "../Search/Search";

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
          {/* Article Search Component */}
          <ArticleSearch />
        </InputGroup>
      </Navbar>
    </div>
  );
};

export default LatestNewsColumnNavbar;
