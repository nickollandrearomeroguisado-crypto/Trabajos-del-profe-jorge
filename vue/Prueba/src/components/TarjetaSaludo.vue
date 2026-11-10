<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';

const message = "Soy Pepe"

</script>


<template>
  <!-- <HelloWorld /> --> <!-- primera  forma de hacerlo-->
  <!-- <h1>Hola {{ message }}</h1> -->
   <article class="tarjeta">
     <h1>Hola</h1> <!-- segunda forma-->
     </br>
     <h2>{{ message }}</h2>
   </article>
</template>


<style lang="css">
.tarjeta{
  background: white;
  border-left: 4px solid rgb(0, 213, 255);
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>