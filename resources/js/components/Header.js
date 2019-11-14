import React, { Component } from "react";
import { Link } from "react-router-dom";

const pages = [
    {
        id:1,
        text:'Home',
        link:'/',
    },
    {
        id:2,
        text:'peptides',
        link:'/Second',
    },
    {
        id:3,
        text:'Instrumentation',
        link:'/Second',
    },
    {
        id:4,
        text:'OnlineShop',
        link:'/Second',
    },
    {
        id:5,
        text:'About',
        link:'/Second',
    },
    {
        id:6,
        text:'Peptide NoteBook',
        link:'/Second',
    },
];
const headerStyle ={
    paddingTop : 0,
    paddingBottom :0,
};


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLeft:126,
            activeWidth: 0,
            left: 126,
            width:0
        }
    };
    handleMouseEnter = (e) => {
        let parentUl = e.target.parentNode;
        let parentDiv = parentUl.parentNode;
        this.setState({
            left: parentUl.getBoundingClientRect().left ,
            width:e.target.offsetWidth
        });
    };
    handleMouseClick = (e)=>{
        let parentUl = e.target.parentNode;
        let parentDiv = parentUl.parentNode;
        this.setState({
            activeLeft: parentUl.getBoundingClientRect().left,
            activeWidth:e.target.offsetWidth
        });
    };
    handleMouseLeave = () =>{
        this.setState({
            left: this.state.activeLeft,
            width: this.state.activeWidth
        })
    };

    render() {
        return (
            <header className="headerBar fixed-top bg-white" >
                <nav className="navbar navbar-light  navbar-expand-lg " style={headerStyle}>
                        <a className="navbar-brand" href="/">
                            <img src="assets/img/favicon.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                        </a>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav navbar-nav-center mx-auto text-uppercase " >
                            <div className="stripe" style={{ left: this.state.left , width: this.state.width }}/>
                            {pages.map((pages) => (
                                <li className="nav-item  text  position-static"  key={pages.id} onMouseEnter={this.handleMouseEnter} onClick={this.handleMouseClick} onMouseLeave={this.handleMouseLeave} >
                                    <Link className="nav-a font-weight-bolder nav-link p-3" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" to={pages.link}  >{pages.text}</Link>
                                    <ul className="dropdown-menu vw-100">
                                        <div className="container">
                                            <h3>{pages.text}</h3>
                                        </div>
                                        {/*<a className="dropdown-item" href="#">Action</a>*/}
                                        {/*<a className="dropdown-item" href="#">Another action</a>*/}
                                        {/*<a className="dropdown-item" href="#">Action</a>*/}
                                        {/*<a className="dropdown-item" href="#">Action</a>*/}
                                        {/*<a className="dropdown-item" href="#">Action</a>*/}
                                        {/*<div className="dropdown-divider"></div>*/}
                                        {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form className="form-inline border-bottom">
                        <input className="form-control border-0" type="search" placeholder="Search"
                               aria-label="Search"/>

                        <button className="btn  my-2 my-sm-0 " type="submit" >
                            <img src="assets/img/header/searchicon.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </button>
                    </form>
                </nav>
            </header>
        );
    }
}