import React from 'react';
import PropTypes from 'prop-types';

import CTable from 'components/CTable';
import LoadingIndicator from 'components/LoadingIndicator';
import PlaylistTableHeadItem from 'containers/PlaylistTableHeadItem';
import PlaylistTableBodyItem from 'containers/PlaylistTableBodyItem';

function PlaylistsTable({ loading, error, playlists }) {
  if (loading) {
    return <CTable singleComponent={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <h4>Something went wrong, please try again!</h4>
    );
    return <CTable singleComponent={ErrorComponent} />;
  }

  if (playlists) {
    return (
      <CTable
        itemFieldsCount={2}
        bodyItems={playlists}
        headItemComponent={PlaylistTableHeadItem}
        bodyItemComponent={PlaylistTableBodyItem}
      />
    );
  }

  return null;
}

PlaylistsTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  playlists: PropTypes.any,
};

export default PlaylistsTable;
