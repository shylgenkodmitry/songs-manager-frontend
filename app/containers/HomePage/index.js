/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectSongs, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import SongsTable from 'components/SongsTable';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadSongs } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.loadSongs();
  }

  render() {
    const { loading, error, songs } = this.props;
    const songsTableProps = {
      loading,
      error,
      songs,
    };

    return (
      <article>
        <Helmet>
          <title>Enjoy Songs</title>
          <meta name="description" content="Songs Manager" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.enjoySongsHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.enjoySongsMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.songsHeader} />
            </H2>
            <SongsTable {...songsTableProps} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  songs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadSongs: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadSongs: () => dispatch(loadSongs()),
  };
}

const mapStateToProps = createStructuredSelector({
  songs: makeSelectSongs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
