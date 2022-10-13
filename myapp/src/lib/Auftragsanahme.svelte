import App from './../../../../myapp/src/App.svelte';
<main>

<h1>Auftragsanahme</h1>
<div class= "droparea hover" > Drop the Image Here </div>


</main>

<script>
    const droparea = document.querySelector(" .droparea");
    droparea.addEventListener("dragover", () =>{
        e.preventDefault();
        droparea.classList.add("hover");
    });


    droparea.addEventListener("dragleave", ()=>{
    droparea.classList.remove("hover");
    });

    droparea.addEventListener("drop", (e) => {
        e.preventDefault();

        const image = e.dataTransfer.files[0];
        const type = image.type;
        console.log (type); 
    });

</script>

<style>

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family :"Poppins";

    }
    main {background-color: #091911;
        color:#fff;
        display: flex;
        justify-content: center;

    }
    .droparea{
        height: 400px ;
        width: 400px ;
        border: 1px dashed gray ;
        color : gray ;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5em;

    }
    .hover{
        color:#fff;
        border: 1px dashed #ffff;
    }
    .valid{
        color:#fff ;
        background-color: green;
        border:1 px solid green ;
    }
    .invalid{
        color:#fff;
        background-color: red;
        border :1px solid red;
    }
</style>