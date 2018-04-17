import React, { Component } from 'react';
import Address from './Address';
import PropTypes from "prop-types";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hofc: {
            title: "Head Office",
            street: "no 150, near nokia showroom",
            city: "Gurugram",
            state: "Haryana",
            pin: "201353",
            phn: "0124647482"},
          bofc: {
            title: "Branch Office",
            street: "landmark: honda showroom",
            city: "Bangalore",
            state: "Katnataka",
            pin: "604536",
            phn: "0115568565"
          }
        }
    }

  render() {
    return (
      <section>
          <h1>Contact here</h1>
          <h2>Contact Details</h2>
          <hr />
          <Address ofcDetails={this.state.hofc} />
          <Address ofcDetails={this.state.bofc} />
      </section >
    );
  }
}

export default Contact;