/**
*
* Header
*
*/

import React from 'react';
import {Link} from 'react-router';
import Responsive from 'react-responsive';


// import styled from 'styled-components';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);
    this.state={menuOpen:false}
  }
  handleMenu(){
    if(this.state.menuOpen==false){
      this.setState({
        menuOpen:true
      })
    }else{
      this.setState({
        menuOpen:false
      })
    }
  }
  renderMenu(){
    const navStyleMobile={
      display:"flex",
      flexDirection:"column"
    }
    const linkStyle={
      color:"#697777",
      textDecoration: "none",
      padding:"5px",
      margin: "20px"
    }
    if(this.state.menuOpen==true){
      return(
        <nav style={navStyleMobile}>
          <Link style={linkStyle} to="/">Homepage</Link>
          <Link style={linkStyle} to="/portfolio">Portfolio</Link>
          <Link style={linkStyle} to="/blog">Blog</Link>
          <Link style={linkStyle} to="/contact">Contact</Link>
        </nav>

      )
    }
  }

  render() {
    const headerStyle={
      background:"#c0c3c6",

    };
    const navStyle={
      display:"flex",
      flexDirection:"row"
    }

    const linkStyle={
      color:"#697777",
      textDecoration: "none",
      padding:"5px",
      margin: "20px"
    };
    return (
      <header style={headerStyle}>

        <Responsive minDeviceWidth={1024}>
          <nav style={navStyle}>
            <Link style={linkStyle} to="/">Homepage</Link>
            <Link style={linkStyle} to="/portfolio">Portfolio</Link>
            <Link style={linkStyle} to="/blog">Blog</Link>
            <Link style={linkStyle} to="/contact">Contact</Link>
          </nav>

        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <a href="#" onClick={() => this.handleMenu()}><img src="http://h4z.it/Image/fafe3b_burger.png"/></a>
        {this.renderMenu()}


        </Responsive>
      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
