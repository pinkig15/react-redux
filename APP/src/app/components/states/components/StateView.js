import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../state/actions';
import { NavLink } from 'react-router-dom';

class StateView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let state = this.props.statesData.filter((state) => {
      return state.id == this.props.match.params.id
    });
    if(state)
    return (
      <section className="subState">
        <h1>State View</h1>
        {/* <a href="/#/states/">  </a>  */}
        <NavLink to={"/states"}>
          Back to States
          </NavLink>
        <br /> <br />
        <div>
          <label>ID:  <span>{state[0].id}</span> </label> <br /><br />
          <label>Name:  <span>{state[0].name}</span> </label> <br /><br />
          <label>Code:  <span>{state[0].code}</span> </label>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStateToView: function (id) {
      let actionFn = actions.fetchStateToView(id);
      dispatch(actionFn);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    statesData: state.statesData.statesData
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(StateView)
