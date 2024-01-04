import React from "react";
import Highlight from "./ui/Highlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>

          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt"></FontAwesomeIcon>}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open"></FontAwesomeIcon>}
              title="10,000+ books"
              para="Library has books in all your favourite categories"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags"></FontAwesomeIcon>}
              title="Easy and Quick"
              para="Get your hands on popular books for as little as $10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
