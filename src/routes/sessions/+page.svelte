<script>
	import { getImageUrl } from '$utils/getImageUrl.js';
	import Carousel from '$lib/Carousel.svelte';
	let image = getImageUrl('maternal/portada.webp');
</script>

<svelte:head>
	<title>Sessions</title>
</svelte:head>

<div class="title animate delay-1"><h1 class="dancing">Sesiones</h1></div>

<div class="container animate">
	<Carousel dots={false}
		><div class="first">
			<h1>Maternal</h1>
			<img src={getImageUrl('maternal/portada.webp')} alt="Portada Maternal" />
			<h2>Ver Galería</h2>
		</div>
		<div>
			<h1>New Born</h1>
			<img src={getImageUrl('newborn/portada.webp')} alt="Portada Maternal" />
			<h2>Ver Galería</h2>
		</div>
		<div>
			<h1>Babys</h1>
			<img src={getImageUrl('babys/portada.webp')} alt="Portada Maternal" />
			<h2>Ver Galería</h2>
		</div>
		<div>
			<h1>Pre Cumple</h1>
			<img src={getImageUrl('pre-cumple/portada.webp')} alt="Portada Maternal" />
			<h2>Ver Galería</h2>
		</div>
		<div>
			<h1>Mini Sesiones</h1>
			<img
				src={getImageUrl('mini-sesiones/portada.webp')}
				alt="Portada Maternal"
				style="object-position: 70%"
			/>
			<h2>Ver Galería</h2>
		</div>
		<svg
			slot="right-control"
			xmlns="http://www.w3.org/2000/svg"
			width="5vh"
			height="5vh"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon-click"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg
		>
		<svg
			slot="left-control"
			xmlns="http://www.w3.org/2000/svg"
			width="5vh"
			height="5vh"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="icon-click"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg
		>
	</Carousel>
</div>

<style>
	svg {
		color: white;
		opacity: 90%;
	}
	.title {
		margin-top: 5vh;
		display: flex;
		justify-content: center;
		h1 {
			margin: 2vh;
			font-size: 7vh;
		}
	}
	.container {
		height: 80vh;
		margin-right: 5vw;
		margin-left: 5vw;

		div {
			margin-left: 10px;
			margin-right: 10px;
			height: 80vh;
			border-radius: 10px;
			cursor: pointer;
			position: relative;
			overflow: hidden;
			h1 {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 9999;
				opacity: 80%;
				transition: opacity 0.5s ease-in-out;
			}
			h2 {
				position: absolute;
				bottom: 0;
				left: 50%;
				transition: transform 0.5s ease-in-out;
				padding: 40px;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.587);
				transform: translate(-50%, 120px);
				text-align: center;
				font-size: 20px;
			}
		}
		div:hover {
			h1 {
				opacity: 1;
				text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.644);
			}
			h2 {
				transform: translate(-50%, 15px);
			}
			img {
				scale: 1.3;
			}
		}
	}
	.first {
		grid-column: 2 / span 2 !important;
	}

	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
		transition: scale 0.5s ease-in-out;
	}
</style>
