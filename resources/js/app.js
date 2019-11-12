require("./bootstrap");
import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Second from "./components/Second";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*<div className="container">*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <NavLink*/}
                    {/*                exact*/}
                    {/*                activeClassName="selected"*/}
                    {/*                to="/"*/}
                    {/*            >*/}
                    {/*                home*/}
                    {/*            </NavLink>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <NavLink*/}
                    {/*                activeClassName="selected"*/}
                    {/*                to="/second"*/}
                    {/*            >*/}
                    {/*                second*/}
                    {/*            </NavLink>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <Route exact path="/" component={Header}></Route>
                    <Route path="/second" component={Second}></Route>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}