<script setup>
import { ref, provide, onMounted } from "vue";
import Navbar from "./components/navBar.vue";
import MusicCard from "./components/musicCard.vue";
import VolumeSetting from "./components/volumeSetting.vue";

const play = ref(false);
const audio = ref(null);
const duration = ref(0);
const audioCurrentTime = ref(0);
const track = ref(["music.mp3", "music2.mp3"]);
const count = ref(0);

//

provide("audioElement", audio);
provide("play", play);
provide("duration", duration);
provide("audioCurrentTime", audioCurrentTime);
provide("onPlay", handlePlay);
provide("onPause", handlePause);
provide("onNext", handleNext);
provide("onPrev", handlePrevious);
provide("onChange", handleChange);

//

function handlePlay() {
  audio.value.play();
  console.log(audio.value.seekable);
}

function handlePause() {
  audio.value.pause();
}

function handleNext() {
  if (count.value === track.value.length - 1) {
    count.value = 0;
  } else {
    count.value++;
    audio.value.autoplay = true;
  }
}

function handlePrevious() {
  if (count.value < 1) {
    count.value = 0;
  } else {
    count.value--;
    audio.value.autoplay = true;
  }
}

function handleLoadedData() {
  duration.value = audio.value.duration;
  console.log(audio.value.duration);
}

function handleChange(e) {
  audio.value.currentTime = e.target.value;
  audioCurrentTime.value = e.target.value;
}

/**
  this effect watches the current time of the audio 
  that is audio.value.currentTime
  and the matches it with the reactive state 
  that i have created (audioCurrentTime).
**/

onMounted(() => {
  audio.value.ontimeupdate = () => {
    audioCurrentTime.value = audio.value.currentTime;
  };
});
</script>

<template>
  <audio
    preload="metadata"
    ref="audio"
    :src="track[count]"
    @durationchange="handleLoadedData"
    @ended="handleNext"
    @play="play = true"
    @pause="play = false"
  ></audio>
  <MusicCard>
    <Navbar />
  </MusicCard>
</template>

<style>
/*Primary Color: Night Blue (#1A1D23) 
2. Secondary Color: Cream (#F5F5F5) 
3. Accent Color: Deep Coral (#FFC67D)
*/
body {
  /*background-color: #1a1d23;*/
  background-image: url("assets/2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
