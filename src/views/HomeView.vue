<script setup>
import MusicNavigation from "@/components/musicNavigation.vue";
import { inject } from "vue";
import VolumeSetting from "@/components/volumeSetting.vue";

const audioCurrentTime = inject("audioCurrentTime");
const duration = inject("duration");
const handleChange = inject("onChange");
</script>
<template>
  <div id="cover" class="w-[200px] h-[200px] rounded-full mx-auto mb-10"></div>
  <div class="flex my-4">
    <input
      class="cursor-pointer h-1 w-[95%] mx-auto"
      type="range"
      min="0"
      :value="audioCurrentTime"
      :max="duration"
      @change="handleChange"
    />
  </div>
  <MusicNavigation />
  <VolumeSetting />
</template>
<style>
#cover {
  background-image: url("2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
