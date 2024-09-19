<script>
	import { getImageUrl } from '$utils/getImageUrl.js';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<main id="home">
	<div class="name animate delay-4">
		<span>Sofía Zannier</span>
		<svg class="icon-click" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="m12 16 4-4-4-4"/></svg>
	</div>
	<div class="container">
		<div class="title">
			<h1 class="animate delay-2">Loto Studio</h1>
			<h2 class="animate delay-3">Fotografía Materna Infantil</h2>
		</div>
		<img class="animate" src={getImageUrl('loto-sutdio-principal.png')} alt="test" />
	</div>
</main>

<style>
	.container {
		display: flex;
		height: calc(100vh - 5px);
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	img {
		position: absolute;
		height: 140vh;
		object-fit: contain;
		top: -60px;
		right: 10vw;
	}
	.title {
		margin-top: 10vh;
		margin-left: 20%;

		h1 {
			font-size: 12vh;
			color: rgb(190, 217, 208);
			text-shadow: 0px 2px 6px rgba(255, 255, 255, 0.234);
			margin-bottom: 10px;
		}
		h2 {
			font-size: 5vh;
			color: var(--color-theme-1);
			margin: 0;
		}
	}
	div.name {
		display: flex;
		position: absolute;
		bottom: 15vh;
		background-color: azure;
		height: 10vh;
		width: 75vw;
		color: var(--color-bg-1);
		font-size: 5vh;
		align-items: center;
		font-weight: bold;

		span {
			margin-left: 20vw;
			margin-right: 5vw;
		}
		svg{
			height: 5vh;
			z-index: 9999;
		}
	}
</style>
