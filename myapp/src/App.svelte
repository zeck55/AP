<script>
  
  import TestWebsite from './lib/testWebsite.svelte';
	import Kontaktfeld from './lib/Kontaktfeld.svelte';
  import Auftragsanahme from './lib/Auftragsanahme.svelte';
	import FAQ from './lib/FAQ.svelte';
  import Impressum from './lib/Impressum.svelte';
  import Archiv from './lib/Archiv.svelte';


export let menu = 1;
</script>

<main>




  
  <ul>
	<li><a href="/" on:click|preventDefault={() => (menu = 1)}>Home</a></li> |
	<li><a href="/" on:click|preventDefault={() => (menu = 2)}>Kontaktfeld</a></li>|
  <li><a href="/" on:click|preventDefault={() => (menu = 3)}>Auftratgsanahme</a></li>|
  <li><a href="/" on:click|preventDefault={() => (menu = 4)}>FAQ</a></li>|
  <li><a href="/" on:click|preventDefault={() => (menu = 5)}>Impresum</a></li>|
  <li><a href="/" on:click|preventDefault={() => (menu = 6)}>Archiv</a></li>
</ul>

{#if menu ==1}
<TestWebsite />
{/if}


{#if menu == 2}
<Kontaktfeld />
{/if}

{#if menu == 3}
<Auftragsanahme/>
{/if}

{#if menu == 4}
<FAQ/>
{/if}


{#if menu == 5}
<Impressum/>
{/if}

{#if menu == 6}
<Archiv/>
{/if}

<button>And</button>


</main>

<style>
 ul li {
  display: inline;
 }
</style>
