import React from 'react';
import { Table } from 'semantic-ui-react';

export class SongTableHeadItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Album</Table.HeaderCell>
        <Table.HeaderCell>Artist</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
        <Table.HeaderCell>Length</Table.HeaderCell>
        <Table.HeaderCell>Year</Table.HeaderCell>
        <Table.HeaderCell>Genre</Table.HeaderCell>
      </Table.Row>
    );
  }
}

export default SongTableHeadItem;
