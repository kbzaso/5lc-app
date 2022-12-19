<script>
  import Important from "./Important.svelte";
</script>

<div id="ultimo" class="relative flex lg:flex-col flex-col-reverse">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img class="h-56 w-full object-cover lg:absolute lg:h-full" loading="lazy" src="https://res.cloudinary.com/dtj5xnlou/image/upload/v1671485780/5LC/ultimo.jpg" alt="Boveda Secreta">
      </div>
    </div>
    <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div class="lg:col-start-2 lg:pl-8">
        <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
          <h2 class="font-semibold leading-6 text-primary uppercase">Próximo evento</h2>
          <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">40 grados (+18)</h3>
          <div class="prose prose-indigo mt-5 text-gray-100">
            <p class="text-primary uppercase tracking-widest">¡¡Último día nadie se enoja!!</p>
            <p>Ven a despedir el año a la bóveda secreta y cagate de calor con nosotros 🖤🎉</p>
            <ul>
              <li>Viernes 30 de Diciembre </li>
              <li>19:15 Hrs. → Apertura de puertas</li>
              <li>20:00 Hrs. → Inicio show</li>
              <li>Bóveda Secreta - <a class="text-primary" target="_blank" href="https://goo.gl/maps/85ZfvTdLAoDpt9xr9"> San Antonio 705, Santiago, Región Metropolitana</a></li>
            </ul>
            <p class="bg-yellow-400 p-4 text-black">
              La Bóveda Secreta se encuentra en el 3er piso de la Galería “Nueva Copacabana” ubicada en calle San Antonio #705, Santiago Centro. Las estaciones de Metro más cercanas a ella son <span class="underline underline-offset-2 decoration-wavy decoration-black">Plaza de Armas</span>, <span class="underline underline-offset-2 decoration-wavy decoration-black">Bellas Artes</span> y <span class="underline underline-offset-2 decoration-wavy decoration-black">Puente Cal y Canto</span>. 
          </p>
          </div>

          <div class="mt-10 gap-4 flex flex-col md:flex-row sm:justify-center lg:justify-start">
            <div class="rounded-md ">
              <button on:click={() => location.href = 'https://www.flow.cl/app/web/pagarBtnPago.php?token=coxu7gz'} class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-black md:py-4 md:px-10 md:text-lg ">General</button>
              <p class="mt-2 text-center text-sm text-gray-300 leading-4">Valor:$10.000.-</p>
            </div>
            <!-- <div class="rounded-md ">
              <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-neutral opacity-30 px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg line-through cursor-not-allowed">General</button>
              <p class="mt-2 text-center text-sm text-gray-500 leading-4 line-through">Valor:$13.000.-</p>
            </div> -->
          </div>
          <!-- <div class="alert alert-error shadow-lg my-6">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-black">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>            
              <span>Entradas agotadas</span>
            </div>
          </div> -->
          <Important></Important>
        </div>
      </div>
    </div>
  </div>
  