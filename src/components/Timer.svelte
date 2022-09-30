<script>
    let days = Number;
    let hours = Number;
    let minutes = Number;
    let seconds = Number;
    
    setInterval(() => {
        const countDate = new Date('Oct 21, 2022 18:30:00 ').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        
        // Calculate
        days = Math.floor(gap / day); 
        hours = Math.floor((gap % day) / hour)
        minutes = Math.floor((gap % hour) / minute)
        seconds = Math.floor((gap % minute) / second)
    }, 1000)

    
    
</script>

<div class="">
    <div class="grid justify-center lg:justify-start grid-flow-col gap-5 text-center auto-cols-max mt-8">
        <div class="flex flex-col">
        <span class="countdown text-5xl text-primary">
            <span id="days" style={`--value:${days};`}></span>
        </span>
        dias
        </div> 
        <div class="flex flex-col">
        <span class="countdown text-5xl">
            <span style={`--value:${hours};`}></span>
        </span>
        horas
        </div> 
        <div class="flex flex-col">
        <span class="countdown text-5xl">
            <span style={`--value:${minutes};`}></span>
        </span>
        minutos
        </div> 
        <div class="flex flex-col">
        <span class="countdown text-5xl">
            <span style={`--value:${seconds};`}></span>
        </span>
        segundos
        </div>
    </div>
    <p class="text-sm mt-2 text-center lg:text-left text-gray-500">
        Para nuestro próximo evento
    </p>
</div>