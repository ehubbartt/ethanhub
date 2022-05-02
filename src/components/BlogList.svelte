<script>
	import PostPreviewCardList from './PostPreviewCardList.svelte';
	export let shouldShowBlogList;
</script>

<!-- this will only be scrolled to if the height is 0 -->
<div class={shouldShowBlogList ? 'landing-section' : 'no-height'} id="blog-list">
	<h1>Posts</h1>
	<PostPreviewCardList />
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
