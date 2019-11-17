require("./bootstrap");
import React, { Component } from "react";
import { Route } from "react-router";
import { BrowserRouter, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Peptides from "./components/Peptides";
import Instrumentation from "./components/Instrumentation";
import OnlineShop from "./components/OnlineShop";
import About from "./components/About";
import PeptideNoteBook from "./components/PeptideNoteBook";

import '../css/header.css';
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className="headerSpace"/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/peptides" component={Peptides}></Route>
                <Route path="/instrumentation" component={Instrumentation}></Route>
                <Route path="/onlineShop" component={OnlineShop}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/peptideNoteBook" component={PeptideNoteBook}></Route>
            </BrowserRouter>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
