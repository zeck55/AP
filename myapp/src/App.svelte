<script>
	import TestWebsite from './../../testWebsite.svelte';
  import Counter from './lib/Counter.svelte'

export let menu = 1;
</script>

<main>

  <style>
	ul#menu li{
		display : inline;
	}
</style>

<ul id="menu">
	<li><a href="/" on:click|preventDefault={() => (menu = 1)}>Home</a></li> 
	<li><a href="/" on:click|preventDefault={() => (menu = 2)}>Profile</a></li>
</ul>

{#if menu === 1}
<TestWebsite />
{/if}


<div >
<TestWebsite/>
</div>

  
  
</main>

<style>

</style>
