<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { inject } from "vue";

//

const moveToFav = inject("moveToFavortie");
const active = inject("isFavActive");
</script>
<template>
  <svg
    class="cursor-pointer hover:stroke-[#FFC67D] duration-300"
    width="24"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="active ? '#FFC67D' : '#F5F5F5'"
    xmlns="http://www.w3.org/2000/svg"
    @click="moveToFav"
  >
    <path
      d="M19.0711 13.1421L13.4142 18.799C12.6332 19.58 11.3668 19.58 10.5858 18.799L4.92894 13.1421C2.97632 11.1895 2.97632 8.02369 4.92894 6.07106C6.88157 4.11844 10.0474 4.11844 12 6.07106C13.9526 4.11844 17.1185 4.11844 19.0711 6.07106C21.0237 8.02369 21.0237 11.1895 19.0711 13.1421Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
