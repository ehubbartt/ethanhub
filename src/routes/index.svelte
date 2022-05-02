<script>
	import BlogList from '../components/BlogList.svelte';
	import Landing from '../components/Landing.svelte';

	$: shouldShowContinue = false;

	const showContinue = () => {
		shouldShowContinue = true;
	};

	const handleContinueClick = () => {
		shouldShowContinue = false;
	};
</script>

<div class="home">
	<Landing {showContinue} {handleContinueClick} {shouldShowContinue} />
	<BlogList />
</div>

<style>
	:global(.landing-section) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 4rem);
		overflow: hidden;
	}
	.home {
		height: 100%;
	}
</style>
