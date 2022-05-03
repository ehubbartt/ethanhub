<script>
	import { darkTheme, lightTheme } from './../constants/defaultThemes.js';
	import { themeStore, isDarkMode } from './../stores/themeStore.js';
	import { HomeIcon, MoonIcon, SunIcon } from 'svelte-feather-icons';

	const handleThemeChange = () => {
		$isDarkMode ? themeStore.set(lightTheme) : themeStore.set(darkTheme);
	};
</script>

<a class="home" href="/">
	<HomeIcon />
</a>
<div class="dark-toggle" on:click={handleThemeChange}>
	{#if $isDarkMode}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</div>

<style>
	a {
		color: var(--text-color);
		top: 1rem;
		left: 1rem;
		position: fixed;
	}

	.dark-toggle {
		cursor: pointer;
		margin-left: auto;
		top: 1rem;
		right: 1rem;
		position: fixed;
	}
</style>
