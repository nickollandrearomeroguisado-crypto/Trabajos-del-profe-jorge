<script setup>
import TarjetaSaludo from "./components/TarjetaSaludo.vue";
import { getPokemon } from "./api/pokeapi.js";

import { ref, computed, onBeforeMount, onMounted, onUpdated, onUnmounted, onBeforeUnmount, onBeforeUpdate } from "vue";

// const precio = ref(20)
// const cantidad = ref(5)
let loading = ref(false)
let pokemon = ref({})
const hora = ref(new Date().toLocaleTimeString())
let intervalo = null
// const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png"

// const contador = ref(1)
// const total = computed(() => {
//   console.log("Calculando total de productos 1")
//   return precio.value * cantidad.value})

// function totalProductos() {
//   console.log("Calculando total de productos 2")
//   return precio.value * cantidad.value
// }

onBeforeMount(() => {
  console.log("Aún no hay DOM") // se construye el componente pero aún no se renderiza el DOM
})

onMounted(async () => { // Se ejecuta después de que se renderice el DOM
  pokemon.value = await getPokemon("pikachu") //esta funcion muestra en pantalla lo que quiero mostrar
  console.log(pokemon.value) 
  loading.value = false

  intervalo = setInterval(() => {
    hora.value = new Date().toLocaleTimeString()
  }, 1000)
})

onBeforeUpdate(() => {
  console.log("Antes de actualizar") // Se ejecuta antes de que se actualice el DOM
})

onUpdated(() => {
  console.log("Después de actualizar") // Se ejecuta después de que se actualice el DOM
})

onBeforeUnmount(() => {
  console.log("Antes de desmontar") // Se ejecuta antes de que se desmonte el componente
})

onUnmounted(() => {
  // console.log("Después de desmontar") // Se ejecuta después de que se desmonte el componente
  clearInterval(intervalo)
})

watch(hora, (newHora, oldHora) => {
  console.log(`La hora ha cambiado de ${oldHora} a ${newHora}`)
})

</script>


<template>
  
  <!-- <img :src="url" :alt="altImage" /> -->
  <p v-if="loading">Cargando Datos</p>
  <!-- <p v-else>{{ pokemon?.name }}</p> -->
   <div>
    <h1>{{ pokemon?.name }}</h1>
    <img :src="pokemon?.sprites.other.home.front_default" :alt="pokemon?.name" width="500" />
  </div>

  <p class="reloj">⏲️ {{ hora }}</p>
    
  <!-- <input type="number" v-model="cantidad" />

<p>{{ total }} </p>
<p>{{ totalProductos() }} </p>

<button @click="contador++">Incrementar</button>
<p>Contador: {{ contador }}</p> -->

</template>


<style lang="css">
</style>