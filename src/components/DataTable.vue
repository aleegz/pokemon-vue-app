<template>
    <DataTable :value="filteredPokemons" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="id" header="ID" style="width: 25%"></Column>
    <Column field="name" header="Nombre" style="width: 25%"></Column>
    <Column field="type" header="Tipo" style="width: 25%"></Column>
    <Column field="image" header="Imagen" style="width: 25%"></Column>
</DataTable>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref, onMounted, defineProps, computed } from 'vue';
import { fetchData } from '../services/fetchData';

const props = defineProps({
  searchQuery: String,
});

const filteredPokemons = computed(() => {
  return pokemons.value.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  );
});

const pokemons = ref([]);

const getData = async () => {
  try {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon/');

    console.log(
      (pokemons.value = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailData = await fetchData(pokemon.url);
          return {
            name: detailData.name,
            type: detailData.types[0].type.name,
            image: detailData.sprites.other.dream_world.front_default,
            abilityUrl: detailData.abilities[0].ability.url,
          };
        })
      ))
    );
  } catch (err) {
    console.error('Error al obtener los datos: ' + err);
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

h2 {
  display: flex;
  justify-content: center;
}
</style>
