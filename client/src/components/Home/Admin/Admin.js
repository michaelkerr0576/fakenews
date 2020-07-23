import React from "react";
import { Row, Col } from "reactstrap";

//Importiong Components
import AdminAddArticleModal from "../Modals/AdminAddArticleModal";
import AdminResetArticles from "./AdminResetArticles";

const Admin = (props) => {
  return (
    <div>
      <Row className="c-crosshatch border py-2">
        <Col xs="auto" className="py-1 pl-2 pl-sm-3 pr-1 pr-sm-2">
          <AdminAddArticleModal />
        </Col>
        <Col xs="auto" className="py-1 pr-2 pr-sm-3 pl-1 pl-sm-2">
          <AdminResetArticles />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
