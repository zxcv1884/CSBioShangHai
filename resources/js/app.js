require("./bootstrap");
import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Second from "./components/Second";
import '../css/header.css';
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Header/>
                    <div className="headerSpace"/>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/second" component={Second}></Route>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
