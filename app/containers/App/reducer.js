/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_SONGS_SUCCESS,
  LOAD_SONGS,
  LOAD_SONGS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    songs: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SONGS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'songs'], false);
    case LOAD_SONGS_SUCCESS:
      return state
        .setIn(['data', 'songs'], action.songs)
        .set('loading', false);
    case LOAD_SONGS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
