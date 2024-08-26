<script setup>
import { ref, provide } from "vue";
import FavoriteView from "@/views/FavoriteView.vue";
import HomeView from "@/views/HomeView.vue";
import ListOfSongs from "@/views/ListOfSongs.vue";

const screen = ref("home");
const isHomeActive = ref(true);
const isFavActive = ref(false);
const isListActive = ref(false);

//

provide("moveToHome", handleMoveToHome);
provide("moveToListOfSongs", handleMovetoListOfSongs);
provide("moveToFavortie", handleMoveToFav);
provide("isFavActive", isFavActive);
provide("isHomeActive", isHomeActive);

//

function handleMoveToFav() {
  screen.value = "favorite";
  isHomeActive.value = false;
  isFavActive.value = true;
  isListActive.value = false;
}
function handleMovetoListOfSongs() {
  screen.value = "listOfSongs";
  isHomeActive.value = false;
  isFavActive.value = false;
  isListActive.value = true;
}
function handleMoveToHome() {
  screen.value = "home";
  isHomeActive.value = true;
  isFavActive.value = false;
  isListActive.value = false;
}
</script>
<template>
  <div
    class="pt-5 justify-between flex flex-col mx-auto mt-20 w-[380px] h-[500px] rounded-3xl shadow-2xl shadow-current hover:shadow-secondary bg-primary"
  >
    <FavoriteView v-if="screen === 'favorite'" />
    <HomeView v-else-if="screen === 'home'" />
    <ListOfSongs v-else-if="screen === 'listOfSongs'" />
    <slot></slot>
  </div>
</template>
<style></style>
