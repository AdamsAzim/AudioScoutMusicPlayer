<script setup>
import { inject, provide } from "vue";

const play = inject("play");
provide("playIcon", play);
const onPlay = inject("onPlay");
const onPause = inject("onPause");
function Toggle() {
  play.value = !play.value;
  if (play.value) {
    onPlay();
  } else {
    onPause();
  }
}
// onMounted(() => {
//   console.log(audio.value);
//   try {
//     audio.value.onended = () => {
//       alert("yo");
//     };
//   } catch (err) {
//     console.log(err);
//   }
// });
</script>
<template>
  <button
    @click="Toggle"
    class="flex justify-center cursor-pointer items-center rounded-full w-10 h-10 bg-accent hover:shadow-2xl hover:shadow-accent delay-200"
  >
    <img v-if="play" src="/icons/pause-solid.svg" alt="pause" />
    <img v-else src="/icons/play-solid.svg" alt="play" />
  </button>
</template>
