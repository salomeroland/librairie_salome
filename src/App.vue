<script setup>
import LibrairieHeader from "./components/LibrairieHeader.vue";
import LibrairieList from "./components/Librairie.vue";


</script>

<template>
  <body>
    <div class="img">
  <LibrairieHeader />
  <LibrairieList />
</div>
</body>
</template>

<style scoped >
body{
  margin: 0px;
}


.img{
  background-image:   url('components/livres.jpg'); 
}
</style>