import React from "react";
import Header from './components/Header';
import PropTypes from 'prop-types';

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React App: Pinki Gautam</h1>
                <Header title="Click button to see the functionality"/>
                <hr />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
