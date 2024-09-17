<script>
	import { getImageUrl } from '$utils/getImageUrl.js';
	let image = getImageUrl('loto-studio-camara.svg');
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<main>
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
</style>
