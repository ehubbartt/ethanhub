<script>
	import { visited } from './../stores/localStorage.js';
	import * as animateScroll from 'svelte-scrollto';
	import BlogList from '../components/BlogList.svelte';
	import Landing from '../components/Landing.svelte';
	import { toast } from '@zerodevx/svelte-toast';

	$: shouldShowContinue = false;
	let shouldShowBlogList = false;
	const curVisited = $visited || false;

	if (!curVisited) {
		visited.set(true);
	} else {
		shouldShowBlogList = true;
	}

	const showContinue = () => {
		shouldShowContinue = true;

		if ($visited !== curVisited) {
			toast.push(
				'On subsequent visits the animation will not be shown. You can change this in settings',
				{
					onpop: () => {
						toast.pop(0);
					}
				}
			);
		}
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
