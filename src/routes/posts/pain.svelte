<div class="landing-section">
	<h1 class="title">pain</h1>
	<div class="content-container">
		<p>
			it seeps into the deepest parts of your body. <br />
			it makes you want to end it all. <br />
			but worse is that I cause it. <br />

			you can only feel pain if you can Love. <br />
			a cut will heal itself eventually— <br />
			losing someone you love is forever. <br />

			You are told to come to terms. <br />
			to cut your losses and move on. <br />
			it’s never the same though. it never is. <br />
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
		height: max(50%, 35rem);
		background-color: hsla(0, 0%, 98%, 0.15);
		border-radius: 0.5rem;
		border: 2px solid var(--accent-color-1);

		display: grid;
		place-items: center;
	}

		@media (max-width: 768px) {
		.content-container {
			width: 100%;
			padding: 0.25rem;
		}
	}

	p {
		padding: 0;
		font-size: clamp(0.7rem, 1.5vw, 2rem);
		line-height: max(2rem, 3rem);
		white-space: nowrap;
		flex-shrink: 0;
	}
</style>
