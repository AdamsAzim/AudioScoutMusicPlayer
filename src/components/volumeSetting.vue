<script setup>
import { ref, inject, onMounted } from "vue";
const audio = inject("audioElement");
const volume = ref(10);

function handleVolumeChange(e) {
  //   audio.value = e.target.value;
  volume.value = e.target.value;
  audio.value.volume = Number(e.target.value) / 10;
}
onMounted(() => {
  console.log(audio.value.volume);
});
</script>
<template>
  <input
    class="self-center cursor-pointer"
    type="range"
    :value="volume"
    name="volume"
    id="volume"
    min="0"
    max="10"
    @change="handleVolumeChange"
  />
</template>
<style>
#volume {
  width: 50%;
}
</style>
