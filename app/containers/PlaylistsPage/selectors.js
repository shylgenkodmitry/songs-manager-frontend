/**
 * Playlistspage selectors
 */

import { createSelector } from 'reselect';

const selectPlaylists = (state) => state.get('playlists');

const makeSelectUsername = () => createSelector(
  selectPlaylists,
  (playlistsState) => playlistsState.get('username')
);

export {
  selectPlaylists,
  makeSelectUsername,
};
