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

<div class="home">
	<Landing {showContinue} {handleContinueClick} {shouldShowContinue} />
	<BlogList {shouldShowBlogList} />
</div>

<style>
	:global(.landing-section) {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 4rem);
		overflow: hidden;
	}
	.home {
		height: 100%;
	}
</style>
