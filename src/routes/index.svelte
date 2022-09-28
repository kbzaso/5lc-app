<script>
	import Hero from '../components/Hero.svelte';
	import ContentOctubre from '../components/ContentOctubre.svelte';
	import Video from '../components/Video.svelte';
</script>

<svelte:head>
	<title>5LC - Bóveda 3.0</title>
</svelte:head>

<div>
	<Hero title='¡Siempre buena onda!' subtitle='¡Vive la experiencia!' description='5 Luchas Clandestino, es un equipo humano que ve el espectáculo de la lucha libre como una herramienta de expresión creativa, enfocados en liberar el peso de la vida cotidiana de nuestra comunidad y audiencia, en una atmósfera de bohemia y sana convivencia.'></Hero>
	<div class="container mx-auto">
		<Video></Video>
	</div>
	<ContentOctubre>
	</ContentOctubre>
	<script async src="https://tally.so/widgets/embed.js"></script>
</div>