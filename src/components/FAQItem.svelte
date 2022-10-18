<script>
    export let title = '';
    export let body = '';
</script>
<div class="collapse">
    <input type="checkbox" /> 
    <div class="collapse-title text-xl font-medium text-center">
        {title}
    </div>
    <div class="collapse-content"> 
      <p>{body}</p>
    </div>
  </div>