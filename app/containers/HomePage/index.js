/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Link} from 'react-router';
import Header from 'components/Header';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={

    }

  }
  componentWillMount(){

  }

  render() {
    const mainStyle={
      color:"#697777",
      display:"flex",
      margin:"15px",
      padding:"15px",
      border:"2px solid #697777"
    };
    const containerStyle={
      display:"flex",
      minHeight:"100vh",
      flexDirection:"column",
      backgroundImage: "url(http://h4z.it/Image/ddb74e_schism.png)",
      backgroundSize:"cover",

    }
    return (
      <div style={containerStyle}>
        <Header/>

        <main style={mainStyle}>Welcome to Bokononistaville!
            <br/>Have a look around!


        </main>

        <footer>
          <span>ALL RIGHTS RESERVED</span>
        </footer>
      </div>
    );
  }
}
