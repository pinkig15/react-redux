import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as actions from '../state/actions';
import { NavLink } from 'react-router-dom';

class StateEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    editOnClickHandler = function(e) {
    }

    render() {
      let state = this.props.statesData.filter((state) => {
        return state.id == this.props.match.params.id
      });
      if(state)
      return (
        <section className="subState">
          <h1>State Edit</h1>
          <NavLink to={"/states"}>
            Back to States
            </NavLink>
          <br /> <br />
          <div className="formDiv">
            <label>ID: </label> <input defaultValue={state[0].id} />  <br /><br />
            <label>Name:  </label> <input defaultValue={state[0].name} />  <br /><br />
            <label>Code:  </label> <input defaultValue={state[0].code} />  <br /><br />
            <NavLink onClick={e => this.editOnClickHandler(e) } to={"/states"} > <button> Update  </button> </NavLink> 
          </div>
        </section>
      );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStateToEdit: function (id) {
      let actionFn = actions.fetchStateToEdit(id);
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
  mapDispatchToProps)(StateEdit)