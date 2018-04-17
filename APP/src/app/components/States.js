import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import StateList from './states/components/StateList';
import * as actions from "./states/state/actions";

class States extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.props.fetchStates();
  }

  render() {
    return (
      <StateList items={this.props.statesData} onView={this.viewItem} onEdit={this.editItem}/>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     fetchStates: function() {
         let actionFn = actions.fetchStates();
         dispatch(actionFn);
     }
  }
}  

const mapStateToProps = (state) => {
  return {
      statesData: state.statesData
  }
}

export default connect(mapStateToProps, 
                  mapDispatchToProps) (States)
