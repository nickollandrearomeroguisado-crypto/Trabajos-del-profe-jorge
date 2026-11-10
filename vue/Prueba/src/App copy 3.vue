<script setup>
import TarjetaSaludo from './components/TarjetaSaludo.vue';
import TarjetaPerfil from './components/TarjetaPerfil.vue';
import EncabezadoSitio from './components/EncabezadoSitio.vue';
import PiePagina from './components/PiePagina.vue';
import { ref } from "vue";

// const contador = ref(0) //ref hace que el valor cambie en lo visual(navegador)

// const frutas = ref([
//   "manzana", "pera", "naranja"
// ])

// const estudiantes = ref([
//   {
//     id: 1,
//     nombre: "Pepe",
//     edad: 14
//   },
//   {
//     id: 1,
//     nombre: "Luis",
//     edad: 24
//   },
//   {
//     id: 1,
//     nombre: "Carlos",
//     edad: 22
//   }
// ])


// function incrementar(){
//   contador.value++
// }

// //se suma, se resta, se multiplica, indicandole el valor que se desea hacer la operacion
// const number = 1
// const number2 = 2
// const valor = ref(0)

// function sumar(){
//   valor.value = number + number2
// }

// function restar(){
//   valor.value = number - number2
// }

// function multiplicar(){
//   valor.value = number * number2
// }
// //......

// let edad = ref(10);

const url = "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"

const altImage = "Imagen Buho"

const id= 3

const activo = true

const hasActivo = true

const tipo = "error"

const porcentaje = 4

const form = ref({
  name: "Test",
  edad: 2,
  email: "test@testrt.com",
  rol: ""
})

//contador
const contador2 = ref(0) 

function incrementar(){
  contador2.value++
}

function disminuir(){
  contador2.value--
}

//Lista de tareas
const listas = ref([
  {
    id: 1,
    nombre: "Pepe",
    edad: 14
  },
  {
    id: 1,
    nombre: "Luis",
    edad: 24
  },
  {
    id: 1,
    nombre: "Carlos",
    edad: 22
  }
])

</script>


<!-- <template> -->
  <!-- <h1>Mi primera APP</h1>
  <TarjetaSaludo/>
  <TarjetaSaludo/>
  <TarjetaSaludo/>

  <p>El numero es:{{ contador }}</p> 
  <p>Resultado: {{ number }}</p>
  <button @click="incrementar">+1</button> se incrementa el valor al presionar el boton con el @clicky la funcion que quiere utlize
  <button @click="contador = 0">Reset</button>

  <hr>

  <p>El valor de la operación es {{ valor }}</p>
  <button @click="sumar">Sumar</button>
  <button @click="restar">Restar</button>
  <button @click="multiplicar">Multiplicar</button> -->
  
  <!-- <hr>

  <p v-show="edad > 18">Eres Mayor de edad</p>
  <p v-if="edad > 18 && edad < 50">Eres Mayor de edad</p>
  <p v-else-if="edad > 18">Eres Menor de edad</p>
  <p v-else>Eres un adulto mayor</p>

  <button @click="edad = 19">19 años</button>
  <button @click="edad =59">59 años</button>
  <button @click="edad = 10">reset</button>

  <br/>
  <br/>
  <br/>
  <hr> -->

  <!-- <ul>
    <li v-for="fruta in frutas" :key="fruta">
      
      <h4>{{ fruta }}</h4>

    </li>
  </ul> -->
  <!-- <EncabezadoSitio/>
  <TarjetaPerfil/>
  <PiePagina/> -->
  
<!-- </template> -->

<!-- <template>
  <ul style="padding: 2rem; margin: 2rem;">
  <template v-for="estudiante in estudiantes" :key="estudiante.id">
      <li>
        
        <h3 v-if="estudiante.edad >= 22">Hola Soy {{ estudiante.nombre }} y tengo {{ estudiante.edad }} años</h3>
  
      </li>
    </template>

  </ul> 
</template> -->

<template>
  <img :src="url" :alt="altImage" />
  <a :href="`/estudiante/${id}`">VER</a>
  <button :disabled="activo"></button>

  <p :class="{ activo: hasActivo, error: !hasActivo }"></p>
  <p :class="`alerta alerta--${tipo}`"></p>
  <p :style="{width : porcentaje + '%'}"></p>

  <input @keyup.enter="buscar"/>
  <form @submit.prevent=""></form> <!--evita que se recarga la pagina-->

  <button></button>

  <input v-model="form.name"/>
  <input v-model.number="form.edad"/>
  <input v-model.trim="form.email"/> <!--trim elimina los espacios-->

  <select v-model="form.rol">
    <option value="">Seleccione el rol</option>
    <option>Admin</option>
    <option>Analista</option>
    <option>Usuario</option>
  </select>

  <br>
  <br>

  <pre>
    {{ form }}
  </pre>

<!--contador-->
<h1 :class="{ negativo: contador2 < 0, positivo: contador2 > 0 }"></h1>
<button @click="incrementar">+1</button> 
<button @click="disminuir" :disabled="contador2 === -5">-1</button> 
<button @click="contador2 = 0">Reset</button>

<!--Lista de tareas-->
<input 
v-model="texto" 
@click="Agregar"
@keyup.enter="buscar"
/>

<ul style="padding: 2rem; margin: 2rem;">
  <template v-for="lista in listas" :key="lista.id">
    <!-- {{ lista }} -->
    <h3>Hola Soy {{ lista.nombre }} y tengo {{ lista.edad }} años</h3>
    <button @click="eliminar(lista)">X</button>
  </template>

</ul> 

</template>


<style lang="css">

.positivo{
  color: green;
}

.negativo{
  color: red;
}

</style>