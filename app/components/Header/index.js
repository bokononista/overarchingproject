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
    return (
      <header>
        <nav>
          <Link to="/">Homepage</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </header>
    );
  }
}

Header.propTypes = {

};

export default Header;
