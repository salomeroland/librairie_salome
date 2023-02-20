<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");



const emit = defineEmits([ "search"]);
</script>

<template>
    <!-- <button type = "button" @click="$emit('search', titreRech)">Rechercher</button> -->
  
    <form @submit.prevent="$emit('search', titreRech)">
      <input type ="text" v-model="titreRech" placeholder="Titre du livre"/>
      <button type ="submit"> Rechercher </button>
    </form>

</template>

<style scoped>
button {
  display: inline-block;
  background-color: #e57d90;
  border-radius: 10px;
  border: 4px double #FFCDD4;
  color: #FFCDD4;
  text-align: center;
  font-size: 12px;
  padding: 8px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

 }

 button:hover{
background-color : #FF435C; 
 }
</style>
