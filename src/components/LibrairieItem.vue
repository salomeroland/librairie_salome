<script setup>
defineProps(["livre"]);
//const emit = defineEmits(["deleteC"]);
const emit = defineEmits(["decreaseBy", "increaseBy", "deleteC"]); 
</script>

<template>
  <li>
    
    
            
    <div class = encadre >
    {{ livre.pourAfficher() }}
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans le tableau
          mais directement l'id duyu livre
    -->
    <br>
    <button type = "button" @click="$emit('deleteC', livre.id)">Supprimer</button> 
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans la tableau 
          mais directement le titre à modifier
    -->
    
  
    <button class = "buttonAdd" @click="$emit('decreaseBy', livre, 'adjust', livre.qtestock)">-</button>
    <button class = "buttonAdd" @click="$emit('increaseBy', livre)">+</button> 
    </div>
  </li>
</template>

<style scoped>

li{
  list-style: none;
  text-align : center; 
  
  
}
.encadre {
  
  font-size : 19px;  
  margin-bottom: 5px ;
  
}



button{
  display: inline-block;
  background-color: #ede0c8;
  border-radius: 7px;
  border: 3px double #A76844;
  color: #A76844;
  text-align: center;
  font-size: 12px;
  padding: 5px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

 }

 button:hover{
background-color : #A76844; 
transform: scale(1.2); 
border: 4px double #ede0c8;
color: #ede0c8;
 }
 
 .buttonAdd{
  display: inline-block;
  background-color: #ede0c8;
  border-radius: 7px;
  border: 3px double #A76844;
  color: #A76844;
  text-align: center;
  font-size: 12px;
  padding: 5px;
  width: 30px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

 }

 .buttonAdd:hover{
background-color : #A76844; 
transform: scale(1.2); 
border: 4px double #ede0c8;
color: #ede0c8;
 }
</style>
