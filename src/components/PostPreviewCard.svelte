<script>
	$: isFocused = false;

	const handleFocus = () => {};

	const handleNoFocus = () => {};
</script>

<div class="card">
	<ul>
		<li>
			<h1>BLUE</h1>
		</li>
		<li class="list-info">
			<p class="invisible">05/05/2020</p>
		</li>
		<li>
			<p class="invisible">A sad but short poem about the color blue</p>
		</li>
		<li>
			<p class="invisible">Poem: free-form</p>
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

	.card:hover {
		width: 80%;
		background-color: hsla(0, 0%, 98%, 0.147);
	}

	.card:hover ul {
		width: 0;
	}

	.card:hover p {
		animation: fadeIn 0.5s forwards 1s;
	}

	.card:hover .list-info {
		margin-top: 0;
	}

	.list-info {
		margin-top: -72px;
		transition: margin 1s ease;
	}
	.invisible {
		opacity: 0;
	}

	@keyframes translateUp {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-1rem);
		}
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
