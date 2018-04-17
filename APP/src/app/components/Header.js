import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="header">
                <h2>{this.props.title}</h2>
                <NavLink exact to="/" className="button" activeClassName="success" > Home </NavLink>
                <NavLink to="/about" className="button" activeClassName="success" > About </NavLink>
                <NavLink to="/contact" className="button" activeClassName="success" > Contact </NavLink>
                <NavLink to="/states" className="button" activeClassName="success" > StateList </NavLink>
            </div>
        )
    }
}

export default Header;