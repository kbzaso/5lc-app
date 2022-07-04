<script>
	export let name = 'Fecha del evento';
	export let time = '';
	export let direction = '';
</script>

<div class="collapse">
	<input type="checkbox" class="peer" />
	<div
		class="collapse-title border border-white text-primary peer-checked:bg-primary peer-checked:border-none peer-checked:text-secondary-content"
	>
		{name}
	</div>
	<div class="collapse-content text-primary-content  peer-checked:text-white">
		<p>{time}</p>
		<p>{direction}</p>
	</div>
</div>
