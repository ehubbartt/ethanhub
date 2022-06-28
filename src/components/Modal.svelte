<script>
	import Toggle from './Toggle.svelte';
	import { onMount } from 'svelte';
	import { isModalOpen } from './../stores/modalStore.js';
	let modal;
	onMount(() => {
		modal = document.querySelector('dialog');
	});

	$: {
		if ($isModalOpen) {
			modal && modal.showModal();
		} else {
			modal && modal.close();
		}
	}
	$: isAnimationEnabled = false;
</script>

<dialog bind:this={modal} class="hidden">
	<h1>Settings</h1>
	<Toggle bind:toggleValue={isAnimationEnabled} />
	<p>{isAnimationEnabled}</p>
</dialog>

<style>
	dialog {
		width: 70%;
		height: 50%;
		border-radius: 0.5rem;
		border: none;
		background-color: var(--background-color);
		color: var(--text-color);
		display: flex;
		flex-direction: column;
	}

	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
	}

	h1 {
		text-align: center;
	}
</style>
