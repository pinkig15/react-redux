import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import StateItem from '../components/StateItem';
import {NavLink} from 'react-router-dom';
import StateAdd from '../components/StateAdd';
import { addStateActionCreator } from '../state/actions';

class StateList extends PureComponent {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
      
  }

  render() {
    return (
          <section>
            <h1>States</h1>
              <div>
              <table>
                <tbody>
                  <tr><th>ID</th><th>Name</th><th>Code</th><th>Actions</th></tr>
                  
                  <StateAdd allStates={this.props.items.statesData}/>
                {
                  this.props.items.statesData.map(item =>  (
                      <StateItem item={item} key={item.id} />
                  ))
                }
                </tbody>
              </table>
            </div>
          </section>
    );
  }
}

export default StateList;
