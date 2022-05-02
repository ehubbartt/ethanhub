<script>
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
</div>

<style>
	.home {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
