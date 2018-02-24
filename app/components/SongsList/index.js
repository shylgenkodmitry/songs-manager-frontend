import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import SongListItem from 'containers/SongListItem';

function SongsList({ loading, error, songs }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (songs !== false) {
    return <List items={songs} component={SongListItem} />;
  }

  return null;
}

SongsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  songs: PropTypes.any,
};

export default SongsList;
