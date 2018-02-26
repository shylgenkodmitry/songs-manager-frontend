/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const API_ROOT = 'http://localhost:9000';
export const LOAD_SONGS = 'boilerplate/App/LOAD_SONGS';
export const LOAD_SONGS_SUCCESS = 'boilerplate/App/LOAD_SONGS_SUCCESS';
export const LOAD_SONGS_ERROR = 'boilerplate/App/LOAD_SONGS_ERROR';
export const LOAD_PLAYLISTS = 'boilerplate/App/LOAD_PLAYLISTS';
export const LOAD_PLAYLISTS_SUCCESS = 'boilerplate/App/LOAD_PLAYLISTS_SUCCESS';
export const LOAD_PLAYLISTS_ERROR = 'boilerplate/App/LOAD_PLAYLISTS_ERROR';
export const DEFAULT_LOCALE = 'en';
