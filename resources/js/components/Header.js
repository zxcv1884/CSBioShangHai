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
            activeElement:null,
            activeLeft:550,
            left: 550,
            width:0,
            linkStyle:"nav-a font-weight-bolder nav-link py-3",
            navStyle:"favicon navbar-brand py-3"
        }
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        window.addEventListener("resize", this.handleResize);
    }
    handleResize = ()=>{
        this.setState({
            left: this.state.activeElement.getBoundingClientRect().left,
        })
    };
    handleScroll  = () => {
        if(window.scrollY<200){
            this.setState({
                linkStyle:"nav-a font-weight-bolder nav-link py-3",
                navStyle:"favicon navbar-brand py-3"
            })
        }else{
            this.setState({
                linkStyle:"nav-a font-weight-bolder nav-link",
                navStyle:"favicon navbar-brand "
            })
        }
    };
    handleMouseEnter = (e) => {
        let parentUl = e.target.parentNode;
        if (e.target.className.trim().split(" ")[0] === "nav-a"){
            this.setState({
                left: parentUl.getBoundingClientRect().left ,
                width:parentUl.getBoundingClientRect().width,
            });
        }
    };
    handleMouseClick = (e)=>{
        let parentUl = e.target.parentNode;
        if (e.target.className.trim().split(" ")[0] === "nav-a") {
            this.setState({
                activeWidth: parentUl.getBoundingClientRect().width,
                activeElement: parentUl
            });
        }
    };
    handleMouseLeave = () =>{
        if(this.state.activeElement !== null){
            this.setState({
                left: this.state.activeElement.getBoundingClientRect().left,
                width:this.state.activeElement.getBoundingClientRect().width
            })
        }else {
            this.setState({
                left:0,
                width:0
            })
        }
    };

    render() {
        return (
            <header className="headerBar fixed-top bg-white" onLoad={this.handleResize}>
                <nav className="navbar navbar-light  navbar-expand-lg " style={headerStyle}>
                    <a className={this.state.navStyle} href="/">
                        <img src="assets/img/favicon.png" width="50" height="50" className="d-inline-block align-top" alt="" />
                    </a>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav navbar-nav-center mx-auto text-uppercase" >
                            <div className="stripe" style={{ left: this.state.left , width: this.state.width }}/>
                            {pages.map((pages) => (
                                <li className="nav-item  text  position-static"  key={pages.id}  onMouseEnter={this.handleMouseEnter} onClick={this.handleMouseClick} onMouseLeave={this.handleMouseLeave} >
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
                        <div className="hamburger " >
                            <img src="assets/img/Hamburger.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </div>
                        <div className="line " >
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
