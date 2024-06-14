<script>
	import { siteTitle, siteDescription } from '$lib/config';
</script>

<header>
	<h1>{siteTitle}</h1>
	<p>A <s>curated</s> list of recent articles published by The Washington Post's graphics team.</p>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0 0 4rem 0;
	}

	h1 {
		font-size: 2.5rem;
		opacity: 0.8;
		font-weight: 500;
	}

	p {
		margin-top: 2rem;
		font-size: 1rem;
		font-weight: 300;
		max-width: 310px;
	}
</style>
