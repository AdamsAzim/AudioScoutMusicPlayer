<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { inject } from "vue";

//
const moveToHome = inject("moveToHome");
const active = inject("isHomeActive");
</script>
<template>
  <svg
    class="cursor-pointer hover:stroke-[#FFC67D] duration-300"
    width="24"
    height="20"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :stroke="active ? '#FFC67D' : '#F5F5F5'"
    @click="moveToHome"
  >
    <path
      d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M9 17H15"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</template>
