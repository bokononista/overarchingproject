/*
 *
 * Contact
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from 'components/Header';

export class Contact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Description of Contact' },
          ]}
        />
        <Header/>
        <div>Email: chaselanier@gmail.com</div>
      </div>

    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Contact);
