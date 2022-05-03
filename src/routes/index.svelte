<script>
	import { visited } from './../stores/localStorage.js';
	import * as animateScroll from 'svelte-scrollto';

	import BlogList from '../components/BlogList.svelte';
	import Landing from '../components/Landing.svelte';

	$: shouldShowContinue = false;
	let shouldShowBlogList = false;
	const curVisited = $visited || false;

	if (!curVisited) {
		visited.set(true);
	} else {
		shouldShowBlogList = true;
	}

	console.log($visited, curVisited);

	const showContinue = () => {
		shouldShowContinue = true;
	};

	const handleContinueClick = () => {
		shouldShowBlogList = true;
		shouldShowContinue = false;

		animateScroll.scrollTo({
			duration: 1000,
			element: '#blog-list'
		});
	};
</script>

{#if !curVisited}
	<Landing {showContinue} {handleContinueClick} {shouldShowContinue} />
{/if}
<BlogList {shouldShowBlogList} />

<style>
</style>
