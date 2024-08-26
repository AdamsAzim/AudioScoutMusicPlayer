<script setup>
import RepeatOff from "@/assets/iconsComponent/repeatOff.vue";
import RepeatActive from "@/assets/iconsComponent/repeatActive.vue";
import RepeatOnce from "@/assets/iconsComponent/repeatOnce.vue";
import { ref, onMounted, inject } from "vue";
const repeat = ref("repeat off");
const audio = inject("audioElement");
function ToggleRepeat() {
  switch (repeat.value) {
    case "repeat off":
      repeat.value = "repeat active";
      break;
    case "repeat active":
      repeat.value = "repeat once active";
      audio.value.loop = true;
      break;
    case "repeat once active":
      repeat.value = "repeat off";
      break;
    default:
      throw new Error("An error occured with the reapeatLoop component!");
  }
}
onMounted(() => {
  /**
   Here we'll call the audio component
   and when the repeat button will be equals to
   repeat once active the audio will loop
  **/
  if (repeat.value === "repeat once active") {
    console.log("true");
  }
});
</script>
<template>
  <button @click="ToggleRepeat">
    <RepeatActive v-if="repeat === 'repeat active'" />
    <RepeatOnce v-else-if="repeat === 'repeat once active'" />
    <RepeatOff :toggleRepeat="ToggleRepeat" v-else />
  </button>
</template>
