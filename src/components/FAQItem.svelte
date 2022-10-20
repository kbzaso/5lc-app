<script>
    export let title = '';
    export let body = '';
</script>
<div class="collapse">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium text-center">
      <h4 class=" underline underline-offset-2">{title}</h4>
    </div>
    <div class="collapse-content"> 
      <p>{body}</p>
    </div>
  </div>