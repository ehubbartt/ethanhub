<div class="landing-section">
	<h1 class="title">Blue</h1>
	<div class="content-container">
		<p>
			There is something about ubiquity that is scary <br />
			A single color that stretches from the depths of the ocean <br />
			to the highest point in the sky <br />
			Similarly it reaches deep down inside you— <br />
			infects your mind. <br />
			Until you wonder if you can ever be happy again. <br />
		</p>
	</div>
</div>

<style>
	.landing-section {
		align-items: center;
		justify-content: center;
	}

	.content-container {
		width: max(30rem, 70%);
		height: max(30rem, 50%);
		background-color: hsla(0, 0%, 98%, 0.15);
		border-radius: 0.5rem;
		border: 2px solid var(--accent-color-1);

		display: grid;
		place-items: center;
		padding: 2rem;
	}

	p {
		padding: 0;
		font-size: clamp(0.75rem, 1.5vw, 2rem);
		line-height: max(2rem, 3rem);
		white-space: nowrap;
		flex-shrink: 0;
	}
</style>
