<script setup>
// import { ref } from "vue";

const nombre = "Carlos"
const edad = 17
const ciudad = "Bogota"

// function Edad() {
//     if (edad > 18) {
//         console.log("Mayor de edad")
//     } else if(edad < 18) {
//         console.log("Menor de edad")
//     }
// }

</script>


<template>
    <article class="tarjeta_perfil">
        <p>Nombre: {{ nombre }}</p>
        <p>Edad: {{ edad }}</p>
        <p>Ciudad: {{ ciudad }}</p>
          
        <p v-if="edad > 18">Mayor de edad</p>
        <p v-if="edad < 18">Menor de edad</p>
    </article>

</template>


<style lang="css">
    .tarjeta_perfil{
    background: white;
    border-left: 4px solid rgb(0, 213, 255);
    padding: 1rem;
    margin-bottom: 1rem;
    /* text-align: center; */
  }
</style>