import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div className="popover-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light container">
                    <a className="navbar-brand" href="/">
                        <img src="assets/img/favicon.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="Home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}