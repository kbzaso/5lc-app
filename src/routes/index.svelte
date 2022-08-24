<script>
	import Important from '../components/Important.svelte';
</script>

<svelte:head>
	<title>5LC - Bóveda 3.0</title>
</svelte:head>

<div class="w-fit mx-auto hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row w-5/6">
		<img
			src="/afiche.png"
			alt="Afiche del evento"
			class="sm:max-w-sm self-start rounded-lg shadow-2xl"
		/>
		<div>
			<h1 class="text-5xl text-primary font-bold uppercase">Pasamos agosto</h1>
			<p class="pt-6">
				Ya estamos casi casi, último viernes de agosto y ¡Que viernes! Ya que celebraremos 5 años
				del inicio de esta locura, locura que nos ha llenado de alegrias, frustraciones, lesiónes,
				cañas pero sobre todo de buena onda.
			</p>
			<p class="py-6">
				Porque no esta muerto el que lucha, seguimos intentandolo, contra viento y marea la bóveda
				secreta abre sus puertas a sus miembros.
			</p>

			<h2 class="text-lg font-bold mb-4 underline text-primary">Ubicación y horarios:</h2>
			<p>¿Donde? en la Bóveda Secreta - San Antonio #705</p>
			<p>Apertura de puertas: 19:15 hrs.</p>
			<p>Inicio de evento: 20:00 hrs.</p>
			<Important />
			<h2 class="text-lg font-bold mb-4 underline text-primary">Adquiere tu entradas:</h2>
			<button class="btn btn-primary">26 de agosto</button>
			<!-- <p class=" text-red-500">Entradas agotadas</p> -->
		</div>
	</div>
</div>
