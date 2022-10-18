<script>
  import Important from "./Important.svelte";
</script>

<div id="octubre" class="relative">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img class="h-56 w-full object-cover lg:absolute lg:h-full" loading="lazy" src="aficheOctubreRojo.jpg" alt="">
      </div>
    </div>
    <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div class="lg:col-start-2 lg:pl-8">
        <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
          <h2 class="font-semibold leading-6 text-secondary uppercase">Próximo evento</h2>
          <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">Octubre Rojo 2022 (+18)</h3>
          <div class="prose prose-indigo mt-5 text-gray-100">
            <p>Pasión, calor, acción y fuerza, el impulso de acercarse a lo prohibido, a aquello que nos lleva a sentirnos libres. El rojo representa lo que nos mueve y apasiona, que nos da vida y nos desafía. </p>
            <p>La atmósfera de la Bóveda Secreta se tiñe en Octubre Rojo, jornada donde la intensidad, desenfreno y un especial toque de sensualidad invadirán el ambiente y se mezclarán con la energía única de nuestra candente comunidad. </p>
            <ul>
              <li>Viernes 21 de Octubre </li>
              <li>18:30 Hrs. → Apertura de puertas</li>
              <li>19:30 Hrs. → Inicio show</li>
              <li>Sala Metrónomo - <a class="text-secondary" target="_blank" href="https://goo.gl/maps/rCQaJpzyqsSCSanV6"> Ernesto Pinto Lagarrigue 179, Recoleta, Región Metropolitana</a></li>
              <li>Barrio Bellavista</li>
            </ul>
          </div>

          <div class="mt-10 gap-4 flex flex-col md:flex-row sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-neutral opacity-30 px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg line-through cursor-not-allowed">Preventa General</button>
              <p class="mt-2 text-center text-sm line-through text-gray-500 leading-4">Valor:$10.000.-</p>
            </div>
            <div class="rounded-md shadow">
              <button class="flex w-full items-center justify-center rounded-md border border-transparent bg-neutral opacity-30 px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg line-through cursor-not-allowed">General</button>
              <p class="mt-2 text-center text-sm text-gray-500 leading-4 line-through">Valor:$13.000.-</p>
            </div>
          </div>
          <div class="alert alert-error shadow-lg my-6">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-black">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>            
              <span>Entradas agotadas</span>
            </div>
          </div>
          <Important></Important>
        </div>
      </div>
    </div>
  </div>
  