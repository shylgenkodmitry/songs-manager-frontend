import React from 'react';
import PropTypes from 'prop-types';

import CTable from 'components/CTable';
import LoadingIndicator from 'components/LoadingIndicator';
import SongTableHeadItem from 'containers/SongTableHeadItem';
import SongTableBodyItem from 'containers/SongTableBodyItem';

function SongsTable({ loading, error, songs }) {
  if (loading) {
    return <CTable singleComponent={LoadingIndicator} />;
  }

  if (error) {
    const ErrorComponent = () => (
      <h4>Something went wrong, please try again!</h4>
    );
    return <CTable singleComponent={ErrorComponent} />;
  }

  if (songs) {
    return (
      <CTable
        itemFieldsCount={8}
        bodyItems={songs}
        headItemComponent={SongTableHeadItem}
        bodyItemComponent={SongTableBodyItem}
      />
    );
  }

  return null;
}

SongsTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  songs: PropTypes.any,
};

export default SongsTable;
