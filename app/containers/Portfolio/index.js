/*
 *
 * Portfolio
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';

export class Portfolio extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Portfolio"
          meta={[
            { name: 'description', content: 'Description of Portfolio' },
          ]}
        />
        <Header/>
        <div>1</div>
          <br/>
        <div>2</div>
          <br/>
        <div>3</div>
          <br/>
        <div>4</div>
          <br/>
        <div>5</div>
          <br/>
        <div>6</div>
          <br/>
        <div>7</div>
          <br/>
        <div>8</div>
          <br/>
        <div>9</div>
          <br/>
        <div>10</div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Portfolio);
