<template>
  <div v-if="filteredPokemons.length == 0">
    <h2>No se encontraron resultados</h2>
  </div>
  <div v-else>
    <div v-for="(pokemon, key) in filteredPokemons" :key="key" class="pokemons">
      <Card
        :id="key + 1"
        :name="pokemon.name"
        :type="pokemon.type"
        :image="pokemon.image"
        :abilityUrl="pokemon.abilityUrl"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, computed } from 'vue';
import { fetchData } from '../services/fetchData';
import Card from './Card.vue';

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
