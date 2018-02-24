/**
 * SongListItem
 *
 * Lists song data
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export class SongListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    const content = (
      <Wrapper>
        <div>{item.title}</div>
        <div>{item.artist}</div>
      </Wrapper>
    );

    return (
      <ListItem key={`song-list-item-${item._id}`} item={content} /> // eslint-disable-line no-underscore-dangle
    );
  }
}

SongListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(createStructuredSelector({}))(SongListItem);
