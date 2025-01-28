<script>
	import { siteTitle, siteDescription } from '$lib/config';
</script>

<header>
	<h1>{siteTitle}</h1>
	<p><a href="https://github.com/iguacel/post-graphics-feed" target="_blank" rel="noopener noreferrer">Github repo</a></p> 
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0 0 4rem 0;
	}

	h1 {
		font-family: 'Tiny5', serif;
		font-size: 2.5rem;
		opacity: 0.8;
	}

	p {
		margin-top: 2rem;
		font-size: 1rem;
		font-weight: 300;
		max-width: 310px;
	}

	a {
		font-weight: 200;
		opacity: 0.5;
	}
</style>
