<script>
	import Important from '../components/Important.svelte';
</script>

<svelte:head>
	<title>5LC - Bóveda 3.0</title>
</svelte:head>

<div class="w-fit mx-auto hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row md:w-5/6 w-full">
		<img
			src="/afiche.png"
			alt="Afiche del evento"
			class="sm:max-w-lg lg:self-start rounded-lg shadow-2xl"
		/>
		<div class="">
			<h1 class="text-5xl text-primary font-bold uppercase mt-2 sm:hidden md:block">
				Pasamos agosto
			</h1>
			<p class="py-6">
				Ya estamos casi, último viernes de agosto y ¡Qué viernes! Ya que celebraremos 5 años del
				inicio de esta locura, locura que nos ha llenado de alegrías, frustraciones, lesiones, cañas
				pero sobre todo de <span class="underline decoration-primary decoration-2">buena onda.</span
				>
			</p>

			<h2 class="text-lg font-bold mb-4 underline text-primary">Ubicación y horarios:</h2>
			<p>¿Donde? en la Bóveda Secreta - San Antonio #705</p>
			<p>Apertura de puertas: 19:15 hrs.</p>
			<p>Inicio de evento: 20:00 hrs.</p>
			<Important />
			<h2 class="text-lg font-bold mb-4 underline text-primary">Adquiere tu entradas:</h2>
			<!-- <p class=" text-red-500">Entradas agotadas</p> -->
			<button
				on:click={() => (window.location.href = 'https://www.flow.cl/btn.php?token=ajzvzpx')}
				class="btn btn-primary w-full md:w-fit">26 de agosto</button
			>
		</div>
	</div>
</div>
