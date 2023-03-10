<script>
  import Important from "./Important.svelte";

  const event = {
    title: 'Viernes de marzo por la noche',
    pretitle: "No te quedes fuera de esta gran experiencia.",
    info: "¡Estás invitado a un evento con la más fina selección musical de los 70's! Acompáñanos en una noche llena de emoción y buena onda mientras te transportamos de regreso en el tiempo con los éxitos más emblemáticos de la década.",
    img: 'https://res.cloudinary.com/dtj5xnlou/image/upload/q_auto:low/v1678201533/5LC/Marzo_1080x1345.avif',
    date: '📅 Viernes 10 de Marzo',
    ticket: 'https://www.flow.cl/btn.php?token=au5yr2y',
  }

</script>

<div id="friday" class="relative flex flex-col">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img class="h-56 w-full object-cover lg:absolute lg:h-full" loading="lazy" src={event.img} alt="Boveda Secreta">
      </div>
    </div>
    <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div class="lg:col-start-2 lg:pl-8">
        <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
          <h2 class="font-semibold leading-6 text-primary uppercase tracking-widest">Próximo evento</h2>
          <h1 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">{event.title} <span class="font-semibold leading-6 text-primary uppercase tracking-widest text-lg">(+18)</span></h1>
          <div class="prose prose-indigo mt-5 text-gray-100">
            <!-- <p class="text-primary uppercase tracking-widest">¡¡Último día nadie se enoja!!</p> -->
            <!-- <p class="text-sm tracking-widest uppercase">The Cure - Friday I'm In Love 🎤</p> -->
            <p>{event.info}</p>
            <p>{event.pretitle}</p>
            <ul>
              <li>{event.date}</li>
              <li>19:15 Hrs. → Apertura de puertas</li>
              <li>20:00 Hrs. → Inicio show</li>
              <li>Bóveda Secreta - <a class="text-primary" target="_blank" href="https://goo.gl/maps/85ZfvTdLAoDpt9xr9"> San Antonio 705, Santiago, Región Metropolitana</a></li>
            </ul>
            <Important></Important>
            <p class=" border border-dashed border-primary p-4">
              La Bóveda Secreta se encuentra en el 3er piso de la Galería “Nueva Copacabana” ubicada en calle San Antonio #705, Santiago Centro. Las estaciones de Metro más cercanas a ella son <span class="underline underline-offset-2 decoration-wavy decoration-primary">Plaza de Armas</span>, <span class="underline underline-offset-2 decoration-wavy decoration-primary">Bellas Artes</span> y <span class="underline underline-offset-2 decoration-wavy decoration-primary">Puente Cal y Canto</span>. 
          </p>
          
          </div>

          <div class="alert alert-error shadow-lg flex justify-center rounded-none mt-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
                      
              <span class="uppercase tracking-widest">Adhesión agotadas</span>
            </div>
          </div>

          <!-- <div class="alert alert-success shadow-lg flex justify-center rounded-none mt-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
                      
              <span class="uppercase tracking-widest">Habilitamos 20 cupos más</span>
            </div>
          </div> -->

          <!-- <div class="mt-4 gap-4 flex flex-col md:flex-row sm:justify-center lg:justify-start">
            <div class="rounded-md w-full">
              <button on:click={() => location.href = event.ticket} class="flex w-full items-center rounded-none hover:bg-cyan-500 hover:text-white justify-center border border-transparent bg-yellow-400 uppercase tracking-widest px-8 py-3 text-base font-medium text-black md:py-4 md:px-10 md:text-lg">Entrada General</button>
              <p class="mt-2 text-center text-sm text-gray-300/50 leading-4">Valor:$8.800.-</p>
            </div>
          </div> -->
          
        </div>
      </div>
    </div>
  </div>
  