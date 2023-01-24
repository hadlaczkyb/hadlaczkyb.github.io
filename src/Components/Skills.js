/**
* Skills section of the website
*/
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.programming = props.skills.programming;
    this.industry = props.skills.industry;
  }

  render() {
    return(
      /* Skills of a user in the JSON data is a list of dictionaries.
      *  To add this to the 'jsx' the loaded data from the props is looped
      *  over using a map and the data is inserted in the 'jsx'. */
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <div className="row">
          {
            this.programming.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                  <span className="ml-3">{data.name}</span>
                </p>
              </div>
            ))
          }
          </div>
          <div className="subheading mb-3">Industry knowledge</div>
          <div className="row">
          {
            this.industry.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                  <span className="ml-3">{data.name}</span>
                </p>
              </div>
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
