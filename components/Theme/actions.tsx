import { SET_THEME_DARK, SET_THEME_LIGHT, THEME_TOGGLE } from './actionTypes';

export const setThemeLight = () => ({
  type: SET_THEME_LIGHT,
});

export const setThemeDark = () => ({
  type: SET_THEME_DARK,
});

export const themeToggle = () => ({
  type: THEME_TOGGLE,
});
