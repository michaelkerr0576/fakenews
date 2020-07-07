import React, { Component } from "react";
import { CardColumns } from "reactstrap";

//Importiong Components
import ViewArticleModal from "../Modals/ViewArticleModal";
import HeadlineDetails from "./HeadlineDetails";

class Headline extends Component {
  state = {
    isHeadline: this.props.isHeadline,
    colStyle: this.props.colStyle,
    charLimit: this.props.charLimit,
  };

  render() {
    const { articles } = this.props;
    const { charLimit } = this.state;

    //default headline if none is set
    let headline = {
      title: ">>> Set Headline in Latest News <<<",
      subtitle: "...",
      body: "",
      author: "Blank",
      section: "Blank",
      datetime: "Blank",
    };
    //find Headline
    for (let i = 0; i < articles.length; i++) {
      let article = articles[i];
      if (
        this.state.isHeadline === "isHeadline1" &&
        article.isHeadline1 === true
      ) {
        headline = article;
        break;
      } else if (
        this.state.isHeadline === "isHeadline2" &&
        article.isHeadline2 === true
      ) {
        headline = article;
        break;
      } else if (
        this.state.isHeadline === "isHeadline3" &&
        article.isHeadline3 === true
      ) {
        headline = article;
        break;
      } else {
        continue;
      }
    }

    //headline body character limit and show more button
    const toShow = headline.body.substring(0, charLimit) + "...";
    const toParagraphs = toShow.split("\n").map(function (paragraph, idx) {
      return (
        <span key={idx}>
          {paragraph}
          <br
            style={{
              margin: "2.5em 0",
              lineHeight: "2.5em",
            }}
          />
        </span>
      );
    });
    let bodyContent;
    if (headline.body.length <= charLimit) {
      bodyContent = <p>{toParagraphs}</p>;
    } else {
      bodyContent = (
        <div>
          <p>{toParagraphs}</p>
          <ViewArticleModal headline={headline} />
        </div>
      );
    }

    return (
      <div className="mt-3">
        <div className="c-headlineBlockBorder"></div>
        <div className="c-headlineBlock mb-2"></div>
        <h2 className="border-bottom mb-3 pb-2">{headline.title}</h2>
        <h3 className="mb-3">{headline.subtitle}</h3>
        <CardColumns className={this.state.colStyle}>
          {bodyContent}
          {headline.subtitle !== "..." ? (
            <HeadlineDetails
              author={headline.author}
              section={headline.section}
              datetime={headline.datetime}
            />
          ) : (
            false
          )}
        </CardColumns>
      </div>
    );
  }
}

export default Headline;
