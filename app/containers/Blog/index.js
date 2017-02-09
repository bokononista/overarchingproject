/*
 *
 * Blog
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';

export class Blog extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Blog"
          meta={[
            { name: 'description', content: 'Description of Blog' },
          ]}
        />
        <Header/>
        <div>
          <img/>
          <header>Title1</header>
          <p>Words</p>
        </div>

        <div>
          <img/>
          <header>Title2</header>
          <p>Words</p>
        </div>

        <div>
          <img/>
          <header>Title3</header>
          <p>Words</p>
        </div>

        <div>
          <img/>
          <header>Title4</header>
          <p>Words</p>
        </div>

      </div>
    );
  }
}

Blog.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Blog);
