/**
 * Gets the songs
 */

import request from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { API_ROOT, LOAD_SONGS } from 'containers/App/constants';
import { songsLoaded, songsLoadingError } from 'containers/App/actions';

/**
 * Songs request/response handler
 */
export function* getSongs() {
  const requestURL = `${API_ROOT}/v1/songs`;

  try {
    // Call our request helper (see 'utils/request')
    const songs = yield call(request, requestURL);
    yield put(songsLoaded(songs));
  } catch (err) {
    yield put(songsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* songsData() {
  // Watches for LOAD_SONGS actions and calls getSongs when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_SONGS, getSongs);
}
