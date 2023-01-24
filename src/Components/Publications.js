/**
* Publications section of the website
*/
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from "@fortawesome/free-solid-svg-icons";


class Publications extends Component {
  constructor(props) {
    super(props);

    this.publications = props.publications;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="publications">
        <div className="w-100">
          <h2 className="mb-5">Publications &amp; Conferences</h2>
          <ul className="fa-ul mb-0">
          {
            this.publications.map((data, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faFile} color="#64E986" />
                <span className="ml-2">
                <a href={data.link}>{data.title}</a></span>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default Publications;
