<template>
  <h1 style="text-align: center">¿Quién es ese pokémon?</h1>
  <Search @updateSearch="updateSearchQuery" style="margin-bottom: 1.5em;" />
  <CardList :searchQuery="searchQuery" />
</template>

<script setup>
import { ref } from 'vue';
import Search from '../components/Search.vue';
import CardList from '../components/CardList.vue';
import DataTable from '../components/DataTable.vue'; // Alternativa a Cardlist

const searchQuery = ref('');

// Actualizar el query de búsqueda
const updateSearchQuery = (newQuery) => {
  searchQuery.value = newQuery;
};
</script>

<style scoped></style>
