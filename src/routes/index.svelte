<script>
	import Important from '../components/Important.svelte';
</script>

<svelte:head>
	<title>5LC - Bóveda 3.0</title>
</svelte:head>

<div class="w-fit mx-auto hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row w-5/6">
		<img
			src="/afiche-julio.jpg"
			alt="Afiche del evento"
			class="sm:max-w-sm self-start rounded-lg shadow-2xl"
		/>
		<div>
			<h1 class="text-5xl text-primary font-bold">No estamos muertos</h1>
			<p class="pt-6">
				Pandemias, guerras, cambio climatico. Nada ni nadie nos asegura la vida, por eso la
				invitacion es a vivir el momento, a ser libre y feliz.
			</p>
			<p class="py-6">
				Y porque la lucha nos hace libres, volvemos a intentarlo viernes tras viernes por todo
				julio.
			</p>

			<h2 class="text-lg font-bold mb-4 underline text-primary">Ubicación y horarios:</h2>
			<p>¿Donde? en la Bóveda Secreta - San Antonio #705</p>
			<p>Apertura de puertas: 19:15 hrs.</p>
			<p>Inicio de evento: 20:00 hrs.</p>
			<Important />
			<h2 class="text-lg font-bold mb-4 underline text-primary">Adquiere tu entradas:</h2>
			<p class=" text-red-500">Entradas agotadas</p>
		</div>
	</div>
</div>
