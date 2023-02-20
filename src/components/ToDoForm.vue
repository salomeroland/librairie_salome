<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");



const emit = defineEmits(["addC"]);
//const emit2 = defineEmits(["search"]);
</script>

<template>
  <!-- <button type = "button" @click="$emit('search', titreRech)">Rechercher</button> -->



  <form @submit.prevent="$emit('addC', titre, qtestock, prix)">
    <input type="text" v-model="titre" placeholder="Titre " />

    <input type="text" v-model="qtestock" placeholder="Quantité" />
    <input type="text" v-model="prix" placeholder="Prix " />

    <button type="submit" >Ajouter</button>

    
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
