import React from 'react';
import { Table } from 'semantic-ui-react';

export class PlaylistTableHeadItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    );
  }
}

export default PlaylistTableHeadItem;
