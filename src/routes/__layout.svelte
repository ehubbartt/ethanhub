<script>
	import ThemeWrapper from './../components/ThemeWrapper.svelte';
	import { themeStore } from './../stores/themeStore.js';
	import Nav from '../components/Nav.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import '../global.css';
</script>

<ThemeWrapper
	--background-color={$themeStore.backgroundColor}
	--text-color={$themeStore.textColor}
	--accent-color-1={$themeStore.accentColor1}
>
	<Nav />
	<slot />
	<SvelteToast />
</ThemeWrapper>

<style>
</style>
