<script>
	import { visited } from './../stores/localStorage.js';
	import { randomIntervalsGenerator } from '../util/randomIntervalsGenerator';
	import Typewriter from 'svelte-typewriter';
	import PostPreviewCardList from './PostPreviewCardList.svelte';
	export let shouldShowBlogList;

	let shouldShowPostList = false;
	const handleTypewriterDone = () => {
		setTimeout(() => {
			shouldShowPostList = true;
		}, 500);
	};

	const intervalMin = $visited ? 20 : 100;
	const intervalMax = $visited ? 100 : 250;
</script>

<!-- this will only be scrolled to if the height is 0 -->
<div class={shouldShowBlogList ? 'landing-section' : 'no-height'} id="blog-list">
	{#if shouldShowBlogList}
		<Typewriter
			delay={750}
			cascade
			interval={randomIntervalsGenerator(intervalMin, intervalMax)}
			on:done={handleTypewriterDone}
		>
			<h1 class={shouldShowBlogList && 'underline'}>Posts</h1>
		</Typewriter>
	{/if}
	{#if shouldShowPostList}
		<PostPreviewCardList />
	{/if}
</div>

<style>
	.no-height {
		height: 0;
		overflow: auto;
	}

	h1 {
		margin: 0;
	}

	#blog-list {
		align-items: center;
	}

	.underline {
		position: relative;
	}

	.underline::after {
		content: '' !important;
		height: 2px;
		background: var(--accent-color-1);
		position: absolute;
		bottom: -3px;
		left: 0;
		animation: growWidth 1s ease forwards;
	}

	@keyframes growWidth {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}
</style>
