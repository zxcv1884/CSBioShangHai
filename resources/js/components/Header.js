import React, { Component } from "react";
import { Link } from "react-router-dom";

const pages = [
    // {
    //     id:1,
    //     text:'Home',
    //     link:'/',
    // },
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
            faviconHeight: 60,
            faviconWidth:60,
            activeElement:null,
            left: 550,
            width:0,
            linkStyle:"nav-a font-weight-bolder nav-link py-3",
            navStyle:"favicon navbar-brand py-3",
            hamburgerStyle:"hamburger py-4"
        }
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        window.addEventListener("resize", this.handleResize);
    }
    handleResize = ()=>{
        if(this.state.activeElement !== null) {
            this.setState({
                left: this.state.activeElement.getBoundingClientRect().left,
            })
        }
    };
    handleScroll  = () => {
        if(window.scrollY < 70){
            this.setState({
                faviconHeight: 60,
                faviconWidth:60,
                linkStyle:"nav-a font-weight-bolder nav-link py-3",
                navStyle:"favicon py-3",
                hamburgerStyle:"hamburger py-4"
            })
        }else{
            this.setState({
                faviconHeight: 50,
                faviconWidth:50,
                linkStyle:"nav-a font-weight-bolder nav-link",
                navStyle:"favicon",
                hamburgerStyle:"hamburger py-3"
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
        if (e.target.className.trim().split(" ")[0] === "nav-a") {
            let parentUl = e.target.parentNode;
            this.setState({
                activeElement: parentUl
            });
        }else if(e.target.parentNode.className.trim().split(" ")[0] === "dropdownContentTitle"){
            let parentUl = e.target.parentNode.parentNode.parentNode.parentNode;
            this.setState({
                activeElement: parentUl
            });
        }
    };
    handleMouseLeave = () =>{
        if(this.state.activeElement !== null){
            this.setState({
                left: this.state.activeElement.getBoundingClientRect().left,
                width:this.state.activeElement.getBoundingClientRect().width,
            })
        }else {
            this.setState({
                left:0,
                width:0,
            })
        }
    };

    render() {
        return (
            <header className="headerBar fixed-top bg-white" onLoad={this.handleResize} >
                <nav className="navbar navbar-light  navbar-expand-lg " style={headerStyle}>
                    <div className={this.state.hamburgerStyle} >
                        <button className="hamburgerBtn">
                        <img src="assets/img/Hamburger.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                        </button>
                    </div>
                    <a className={this.state.navStyle} href="/">
                        <img src="assets/img/favicon.png" width={this.state.faviconWidth} height={this.state.faviconHeight} className="faviconPic d-inline-block align-top" alt="" />
                    </a>
                    <div className="collapse navbar-collapse " id="navbarNav" >
                        <ul className="navbar-nav navbar-nav-center mx-auto text-uppercase" >
                            <div className="stripe" style={{ left: this.state.left , width: this.state.width }} />
                            {pages.map((pages) => (
                                <li className="nav-item text position-static"  key={pages.id}  onMouseEnter={this.handleMouseEnter} onClick={this.handleMouseClick} onMouseLeave={this.handleMouseLeave} >
                                    <Link className={this.state.linkStyle} id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false" to={pages.link}  >{pages.text}</Link>
                                    <ul className="LoadContent animation dropdown-menu vw-100 " >
                                        <div className="form-inline">
                                            <div className="dropdownContentTitle dropdown-content ">
                                                <Link to={pages.link} onMouseEnter={this.handleMouseEnter}>{pages.text}</Link>
                                            </div>

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
                            <button className="btn  my-sm-0 searchBtn" type="submit" >
                                <img src="assets/img/header/searchicon.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                            </button>
                        </form>
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
