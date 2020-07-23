import React from "react";
import { Row, Col } from "reactstrap";

//Importiong Components
import AdminAddArticleModal from "../Modals/AdminAddArticleModal";
import AdminResetArticles from "./AdminResetArticles";

const Admin = (props) => {
  return (
    <div>
      <Row className="c-crosshatch border py-2 pl-0 pl-sm-2">
        <Col xs="auto" className="p-1">
          <AdminAddArticleModal />
        </Col>
        <Col xs="auto" className="p-1">
          <AdminResetArticles />
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
