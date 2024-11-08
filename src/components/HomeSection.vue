<template>
  <h1>¿Quién es ese pokémon?</h1>
  <div v-if="pokemons">
    <div class="title">
        <p>ID</p>
        <p>Nombre</p>
        <p>Tipo</p>
    </div>
    <div v-for="(pokemon, key) in pokemons" :key="key" class="pokemons">
      <p>{{ key + 1 }}</p>
      <p>{{ pokemon.name }}</p>
      <p>{{ pokemon.type }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchData } from "@/services/fetchData";

const pokemons = ref([]);

const getData = async () => {
  try {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon/");

    console.log(
      (pokemons.value = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailData = await fetchData(pokemon.url);
          return {
            name: detailData.name,
            type: detailData.types[0].type.name
          };
        })
      ))
    );
  } catch (error) {
    console.error("Error al obtener los datos: " + error);
  }
};

onMounted(getData);
</script>

<style scoped>
.title {
    display: flex;
    justify-content: space-around;
    font-size: 1.5em;
}

.pokemons {
    display: flex;
    justify-content: space-around;
}
</style>
