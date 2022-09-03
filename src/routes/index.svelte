<script>
	import Important from '../components/Important.svelte';
	// import Carousel from '../components/Carousel.svelte';
</script>

<svelte:head>
	<title>5LC - Bóveda 3.0</title>
</svelte:head>

<div class="w-fit mx-auto hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row md:w-5/6 w-full">
		<img
			src="/sept-fondeao-2.jpg"
			alt="Afiche del evento"
			class="sm:max-w-lg lg:self-start rounded-lg shadow-2xl"
		/>
		<!-- <Carousel /> -->

		<div class="">
			<h1 class="text-3xl text-green-400 font-bold uppercase mt-2 sm:hidden md:block">
				Septiembre Fondeao'
			</h1>
			<p class="my-4">
				🍄 El cucumelo es un hongo que crece fondeao' en la 💩 y llegando el calor de la primavera,
				crece para brindar a los más osados, experiencias únicas. Septiembre lo pasamos fondeaos en
				la Bóveda, buscando que el calor de su ambiente nos ayude a florecer y liberarnos de la 💩
				que nos embarga en la semana.
			</p>

			<h2 class="text-lg font-bold mb-4 underline text-green-400">Ubicación y horarios:</h2>
			<p>¿Donde? en la Bóveda Secreta - San Antonio #705</p>
			<p>Apertura de puertas: 19:15 hrs.</p>
			<p>Inicio de evento: 20:00 hrs.</p>
			<Important />
			<h2 class="text-lg font-bold mb-4 underline text-green-400">Adquiere tu entradas:</h2>
			<!-- <p class=" text-red-500">Entradas agotadas</p> -->
			<div class="flex gap-3 flex-col md:flex-row">
				<button
					on:click={() => window.open('https://www.flow.cl/btn.php?token=2n2qw9z', '_blank')}
					class="btn btn-primary w-full md:w-fit">09 Sept</button
				>
				<button
					on:click={() => window.open('https://www.flow.cl/btn.php?token=u17r5wx', '_blank')}
					class="btn btn-primary w-full md:w-fit">15 Sept</button
				>
			</div>
		</div>
	</div>
</div>
