<script>
	import { randomIntervalsGenerator } from './../util/randomIntervalsGenerator.js';
	import Typewriter from 'svelte-typewriter';
	import { ArrowDownIcon } from 'svelte-feather-icons';
	import { themeStore } from './../stores/themeStore.js';
	export let showContinue;
	export let handleContinueClick;
	export let shouldShowContinue;
</script>

<div class="landing-section" id="landing">
	<div class="typewriter">
		<Typewriter
			interval={randomIntervalsGenerator(20, 100)}
			cascade={true}
			on:done={showContinue}
			cursor={$themeStore.textColor}
		>
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
	#landing {
		align-items: center;
		justify-content: center;
	}

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
