/*
 * Playlists page
 *
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
import { makeSelectPlaylists, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import PlaylistsTable from 'components/PlaylistsTable';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadPlaylists } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

export class PlaylistsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadPlaylists();
  }

  render() {
    const { loading, error, playlists } = this.props;
    const playlistsTableProps = {
      loading,
      error,
      playlists,
    };

    return (
      <article>
        <Helmet>
          <title>Playlists</title>
          <meta name="description" content="You can edit playlists" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.playlistsHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.playlistsMessage} />
            </p>
          </CenteredSection>
          <Section>
            <PlaylistsTable {...playlistsTableProps} />
          </Section>
        </div>
      </article>
    );
  }
}

PlaylistsPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  playlists: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadPlaylists: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadPlaylists: () => dispatch(loadPlaylists()),
  };
}

const mapStateToProps = createStructuredSelector({
  playlists: makeSelectPlaylists(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'playlists', reducer });
const withSaga = injectSaga({ key: 'playlists', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlaylistsPage);
