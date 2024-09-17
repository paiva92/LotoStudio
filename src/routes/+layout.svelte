<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { getImageUrl } from '$utils/getImageUrl.js';
</script>

<nav class="animate delay-1">
	<img src={getImageUrl('loto-studio-camara.svg')} width="40px" alt="loto-studio-logo"/>
	<span>Loto Studio</span>
	<a href="{base}/">Home</a>
	<a href="{base}/sessions">Sesiones</a>
	<a href="{base}/about">Sobre mi</a>
	<a href="{base}/contact">Contacto</a>
</nav>

<slot />

<button class="animate delay-1"><img src={getImageUrl('WhatsApp_icon.png')} width="40px" alt="WhatsApp"/></button>

<style>
	span {
		color: white;
	}
	nav {
		display: grid;
		grid-template-columns: 40px 3fr repeat(4, 120px) 20px;
		gap: 1rem;
		width: 100%;
		padding: 20px;
		position: fixed;
		top: 0;
		z-index: 9999;

		img {
			filter: invert(1);
			margin-top: -5px;
		}
	}

	button {
		position: fixed;
		bottom: 10px;
		right: 10px;
		z-index: 9999;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
		transition: scale 0.3s ease-in;
		&:hover{
			scale: 1.1
		}
	}
</style>
