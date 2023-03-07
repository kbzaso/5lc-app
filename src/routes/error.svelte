<svelte:head>
	<title>5LC - Hubo un error en tu aporte</title>
</svelte:head>
<div class="w-full md:w-9/12 lg:w-6/12 m-auto mt-0 md:my-10">
	<div class="rounded-none alert alert-error py-4 mb-6">
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
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>Ups! Ocurrio un error!</span>
		</div>
	</div>
	<div class="text-center">
		<h1 class="mb-2 text-primary text-4xl font-bold">Te invitamos intentarlo una vez más 🙏</h1>
	</div>
	<div class="p-6 prose prose-p:text-lg prose-p:text-center text-white">
		<p>
			Por alguna extraña razón, hubo un error en el proceso de aporte. Te invitamos a intentarlo
			nuevamente.
		</p>
	</div>
	<div class="">
		<button on:click={() => location.href = 'https://www.flow.cl/btn.php?token=au5yr2y'} class="flex w-full items-center rounded-none hover:bg-cyan-500 hover:text-white justify-center border border-transparent bg-yellow-400 uppercase tracking-widest px-8 py-3 text-base font-medium text-black md:py-4 md:px-10 md:text-lg">Entrada General</button>
		<p class="mt-2 text-center text-sm text-gray-300/50 leading-4">Valor:$10.000.-</p>
	</div>
</div>
