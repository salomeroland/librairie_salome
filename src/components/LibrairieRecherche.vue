<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");



const emit = defineEmits([ "search"]);
</script>

<template>
    <div class ="bloc">
  
    <form @submit.prevent="$emit('search', titreRech)">
      <input class="form" type ="text" v-model="titreRech" placeholder="Titre du livre"/>
      <button type ="submit"> Rechercher </button>
    </form>
  </div>

</template>

<style scoped>
.bloc{
  text-align : center; 
  margin-bottom: 5%; 
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
.form {
  border: none;
  border-bottom: 2px solid #A76844;
  
  background-color: #ede0c8;
  background-image: url('searchicon.png');
  background-size: 10%;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  padding-left: 40px;
  color : #7F4829; 
  font-size:15px; 
 }

 button:hover{
background-color : #A76844; 
transform: scale(1.2); 
border: 4px double #ede0c8;
color: #ede0c8;
 }

 
</style>
