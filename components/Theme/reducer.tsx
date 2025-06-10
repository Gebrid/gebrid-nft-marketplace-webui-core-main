import { equals, PersistenceRegistry, ReducerRegistry, set } from '../../state';

import { SET_THEME_DARK, SET_THEME_LIGHT, THEME_TOGGLE } from './actionTypes';

const DEFAULT_STATE = {
  theme: 'theme-light',
};

const STORE_NAME = 'layout/theme';

PersistenceRegistry.register(STORE_NAME, {
  theme: true,
});

ReducerRegistry.register(STORE_NAME, (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_THEME_DARK:
      return _setThemeLight(state);
    case SET_THEME_LIGHT:
      return _setThemeDark(state);
    case THEME_TOGGLE:
      return _themeToggle(state);

    default:
      return state;
  }
});

function _setThemeLight(state: any) {
  return set(state, 'theme', 'theme-light');
}

function _setThemeDark(state: any) {
  return set(state, 'theme', 'theme-dark');
}

function _themeToggle(state: any) {
  if (equals(state.theme, 'theme-light')) {
    return _setThemeDark(state);
  } else {
    return _setThemeLight(state);
  }
}
