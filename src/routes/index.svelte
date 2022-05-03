<script>
	import * as animateScroll from 'svelte-scrollto';

	import BlogList from '../components/BlogList.svelte';
	import Landing from '../components/Landing.svelte';

	$: shouldShowContinue = false;
	let shouldShowBlogList = false;

	$: {
		if (shouldShowBlogList) {
			animateScroll.scrollTo({
				duration: 1000,
				element: '#blog-list'
			});
		}
	}

	const showContinue = () => {
		shouldShowContinue = true;
	};

	const handleContinueClick = () => {
		shouldShowBlogList = true;
		shouldShowContinue = false;
	};
</script>

<Landing {showContinue} {handleContinueClick} {shouldShowContinue} />
<BlogList {shouldShowBlogList} />

<style>
</style>
