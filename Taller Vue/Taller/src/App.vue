<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

data() {
  return {
    nombre: "",
    carrera: "",
    calificacion: null,
    carreras: ["Software", "Sistemas", "Electrónica", "Industrial"],
    estudiantes: [], //la lista vive en memoria
    siguienteId: 1, //contador del id
    cupoMaximo: 10,
    carreras
  };
}
</script>

<template>
  <!-- <HelloWorld /> -->
  <h1>Gestor de Estudiantes</h1>

  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" v-model.trim="nombre" />

  <label for="carrera">Carrera</label>
  <input type="text" id="carrera" v-model="carrera" />

  <label for="Calificación">Calificación (0 a 10)</label>
  <input type="number" id="calificacion" v-model="calificacion" />
</template>
