import React, { Component } from "react";
import { Container } from "reactstrap";

//Importiong Components
import HeaderTopNavbar from "./HeaderTopNavbar";
import HeaderTitle from "./HeaderTitle";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <hr className="c-hr mt-1 mb-0" />
        <Container
          style={{
            padding: "0px 5px",
          }}
          fluid="lg"
        >
          <HeaderTopNavbar />
          <HeaderTitle />
        </Container>
      </div>
    );
  }
}

export default Header;
