<template>
  <DataTable
    :value="pokemons"
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20]"
    tableStyle="min-width: 50rem"
  >
    <Column field="id" header="ID" style="width: 25%"></Column>
    <Column field="name" header="Nombre" style="width: 25%"></Column>
    <Column field="type" header="Tipo" style="width: 25%"></Column>
    <Column field="image" header="Imagen" style="width: 25%">
      <template #body="slotProps">
        <img
          :src="`${slotProps.data.image}`"
          :alt="slotProps.data.name"
          style="width: 25%; height: 25%"
        />
      </template>
    </Column>
    <Column header="Información" style="width: 25%">
      <template #body="{ data }">
        <Button icon="pi pi-eye" label="Ver" @click="openModal(data)" />
      </template>
    </Column>
  </DataTable>

  <Modal
    v-if="selectedPokemon"
    :id="selectedPokemon.id"
    :name="selectedPokemon.name"
    :type="selectedPokemon.type"
    :image="selectedPokemon.image"
    :abilityUrl="selectedPokemon.abilityUrl"
    v-model:visible="visible"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchData } from "../services/fetchData";
import Modal from "./Modal.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

const pokemons = ref([]);
const visible = ref(false);
const selectedPokemon = ref(null);

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const getData = async () => {
  try {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon/");

    pokemons.value = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailData = await fetchData(pokemon.url);
        return {
          id: detailData.id,
          name: capitalizeFirstLetter(detailData.name),
          type: capitalizeFirstLetter(detailData.types[0].type.name),
          image: detailData.sprites.other.dream_world.front_default,
          abilityUrl: detailData.abilities[0].ability.url,
        };
      })
    );
  } catch (err) {
    console.error("Error al obtener los datos: " + err);
  }
};

const openModal = (pokemon) => {
  selectedPokemon.value = pokemon;
  visible.value = true;
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
