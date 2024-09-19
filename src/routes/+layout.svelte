<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { getImageUrl } from '$utils/getImageUrl.js';
	let activePage = 'home';
	function onNavigation(page) {
		if (activePage != page) {
			activePage = page;
		}
	}
</script>

<nav class="animate delay-1">
	<img src={getImageUrl('loto-studio-camara.svg')} width="40px" alt="loto-studio-logo" />
	<span>Loto Studio</span>
	<a
		class={activePage === 'home' ? 'active' : ''}
		href="{base}/"
		onclick={() => onNavigation('home')}>Home</a
	>
	<a
		class={activePage === 'sessions' ? 'active' : ''}
		href="{base}/sessions"
		onclick={() => onNavigation('sessions')}>Sesiones</a
	>
	<a
		class={activePage === 'about' ? 'active' : ''}
		href="{base}/about"
		onclick={() => onNavigation('about')}>Sobre mi</a
	>
	<a
		class={activePage === 'contact' ? 'active' : ''}
		href="{base}/contact"
		onclick={() => onNavigation('contact')}>Contacto</a
	>
</nav>

<slot />

<button class="animate delay-1"
	><img class="icon-click animation" src={getImageUrl('WhatsApp_icon.png')} width="60px" alt="WhatsApp" /></button
>

<style>
	span {
		color: var(--color-theme-2);
		font-size: 18px;
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

		a {
			font-size: 18px;
		}

		.active {
			color: var(--color-theme-2);
			text-shadow: 0px 2px 4px rgba(255, 255, 255, 0.644);
		}

		img {
			filter: invert(1);
			margin-top: -5px;
		}
	}

	button {
		position: fixed;
		bottom: 20px;
		right: 10px;
		z-index: 9999;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	:global(body:has(#home)) {
		background-size: 100vw 100vh;
		background-image: radial-gradient(
				50% 50% at 50% 50%,
				rgba(255, 255, 255, 0.18) 0%,
				rgba(255, 255, 255, 0) 100%
			),
			linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
	}
</style>
