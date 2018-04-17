import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as actions from '../state/actions';
import { NavLink } from 'react-router-dom';

class StateAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    addStateHandler() {
    let stateObj = {
        id: "hello",
        name: "nameee",
        code: "ashasjhdj"
    }
    console.log(stateObj);

    this.setState([...this.state, stateObj]);

    

    }

    render() {
      
      return (
        <tr >
            <td><input type="text" name="inputId"/></td>
            <td><input type="text" name="inputName"/></td>
            <td><input type="text" name="inputCode"/></td>
            <td><button onClick={()=> this.addStateHandler() }>Add</button></td>
        </tr>
      );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStateToEdit: function (id) {
      let actionFn = actions.fetchStateToAdd(id);
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
  mapDispatchToProps)(StateAdd)