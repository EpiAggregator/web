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

export const CHANGE_TAB = 'app/App/CHANGE_TAB';
export const TABCHANGE_LOCATION = 'app/App/TABCHANGE_LOCATION';
export const LOGOUT = 'app/App/LOGOUT';
export const REGISTER = 'app/App/REGISTER';
export const REGISTER_SUCCESS = 'app/App/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'app/App/REGISTER_ERROR';
export const LOGIN = 'app/App/LOGIN';
export const LOGIN_SUCCESS = 'app/App/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'app/App/LOGIN_ERROR';
export const DEFAULT_LOCALE = 'en';
