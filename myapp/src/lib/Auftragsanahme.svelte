    <script>
  const droparea = document.querySelector(".droparea");

droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
  droparea.classList.add("hover");
});

droparea.addEventListener("dragleave", () => {
  droparea.classList.remove("hover");
});

droparea.addEventListener("drop", (e) => {
  e.preventDefault();

  const image = e.dataTransfer.files[0];
  const type = image.type;

  if (
    type == "image/png" ||
    type == "image/jpg" ||
    type == "image/jpeg"
  ) {
    return upload(image);
  } else {
    droparea.setAttribute("class", "droparea invalid");
    droparea.innerText = "Invalid File Format!";
    return false;
  }
});

const upload = (image) => {
  droparea.setAttribute("class", "droparea valid");
  droparea.innerText = "Added " + image.name;
};
    
    </script>


<main>

<h1>Auftragsanahme</h1>
<div class= "droparea hover valid invalid" > Drop the Image Here </div>


</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family :"Poppins";

    }
    main{background-color: #091911;
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