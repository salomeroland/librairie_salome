<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");



const emit = defineEmits(["addC"]);
</script>

<template>

  <div class="bloc">

  <form @submit.prevent="$emit('addC', titre, qtestock, prix)">
    <input  class = "formTitre" type="text" v-model="titre" placeholder="Titre " />

    <input class = "formQuant" type="text" v-model="qtestock" placeholder="Quantité" />
    <input class = "formPrix" type="text" v-model="prix" placeholder="Prix " />

    <button type="submit" >Ajouter</button>

    
  </form>

  </div>

</template>

<style scoped>

.bloc{
  text-align : center; 
  margin-bottom: 3%;
 
}

button {
  display: inline-block;
  background-color: #ede0c8;
  border-radius: 10px;
  border: 4px double #A76844;
  color: #A76844;
  text-align: center;
  font-size: 12px;
  padding: 8px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

 }
 .formTitre {
  border: none;
  border-bottom: 2px solid #A76844;
  
  background-color: #ede0c8;
  background-image: url('book.png');
  background-size: 10%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  padding-left: 40px;
  color : #7F4829; 
  margin-right: 10px;
  font-size:15px; 
  margin-top : 3%; 
 
 }

 .formQuant {
  border: none;
  border-bottom: 2px solid #A76844;
  
  background-color: #ede0c8;
  background-image: url('quantite2.png');
  background-size: 15%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  padding-left: 40px;
  color : #7F4829; 
  margin-right : 10px;
  font-size:15px; 
 
 }

 .formPrix {
  border: none;
  border-bottom: 2px solid #A76844;
  
  background-color: #ede0c8;
  background-image: url('euro.png');
  background-size: 10%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  padding-left: 40px;
  color : #7F4829; 
  margin-right : 10px; 
  font-size:15px;
 
 }
 .formTitre:hover{
  border-bottom : 3px solid #7F4829; 
  
 }
 .formQuant:hover{
  border-bottom : 3px solid #7F4829; 
  
 }
 .formPrix:hover{
  border-bottom : 3px solid #7F4829; 
  
 }
 button:hover{
background-color : #A76844; 
transform: scale(1.2); 
border: 4px double #ede0c8;
color: #ede0c8;
 }
</style>
