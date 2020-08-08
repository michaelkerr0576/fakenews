import React, { Component } from "react";
import { Container, Row, Col, CardColumns } from "reactstrap";
import { connect } from "react-redux";
import { getArticles } from "../../actions/articleActions";
import PropTypes from "prop-types";

//Importiong Components
import HeaderBottomNavbar from "../Header/HeaderBottomNavbar";
import Headline from "./Headlines/Headline";
import MostRead from "./MostRead/MostRead";
import Admin from "./Admin/Admin";
import LatestNewsHeader from "./LatestNews/LatestNewsHeader";
import LatestNewsColumnArticle from "./LatestNews/LatestNewsColumnArticle";
//import LatestNewsPagination from "./LatestNews/LatestNewsPagination";

class Home extends Component {
  //Runs when the component mounts
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const { articles, mutableArticles } = this.props.article;

    return (
      <div className="Home my-3">
        {/* sticky navbar has to be in main div container to stay throughout */}
        <HeaderBottomNavbar />

        <Container fluid="lg" className="mt-4">
          <Row>
            <Col xs={{ size: 12, order: 2 }} md={{ size: 8, order: 1 }}>
              <Headline
                isHeadline="isHeadline1"
                colStyle="c-headlineColumn"
                charLimit={1200}
                articles={articles}
              />
            </Col>
            <Col xs={{ size: 12, order: 1 }} md={{ size: 4, order: 2 }}>
              <MostRead />
            </Col>
            <Col xs={{ size: 12, order: 3 }}>
              <div className="c-crosshatch border mt-5 mb-4 mx-5 pb-1"></div>
            </Col>
          </Row>
        </Container>
        {/* react-strap cant handle custom sass xxxl breakpoints, using standard bootstrap syntax */}
        <div className="container-fluid mb-5 pb-4">
          <div className="row">
            <div className="col-xs-12  col-xxxl-10 offset-xxxl-1">
              <Row>
                <Col className="mt-4" xs="12" md="6">
                  <Headline
                    isHeadline="isHeadline2"
                    colStyle="c-headlineColumn2n3"
                    charLimit={1400}
                    articles={articles}
                  />
                </Col>
                <div className="c-maxSmFeature c-crosshatch border w-100 mt-5 mb-4 mx-5 pb-1"></div>
                <Col className="mt-4" xs="12" md="6">
                  <Headline
                    isHeadline="isHeadline3"
                    colStyle="c-headlineColumn2n3"
                    charLimit={1400}
                    articles={articles}
                  />
                </Col>
                {/* <div className="c-maxSmFeature m-5"></div> */}
              </Row>
            </div>
          </div>
        </div>
        <div className="c-crosshatch border mt-4 pb-1"></div>
        <hr className="c-hr mt-0 mb-0" />
        <div className="c-crosshatch border pb-1"></div>
        <Container fluid={true}>
          {/* ADMIN - Rendered if user is logged in */}
          <Admin />
        </Container>
        {/* react-strap cant handle custom sass xxxl breakpoints, using standard bootstrap syntax */}
        <div
          className="container-fluid my-2 my-md-5"
          style={{ minHeight: "100vh" }}
        >
          <div className="row">
            <div className="col-xs-12  col-xxxl-10 offset-xxxl-1">
              <Row className="my-5 mt-sm-4 px-1">
                <Col xs="12">
                  {/* PUBLIC - Latest news is always rendered */}
                  <CardColumns>
                    {/* Header Card */}
                    <LatestNewsHeader />
                    {/* Article Card */}
                    {mutableArticles.map((article, index) => (
                      <LatestNewsColumnArticle
                        key={index}
                        article={article}
                        index={index}
                      />
                    ))}
                  </CardColumns>
                </Col>
              </Row>
              {/* <Row className="mt-2 px-2">
                <Col xs="auto" className="mx-auto">
                  {/* PUBLIC - Pagination is always rendered */}
              {/* <LatestNewsPagination />
                </Col>
              </Row> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getArticles: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

const mapSateToProps = (state) => ({
  article: state.article,
});

const mapDispatchToProps = {
  getArticles,
};

export default connect(mapSateToProps, mapDispatchToProps)(Home);
