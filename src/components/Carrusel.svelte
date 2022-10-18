<script>
    const images = [
        {
            url: 'card/main.jpg'
        },
        {
            url: 'card/alcold-marvin.jpg'
        },
        {
            url: 'card/fastlove-vs-keyton-pps.jpg'
        },
        {
            url: 'card/nacho-rencor-aerial.jpg'
        },
        {
            url: 'card/tag.jpg'
        }
    ]
</script>

<div class="my-10 w-full lg:w-5/12 mx-auto">
    <div class="my-4">
        <h2 class="font-semibold leading-6 text-secondary uppercase text-center">CARTELERA</h2>
        <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl text-center">Octubre Rojo 2022</h3>
    </div>
    <div class="carousel">
        {#each images as image, i}
            <div id="slide{i}" class="carousel-item relative w-full">
                <img src={image.url} class="h-[500px] w-full object-contain" alt="Mucha gente rodeando un ring de lucha libre" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide{i - 1}" class="btn btn-circle">❮</a> 
                    <a href="#slide{i + 1}" class="btn btn-circle">❯</a>
                </div>
            </div>
        {/each}
    </div>
</div>