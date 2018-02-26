/**
 * Gets the playlists
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_ROOT, LOAD_PLAYLISTS } from 'containers/App/constants';
import { playlistsLoaded, playlistsLoadingError } from 'containers/App/actions';

/**
 * Playlists request/response handler
 */
export function* getPlaylists() {
  const requestURL = `${API_ROOT}/v1/playlists`;

  try {
    // Call our request helper (see 'utils/request')
    const playlists = yield call(request, requestURL);
    yield put(playlistsLoaded(playlists));
  } catch (err) {
    yield put(playlistsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* playlistsData() {
  // Watches for LOAD_PLAYLISTS actions and calls getPlaylists when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PLAYLISTS, getPlaylists);
}
