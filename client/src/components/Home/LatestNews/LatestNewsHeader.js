import React from "react";
import { Row, Col, Card, CardTitle, CardBody, Badge } from "reactstrap";

//Importiong Components
import LatestNewsColumnNavbarComponent from "./LatestNewsNavbar";

const LatestNewsColumnHeader = (props) => {
  return (
    <div>
      <Card className="c-headerCard m-0 mb-n3 pb-1 pb-sm-0">
        <CardBody className="m-0 p-0">
          <CardTitle>
            <Row className="mb-2 mb-sm-1">
              <Col>
                <LatestNewsColumnNavbarComponent />
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="auto" className="text-left mr-auto">
                <h4>
                  Latest News<i className="fas fa-caret-down ml-2"></i>
                </h4>
              </Col>
              <Col
                xs="auto"
                sm="auto"
                className="text-right mb-0 mb-sm-n2 pl-2 pl-lg-0 pr-0"
              >
                <small>
                  <Badge
                    href="#"
                    color="light"
                    className="c-badge text-uppercase font-weight-light mb-0 pb-0"
                  >
                    Latest<i className="fas fa-caret-down ml-2"></i>
                  </Badge>
                </small>
              </Col>
              <Col
                xs="auto"
                sm="auto"
                className="text-right mb-0 mb-sm-n2 pl-0"
              >
                <small>
                  <Badge
                    href="#"
                    color="light"
                    className="c-badge text-uppercase font-weight-light mb-0 pb-0"
                  >
                    Filter<i className="fas fa-times ml-2"></i>
                  </Badge>
                </small>
              </Col>
            </Row>
            <hr className="c-hr m-0 w-100" />
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default LatestNewsColumnHeader;