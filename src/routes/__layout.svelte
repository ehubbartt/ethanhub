<script>
	import Nav from '../components/Nav.svelte';
</script>

<main>
	<Nav />
	<slot />
</main>

<style>
	:global(*) {
		box-sizing: border-box;
	}
	:global(body) {
		margin: 0;
		padding: 0;
		background-image: url('../assets/background.svg');

		font-family: 'Poppins', sans-serif;
		font-family: 'Roboto', sans-serif;
		font-family: 'Roboto Mono', monospace;
		color: whitesmoke;
	}

	:global(.hidden) {
		display: none;
	}

	main {
		padding: 1rem;
		height: calc(100vh - 3rem);
	}
</style>
