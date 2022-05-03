import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const visited = writable(browser ? localStorage.getItem('visited') : false);

visited.subscribe((value) => {
	if (browser) {
		localStorage.setItem('visited', value);
	}
});
