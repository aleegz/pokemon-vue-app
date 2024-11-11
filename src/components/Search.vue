<template>
  <div>
    <InputText
      v-model="searchQuery"
      placeholder="Nombre de pokémon"
      class="input"
    />
    <Button label="Buscar" @click="onSearch" class="btn" />
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const searchQuery = ref('');

const emit = defineEmits(['updateSearch']);

const onSearch = () => {
  emit('updateSearch', searchQuery.value); // Emitir el valor cuando cambia
};
</script>

<style scoped>
div {
  width: 100%;
  display: flex;
  justify-content: center;
}
.input {
  width: 70%;
}
.btn {
  margin-left: 1em;
}
</style>
