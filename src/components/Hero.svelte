<script>
  export let title = '';
  export let subtitle = '';
  export let description = '';
</script>

<main class="lg:relative flex flex-col-reverse lg:flex-row">
  <div class="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
    <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
      <h1 class="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span class="block xl:inline text-white">{title}</span>
        <span class="block text-primary xl:inline">{subtitle}</span>
      </h1>
      <p class="mx-auto mt-3 max-w-md text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">{description}</p>
    </div>
  </div>
  <div class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
    <img class="absolute inset-0 h-full w-full object-cover" src="https://res.cloudinary.com/dtj5xnlou/image/upload/v1671485780/5LC/hero-image.jpg" alt="Evento de lucha libre con un cuadrilatero en el centro">
  </div>
</main>