<script>
	import Typewriter from 'svelte-typewriter';
	import { ArrowDownIcon } from 'svelte-feather-icons';

	export let showContinue;
	export let handleContinueClick;
	export let shouldShowContinue;
	//genrate 5 random intervals between 20 and 100
	const randomIntervals = Array.from(
		{ length: 5 },
		() => Math.floor(Math.random() * (100 - 20 + 1)) + 20
	);
</script>

<div class="landing-section landing">
	<div class="typewriter">
		<Typewriter interval={randomIntervals} cascade={true} on:done={showContinue}>
			<h1>Welcome to my blog!</h1>
			<h2>You can find interactive poems and other content here.</h2>
		</Typewriter>
	</div>
	<div
		class={shouldShowContinue ? 'show continue-container' : 'continue-container'}
		on:click={handleContinueClick}
	>
		<p>Click here to continue</p>
		<ArrowDownIcon />
	</div>
</div>

<style>
	.typewriter {
		margin-top: auto;
	}

	.continue-container {
		bottom: 20px;
		transition: transform cubic-bezier(1, 0, 0, 1) 1s, scale ease 0.3s;
		transform: translateY(100px);

		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		font-weight: bold;
		margin-top: auto;
	}

	.continue-container:hover {
		scale: 1.1;
	}

	.show {
		transform: translateY(-5px);
	}
</style>
