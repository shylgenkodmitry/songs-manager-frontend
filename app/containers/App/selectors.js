/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectSongs = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['data', 'songs'])
);

const makeSelectPlaylists = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['data', 'playlists'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectSongs,
  makeSelectPlaylists,
  makeSelectLocation,
};
