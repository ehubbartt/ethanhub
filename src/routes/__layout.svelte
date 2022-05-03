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
		transition: background-color 0.5s ease;
	}
	:global(body, html) {
		margin: 0;
		padding: 0;
		height: 100%;

		font-family: 'Poppins', sans-serif;
		font-family: 'Roboto', sans-serif;
		font-family: 'Roboto Mono', monospace;
	}

	:global(a) {
		color: var(--text-color);
		text-decoration: none;
	}

	:global(.landing-section) {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 4rem);
		overflow: hidden;
		width: 100%;
	}

	:global(.hidden) {
		display: none;
	}
</style>
