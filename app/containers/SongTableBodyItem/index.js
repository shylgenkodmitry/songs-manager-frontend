import React from 'react';
import PropTypes from 'prop-types';
import { Table, Image, Rating } from 'semantic-ui-react';

export class SongTableBodyItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;

    return (
      <Table.Row>
        <Table.Cell>
          <Image avatar src={item.avatar} />
        </Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.album}</Table.Cell>
        <Table.Cell>{item.artist}</Table.Cell>
        <Table.Cell>
          <Rating icon="star" defaultRating={item.rating} maxRating={5} />
        </Table.Cell>
        <Table.Cell>{item.length}</Table.Cell>
        <Table.Cell>{item.year}</Table.Cell>
        <Table.Cell>{item.genre}</Table.Cell>
      </Table.Row>
    );
  }
}

SongTableBodyItem.propTypes = {
  item: PropTypes.object,
};

export default SongTableBodyItem;
