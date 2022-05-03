import { writable, derived } from 'svelte/store';
import { darkTheme } from '../constants/defaultThemes';

export const themeStore = writable(darkTheme);
export const isDarkMode = derived(themeStore, ($theme) => $theme.name.includes('dark'));
