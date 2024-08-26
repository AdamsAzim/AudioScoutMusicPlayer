<script setup>
import { ref, onMounted, inject } from "vue";
import PlayPauseButton from "./playPauseButton.vue";
import RepeatLoop from "./repeatLoop.vue";
import Shuffle from "./shuffle.vue";
// const props = defineProps(["onNext", "onPrev", "audio"]);
const onNext = inject("onNext");
const onPrev = inject("onPrev");
onMounted(() => {
  // props.audio().ondurationchange = () => {
  //   console.log(props.audio().duration);
  // };
});
</script>
<template>
  <div class="flex justify-evenly mx-auto w-full">
    <Shuffle />
    <img
      class="hover:w-[23px]"
      src="/icons/skip-prev-solid.svg"
      alt=""
      @click="onPrev"
    />
    <PlayPauseButton />
    <img
      class="hover:w-[23px]"
      src="/icons/skip-next-solid.svg"
      alt=""
      @click="onNext"
    />
    <RepeatLoop />
  </div>
</template>
<style>
div img {
  cursor: pointer;
}
</style>
