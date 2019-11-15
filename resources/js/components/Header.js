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
            activeLeft:550,
            activeWidth: 0,
            left: 550,
            width:0,
            windowWidth:0,
            linkStyle:"nav-a font-weight-bolder nav-link p-3",
            navStyle:"favicon navbar-brand p-3"
        }
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        window.addEventListener("resize", this.handleResize);
    }
    handleResize = ()=>{
        if(this.state.windowWidth!==0 ){
            this.setState({left: this.state.left + ((window.innerWidth - this.state.windowWidth)/1.898)})
        }
        this.setState({
            windowWidth : window.innerWidth
        });
        console.log(this.state.windowWidth);
    };
    handleScroll  = () => {
        if(window.scrollY<10){
            this.setState({
                linkStyle:"nav-a font-weight-bolder nav-link p-3",
                navStyle:"favicon navbar-brand p-3"
            })
        }else{
            this.setState({
                linkStyle:"nav-a font-weight-bolder nav-link px-3",
                navStyle:"favicon navbar-brand px-3"
            })
        }
    };
    handleMouseEnter = (e) => {
        let parentUl = e.target.parentNode;
        if (e.target.className.trim().split(" ")[0] === "nav-a"){
            this.setState({
                left: parentUl.getBoundingClientRect().left ,
                width:e.target.offsetWidth,
                // ulStyle: "LoadContent animation dropdown-menu vw-100 "
            });
        }
    };
    handleMouseClick = (e)=>{
        let parentUl = e.target.parentNode;
        if (e.target.className.trim().split(" ")[0] === "nav-a") {
            this.setState({
                activeLeft: parentUl.getBoundingClientRect().left,
                activeWidth: e.target.offsetWidth
            });
        }
    };
    handleMouseLeave = () =>{
        this.setState({
            left: this.state.activeLeft,
            width: this.state.activeWidth,
            // ulStyle: "LoadContent animation dropdown-menu vw-100 "
        })
    };

    render() {
        return (
            <header className="headerBar fixed-top bg-white" >
                <nav className="navbar navbar-light  navbar-expand-lg " style={headerStyle}>
                    <a className={this.state.navStyle} href="/">
                        <img src="assets/img/favicon.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                    </a>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav navbar-nav-center mx-auto text-uppercase " >
                            <div className="stripe" style={{ left: this.state.left , width: this.state.width }}/>
                            {pages.map((pages) => (
                                <li className="nav-item  text  position-static"  key={pages.id} onMouseEnter={this.handleMouseEnter} onClick={this.handleMouseClick} onMouseLeave={this.handleMouseLeave} >
                                    <Link className={this.state.linkStyle} id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" to={pages.link}  >{pages.text}</Link>
                                    <ul className="LoadContent animation dropdown-menu vw-100 " >
                                        <div className="container dropdown-content">
                                            <h3>{pages.text}</h3>
                                        </div>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=" form-inline rightBar">
                        <form className="form-inline border-bottom  search">
                            <input className="form-control border-0 searchTextBox" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn  my-sm-0 " type="submit" >
                                <img src="assets/img/header/searchicon.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                            </button>
                        </form>
                        <div className="line" >
                            <img src="assets/img/Line.jpg" width="2" height="30" className="d-inline-block align-top" alt="" />
                        </div>
                        <div className="user" >
                            <img src="assets/img/user.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}