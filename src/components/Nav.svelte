<script>
	import { darkTheme, lightTheme } from './../constants/defaultThemes.js';
	import { themeStore, isDarkMode } from './../stores/themeStore.js';
	import { HomeIcon, MoonIcon, SunIcon, SettingsIcon } from 'svelte-feather-icons';
	import { isModalOpen } from '../stores/modalStore.js';

	const handleThemeChange = () => {
		$isDarkMode ? themeStore.set(lightTheme) : themeStore.set(darkTheme);
	};

	const handleSettingsClick = () => {
		isModalOpen.set(true);
	};
</script>

<a class="home" href="/">
	<HomeIcon />
</a>
<div class={$isDarkMode ? 'dark-toggle' : 'dark-toggle rotate'} on:click={handleThemeChange}>
	{#if $isDarkMode}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</div>

<!-- <div class="settings" on:click={handleSettingsClick}>
	<SettingsIcon />
</div> -->
<style>
	a {
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
		transition: all 0.5s ease;
	}

	.rotate {
		transform: rotate(360deg);
	}

	.settings {
		top: 1rem;
		right: 4rem;
		position: fixed;
		cursor: pointer;
	}
</style>
