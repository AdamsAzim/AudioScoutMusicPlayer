<script setup>
const props = defineProps(["refValue"]);
</script>
<template>
  {{ console.log(props.refValue) }}
  <audio controls src="music.mp3">this is a song</audio>
</template>
