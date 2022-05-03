<script>
	export let post;

	let title = post.title;
	let lowerCaseTitle = title.toLowerCase();
</script>

<a href={`/posts/${lowerCaseTitle}`} class="card">
	<ul>
		<li>
			<h1>{post.title}</h1>
		</li>
		<li class="list-info">
			<p class="invisible">{post.date}</p>
		</li>
		<li>
			<p class="invisible">{post.description}</p>
		</li>
		<li>
			<p class="invisible">{`${post.genericType}: ${post.specificType}`}</p>
		</li>
	</ul>
</a>

<style>
	.card {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		border: 1px solid var(--accent-color-1);
		border-radius: 0.5rem;
		width: 30%;
		height: 10rem;
		justify-content: center;
		cursor: pointer;
		overflow: hidden;
		margin-top: 3rem;

		transition: all 1s ease;
	}

	h1 {
		color: var(--accent-color-1);
	}

	ul {
		text-align: center;
		list-style: none;
		margin: 0;
		padding: 0;
		line-height: 24px;
		white-space: nowrap;
		width: 100%;
		transition: width 1s ease;
	}

	p {
		margin: 0;
	}

	.card:hover,
	.card:focus {
		width: 80%;
		background-color: hsla(0, 0%, 98%, 0.147);
	}

	.card:hover ul,
	.card:focus ul {
		width: 0;
	}

	.card:hover p,
	.card:focus p {
		animation: fadeIn 0.5s forwards 1s;
	}

	.card:hover .list-info,
	.card:focus .list-info {
		margin-top: 0;
	}

	.list-info {
		margin-top: -72px;
		transition: margin 1s ease;
	}
	.invisible {
		opacity: 0;
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
