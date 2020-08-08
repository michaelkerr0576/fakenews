import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Jumbotron,
  CardTitle,
  CardBody,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import {
  sortByLatest,
  sortByOldest,
  removeFilters,
  filterBySection,
} from "../../../actions/articleActions";
import PropTypes from "prop-types";

//Importiong Components
import LatestNewsNavbar from "./LatestNewsNavbar";

class LatestNewsColumnHeader extends Component {
  state = {
    sortDropdown: false,
    filterDropdown: false,
    sorting: "LATEST",
  };

  onRemoveFitlers = () => {
    console.log("REMOVED");
  };

  onSortByLatest = () => {
    this.setState({
      sorting: "LATEST",
    });
    this.props.sortByLatest();
  };

  onSortByOldest = () => {
    this.setState({
      sorting: "OLDEST",
    });
    this.props.sortByOldest();
  };

  onFilterBySection = () => {
    this.props.filterBySection();
  };

  onSortToggle = () => {
    this.setState({
      sortDropdown: !this.state.sortDropdown,
    });
  };

  onFilterToggle = () => {
    this.setState({
      filterDropdown: !this.state.filterDropdown,
    });
  };

  render() {
    const { sortDropdown, filterDropdown, sorting } = this.state;

    return (
      <div>
        <Card className="c-headerCard mb-4">
          <CardBody className="m-0 p-0">
            {/* Latest News Title  */}
            <CardTitle className="m-0 p-0">
              <Row>
                <Col xs="12" sm="auto" className="text-left mr-auto">
                  <h4>
                    Latest News<i className="fas fa-caret-down ml-2"></i>
                  </h4>
                </Col>
                <Col cols="auto" className="text-right mb-n1">
                  <ButtonGroup>
                    <ButtonDropdown
                      isOpen={sortDropdown}
                      toggle={this.onSortToggle}
                    >
                      <DropdownToggle
                        caret
                        className="c-select c-button c-button-badge font-weight-light py-0 px-0 pr-md-1"
                      >
                        {sorting}
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header className="pt-3">
                          Sort by:
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          onClick={() => {
                            this.onSortByLatest();
                          }}
                        >
                          LATEST<i className="fas fa-sort ml-2"></i>
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => {
                            this.onSortByOldest();
                          }}
                        >
                          OLDEST<i className="fas fa-sort ml-2"></i>
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>

                    <ButtonDropdown
                      isOpen={filterDropdown}
                      toggle={this.onFilterToggle}
                    >
                      <DropdownToggle className="c-select c-button c-button-badge font-weight-light py-0 pr-0">
                        ALL<i className="fas fa-filter ml-2"></i>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header className="pt-3">
                          Filters:
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          onClick={() => {
                            this.onRemoveFitlers();
                          }}
                        >
                          SHOW ALL<i className="fas fa-plus-circle ml-2"></i>
                        </DropdownItem>
                        <DropdownItem>
                          AUTHOR MC AUTHOR
                          <i className="fas fa-minus-circle ml-2"></i>
                        </DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                </Col>
              </Row>
              <hr className="c-hr m-0 w-100" />
            </CardTitle>

            {/* Search Component */}
            <Row>
              <Col>
                <Jumbotron fluid className="m-0 p-3">
                  <LatestNewsNavbar />
                </Jumbotron>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

LatestNewsColumnHeader.propTypes = {
  sortByLatest: PropTypes.func.isRequired,
  sortByOldest: PropTypes.func.isRequired,
  removeFilters: PropTypes.func.isRequired,
  filterBySection: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  sortByLatest,
  sortByOldest,
  removeFilters,
  filterBySection,
};

export default connect(null, mapDispatchToProps)(LatestNewsColumnHeader);
