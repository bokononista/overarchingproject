/**
*
* Header
*
*/

import React from 'react';
import {Link} from 'react-router';

// import styled from 'styled-components';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const headerStyle={
      background:"#c7e0df"
    };
    const linkStyle={
      color:"#697777",
      textDecoration: "none",
      padding:"5px",
      margin: "20px"
    };
    return (
      <header style={headerStyle}>
        <nav>
          <Link style={linkStyle} to="/">Homepage</Link>
          <Link style={linkStyle} to="/portfolio">Portfolio</Link>
          <Link style={linkStyle} to="/blog">Blog</Link>
          <Link style={linkStyle} to="/contact">Contact</Link>
        </nav>

      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
