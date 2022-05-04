<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	$: ballClass = 'toggle-ball off';

	export let toggleValue;

	const dispatch = createEventDispatcher();

	let ballRef;
	onMount(() => {
		ballRef = document.querySelector('.toggle-ball');
		ballRef.addEventListener('animationend', () => {
			ballClass = toggleValue ? 'toggle-ball on' : 'toggle-ball off';
		});
	});

	const handleToggle = () => {
		dispatch('toggle', !toggleValue);
		if (!toggleValue) {
			ballClass = 'toggle-ball off animate-right';
		} else {
			ballClass = 'toggle-ball on animate-left';
		}
		toggleValue = !toggleValue;
	};
</script>

<div class="toggle" on:click={handleToggle}>
	<div class={ballClass} bind:this={ballRef} />
</div>

<style>
	.toggle {
		width: 6rem;
		height: 3rem;
		background: rgb(98, 95, 95);
		border-radius: 100rem;
		display: flex;
		align-items: center;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		position: relative;
		transition: all 0.5s ease;
		cursor: pointer;
		outline: 2px solid rgb(84, 84, 84);
	}

	.toggle-ball {
		width: 2.25rem;
		height: 2.25rem;
		background: var(--accent-color-1);
		border-radius: 100rem;
		position: absolute;
	}

	.animate-right {
		animation: right 0.5s ease forwards;
	}

	.animate-left {
		animation: left 0.5s ease forwards;
	}

	.on {
		right: 0.5rem;
	}

	.off {
		left: 0.5rem;
	}

	@keyframes right {
		from {
			width: 2.25rem;
			transform: translateX(0rem);
		}
		75% {
			width: 3.5rem;
			transform: translateX(0rem);
		}
		to {
			width: 2.25rem;
			transform: translateX(2.75rem);
		}
	}

	@keyframes left {
		from {
			width: 2.25rem;
			transform: translateX(0rem);
		}
		75% {
			width: 3rem;
			transform: translateX(0rem);
		}
		to {
			width: 2.25rem;
			transform: translateX(-2.75rem);
		}
	}
</style>
