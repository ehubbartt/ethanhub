<script>
	import { posts } from './../constants/posts.js';
	import { fade } from 'svelte/transition';
	import PostPreviewCard from './PostPreviewCard.svelte';
</script>

<div class="card-container" transition:fade>
	{#each posts as post}
		<PostPreviewCard {post} />
	{/each}
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
</style>
