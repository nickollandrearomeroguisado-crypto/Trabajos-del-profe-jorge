<script setup>
import { ref } from "vue";

// Estado reactivo
const nuevaTarea = ref('')
const tareas = ref([])

// Función para agregar tarea
const agregarTarea = () => {
  if (nuevaTarea.value.trim() === '') return
  
  tareas.value.push({
    id: Date.now(), // Identificador único simple
    texto: nuevaTarea.value,
    hecha: false
  })
  
  nuevaTarea.value = '' // Limpiar input
}

// Función para eliminar tarea
const eliminarTarea = (index) => {
  tareas.value.splice(index, 1)
}
</script>



<template>
 <div class="taller-container">
    <h2>Mi Lista de Tareas</h2>

    <!-- 1. Input con v-model, botón y evento Enter -->
    <div class="input-grupo">
      <input 
        type="text" 
        v-model="nuevaTarea" 
        @keyup.enter="agregarTarea" 
        placeholder="Escribe una nueva tarea..."
      />
      <button @click="agregarTarea">Agregar</button>
    </div>

    <!-- 2 y 5. Mostrar lista o mensaje si está vacía con v-if / v-else -->
    <ul v-if="tareas.length > 0">
      <!-- 2. v-for para recorrer la lista -->
      <li v-for="(tarea, index) in tareas" :key="tarea.id">
        
        <div class="tarea-info">
          <!-- 4. Checkbox para marcar como hecha y :class para tachar -->
          <input type="checkbox" v-model="tarea.hecha" />
          <span :class="{ 'tachado': tarea.hecha }">
            {{ tarea.texto }}
          </span>
        </div>

        <!-- 3. Botón "X" para eliminar -->
        <button class="btn-eliminar" @click="eliminarTarea(index)">X</button>
        
      </li>
    </ul>

    <p v-else class="vacio">No hay tareas</p>
  </div>
</template>


<style lang="css">
.taller-container {
  max-width: 400px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}

.input-grupo {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.input-grupo input {
  flex: 1;
  padding: 8px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

.tarea-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* 4. Estilo para el texto tachado */
.tachado {
  text-decoration: line-through;
  color: #888;
}

.btn-eliminar {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
}

.vacio {
  color: #666;
  font-style: italic;
}
</style>