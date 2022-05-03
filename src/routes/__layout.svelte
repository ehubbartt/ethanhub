<script>
	import ThemeWrapper from './../components/ThemeWrapper.svelte';
	import { themeStore } from './../stores/themeStore.js';
	import Nav from '../components/Nav.svelte';
</script>

<ThemeWrapper
	--background-color={$themeStore.backgroundColor}
	--text-color={$themeStore.textColor}
	--accent-color-1={$themeStore.accentColor1}
>
	<Nav />
	<slot />
</ThemeWrapper>

<style>
	:global(*) {
		box-sizing: border-box;
		transition: background-color 0.5s ease, color 0.5s ease;
	}
	:global(body) {
		margin: 0;
		padding: 0;

		font-family: 'Poppins', sans-serif;
		font-family: 'Roboto', sans-serif;
		font-family: 'Roboto Mono', monospace;
	}

	:global(.hidden) {
		display: none;
	}
</style>
