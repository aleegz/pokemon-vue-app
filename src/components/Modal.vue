<template>
  <Dialog
    v-model:visible="visible"
    maximizable
    modal
    :header="'Información sobre ' + name"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    @hide="updateVisible"
  >
    <img
      :src="image"
      :alt="name"
      style="display: flex; width: 100%; height: 20em"
    />
    <h4>ID: {{ id }}</h4>
    <h4>Nombre: {{ name }}</h4>
    <h4>Tipo: {{ type }}</h4>
    <h4>
      Habilidad: {{ abilities.name }}
    </h4>
    <p>{{ abilities.desc }}</p>
  </Dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, watch } from "vue";
import Dialog from "primevue/dialog";
import { fetchData } from "../services/fetchData";

const props = defineProps({
  id: Number,
  name: String,
  type: String,
  image: String,
  abilityUrl: String,
  visible: Boolean,
});

const visible = ref(props.visible);

watch(
  () => props.visible,
  (newVisible) => {
    visible.value = newVisible;
  }
);

const emit = defineEmits();

const updateVisible = () => {
  emit("update:visible", false);
};

const abilities = ref([]);

const getData = async (url) => {
  try {
    const data = await fetchData(url);

    const index = data.effect_entries.findIndex(
      (entry) => entry.language.name == "en"
    );

    abilities.value = {
      name: data.name,
      desc: data.effect_entries[index].effect || "Sin descripción disponible",
    };
  } catch (err) {
    console.error("Error al obtener los datos: ", err);
  }
};

onMounted(() => {
  getData(props.abilityUrl);
});
</script>

<style scoped></style>
