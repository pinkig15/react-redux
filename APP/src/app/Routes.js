import React from "react";
import {Route, Switch, HashRouter} from "react-router-dom";
import {App} from "./App";
import Home from "./components/Home";
import About from "./components/About";
import StateEdit from "./components/states/components/StateEdit";
import StateView from "./components/states/components/StateView";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import States from "./components/States";
 
export default function Routes(props) {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/states" exact component={States} />
                    <Route path="/states/edit/:id" component={StateEdit} />
                    <Route path="/states/view/:id" component={StateView} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </HashRouter>
    )
}
