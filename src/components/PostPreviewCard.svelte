<script>
	export let post;
</script>

<div class="card" tabindex="0">
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
			<p class="invisible">{post.specificType}</p>
		</li>
	</ul>
</div>

<style>
	.card {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		border: 1px solid #eaeaea;
		border-radius: 0.5rem;
		width: 30%;
		height: 10rem;
		justify-content: center;
		cursor: pointer;
		overflow: hidden;
		margin-top: 3rem;

		transition: all 1s ease;
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
