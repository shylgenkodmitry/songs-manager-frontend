import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

export class PlaylistTableBodyItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    return (
      <Table.Row>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
      </Table.Row>
    );
  }
}

PlaylistTableBodyItem.propTypes = {
  item: PropTypes.object,
};

export default PlaylistTableBodyItem;
