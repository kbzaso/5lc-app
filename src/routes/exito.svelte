<script>
	import { ConfettiExplosion } from 'svelte-confetti-explosion';
	import { tick } from 'svelte';

	let x, y;
	let isVisible = false;

	const handleClick = async (e) => {
		x = e.clientX;
		y = e.clientY;

		isVisible = false;
		await tick();
		isVisible = true;
	};
</script>

<svelte:body on:click={handleClick} />

{#if isVisible}
	<ConfettiExplosion --x="{x}px" --y="{y}px" />
{/if}

<svelte:head>
	<title>5LC - Tu aporte fue exitoso</title>
</svelte:head>
<div class="w-full md:w-9/12 lg:w-6/12 m-auto mt-0 md:my-10">
	<div class="mb-6 alert alert-success shadow-lg rounded-md">
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Tú aporte ha sido exitoso!</span>
		</div>
	</div>
	<div class="flex justify-center mb-6">
		<img class="w-28" src="/logo.png" alt="Logotipo de 5 Luchas Clandestino" />
	</div>
	<div class="text-center">
		<span class="text-xl text-accent">Lanza confetti con un click</span>
		<h1 class="mb-2 text-primary text-4xl font-bold">Gracias por tu aporte</h1>
	</div>
	<div class="p-6 prose prose-p:text-lg prose-p:text-center">
		<p>
			Tú aporte ha sido enviado con éxito, pronto te enviaremos noticias sobre el proceso de <span
				class="text-primary">la nueva Bóveda Secreta</span
			>.
		</p>
		<img class=" rounded-md" src="/grupo.jpg" alt="El grupo de 5 Luchas Clandestino" />
	</div>
</div>
