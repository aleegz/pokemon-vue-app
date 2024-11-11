<template>
  <Card
    style="
      display: flex;
      flex-direction: row;
      width: 80%;
      margin-bottom: 0.5em;
      overflow: hidden;
    "
  >
    <template #header>
      <img class="img" :src="image" :alt="name" width="20em" />
      <h2>{{ id }}</h2>
    </template>
    <template #title>{{ name }}</template>
    <template #subtitle>{{ type }}</template>
    <template #footer>
      <div>
        <Button label="Ver" @click="openModal" />
      </div>
    </template>
  </Card>

  <Modal
    :id="id"
    :name="name"
    :type="type"
    :image="image"
    :abilityUrl="abilityUrl"
    v-model:visible="visible"
  />
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Modal from './Modal.vue';

const visible = ref(false);

const openModal = () => {
  visible.value = true;
};

const props = defineProps({
  id: Number,
  name: String,
  type: String,
  image: String,
  abilityUrl: String,
});
</script>

<style scoped>
.img {
  height: 5em;
  width: 5em;
  padding: 0 0 0 2em;
}
::v-deep .p-card-header {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5em 1em;
}
::v-deep .p-card-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
::v-deep .p-card-caption {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
</style>
