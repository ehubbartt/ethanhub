<script>
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
</script>

<!-- this will only be scrolled to if the height is 0 -->
<div class={shouldShowBlogList ? 'landing-section' : 'no-height'} id="blog-list">
	{#if shouldShowBlogList}
		<Typewriter
			delay={750}
			cascade
			interval={randomIntervalsGenerator(100, 250)}
			on:done={handleTypewriterDone}
		>
			<h1>Posts</h1>
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

	#blog-list {
		align-items: center;
	}
</style>
