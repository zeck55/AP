

<main>
 <p>________________________________________________</p>   
            <h1 class="anpass">Kontaktfeld</h1>
<p>________________________________________________</p>



<div class="nachrichtenfeld">
<input list ="browser" placeholder="Anrede">
<datalist id="browser" >
    <option value ="Herr">
    <option value ="Dame">
    <option value ="Divers">
</datalist> 
<input type="text" placeholder="Name" >
<input type="text" placeholder="Nachname" >
<input type="text" placeholder="Gruppe / Abteilung" >
<input type="text" placeholder ="E-mail" >
<input type="text" placeholder="Telefon"  >
</div>




<div class="feld">
    <textarea name="Nachricht" id="" cols="50" rows="10" placeholder="Nachricht" bind:value={nachrichtenlist}></textarea>
    
</div>


<button class="suuus" on:click={addnachrichten}>Senden</button>


</main>

<script>
    
let nachrichten='';


let nachrichtenlist =[{status:true}];

function addnachrichten(){
    nachrichtenlist =[ ...nachrichtenlist, {text: nachrichten, status: true}];
    nachrichten = '';
    console.log()
}
</script>