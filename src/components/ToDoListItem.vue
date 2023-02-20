<script setup>
defineProps(["chose"]);
//const emit = defineEmits(["deleteC"]);
const emit = defineEmits(["decreaseBy", "increaseBy", "deleteC"]); 
</script>

<template>
  <li>
    
            
    <div class = encadre >
    {{ chose.pourAfficher() }}
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans le tableau
          mais directement l'id de la chose
    -->
  </div>
    <button type = "button" @click="$emit('deleteC', chose.id)">Supprimer</button> 
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans la tableau 
          mais directement la chose à modifier
    -->
  
    <button class = "buttonAdd" @click="$emit('decreaseBy', chose, 'adjust', chose.qtestock)">-</button>
    <button class = "buttonAdd" @click="$emit('increaseBy', chose)">+</button> 
  
  </li>
</template>

<style scoped>

li{
  list-style: none;
  text-align : center; 
  
}
.encadre {
  border-style: dashed ;
  border-color: palevioletred; 
  border-width: 1px ;
  display : inline-block; 
  padding : 0 10px; 
  border-radius : 10px ;
  font-size : 20px;  
  
}

button{
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
 
 .buttonAdd{
  display: inline-block;
  background-color: #e57d90;
  border-radius: 10px;
  border: 4px double #FFCDD4;
  color: #FFCDD4;
  text-align: center;
  font-size: 12px;
  padding: 3px;
  width: 30px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;

 }

 .buttonAdd:hover{
background-color : #FF435C; 
 }
</style>
