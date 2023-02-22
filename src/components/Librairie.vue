<script setup>
import { reactive, onMounted } from "vue";
import LibrairieItem from "./LibrairieItem.vue";
import LibrairieForm from "./LibrairieForm.vue";
import Livre from "../Livre";
import LibrairieRecherche from "./LibrairieRecherche.vue";


const listeC = reactive([]);

// -- l'url de l'API
let url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/33/livres";


// -- handle pour supprimer un livre à prtir de l'id du livre 
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id de la chose à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}

function handlerQteMoins(livre) {
  console.log(livre); 
  let id = livre.id; 
  let titre = livre.titre; 
  let prix = livre.prix; 
  livre.enlever(); 
  let qtestock = livre.qtestock; 

  if (qtestock>0){
  let myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json"); 
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id : id, titre : titre, prix : prix, qtestock : qtestock}),
  };
  
  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
     getTodos(); 
  })
    .catch((error) => console.log(error));

} else {
  handlerDelete(id); 
}
}


function handlerQtePlus(livre) {
  console.log(livre); 
  let id = livre.id; 
  let titre = livre.titre; 
  let prix = livre.prix; 
  livre.ajouter(); 
  let qtestock = livre.qtestock; 
  
  let myHeaders = new Headers(); 
  myHeaders.append("Content-Type", "application/json"); 
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id : id, titre : titre, prix : prix, qtestock : qtestock}),
  };
  
  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
     getTodos(); 
  })
    .catch((error) => console.log(error));
}

// -- handle pour ajouter une nouvelle chose à prtir du libelle saisi dans le formulaire
function handlerAdd( titre, qtestock, prix) {
  
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // --  le libelle de la nouvelle chose est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre:titre , qtestock: qtestock, prix : prix }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}




function getTodos() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des choses
      listeC.splice(0, listeC.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Chose
      //  et l'ajouter dans la liste listeC
      dataJSON.forEach((v) => listeC.push(new Livre(v.id, v.titre, v.qtestock,v.prix)));
      url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/33/livres";
    })
    .catch((error) => console.log(error));
}

function search(titreRech) {
  const fetchOptions = { method: "GET" };
  url = url + "?search=" + titreRech; 
  console.log(url); 
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos(); 
    })
    .catch((error) => console.log(error));
}

// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getTodos();
});
</script>

<template>
  
  <div class="Liste">
    <div class="rectangle">

      <br>
   
  <p class="txt">Bienvenue dans la librairie.</p>
  <hr class = "ligne" ALIGN=CENTER WIDTH="80%" SIZE="2">

  <p class="txt2">Vous cherchez quelque chose en particulier ?</p>


 <LibrairieRecherche @search="search"></LibrairieRecherche>
 
 <hr class = "ligne" ALIGN=CENTER WIDTH="80%" SIZE="2">

 <p class="txt2">↓ Retrouvez ici l'ensemble de nos ouvrages. ↓ </p>

  
  <ul>
    <LibrairieItem
      v-for="livre of listeC"
      :key="livre.id"
      :livre="livre"
    @deleteC="handlerDelete"
    @decreaseBy="handlerQteMoins"
    @increaseBy="handlerQtePlus"
    @adjust = "handlerQteMoins2"
    />
  
  </ul>

  <hr class = "ligne" ALIGN=CENTER WIDTH="80%" SIZE="2">

  <p class="txt2">Il manque quelque chose ? Ajoutez-le !</p>
  
  <LibrairieForm @addC="handlerAdd" ></LibrairieForm>
</div>
</div>

</template>

<style scoped>

.txt{
  font-size: 30px; 
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.txt2{
  font-size: 20px; 
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, bold
}
.ligne{
  color : #A76844; 
  border-color : #A76844; 
}
.Liste{
  padding-top: 5%;
  height : 100%; 
 
  /*background-color: #FFCDD4;*/
  color : #7F4829; 
  
}
.rectangle{
  
 margin-left: auto;
 margin-right: auto;
  width  : 60%;
  height : 100%;
  background : #ede0c8;
  border-radius: 40px;
  text-align: center; 
    
  
}

ul{
  list-style: none;
}



</style>
