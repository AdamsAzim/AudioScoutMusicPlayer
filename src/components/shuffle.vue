<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
const toggle = ref(false);
</script>
<template>
  <button @click="toggle = !toggle">
    <svg
      v-if="!toggle"
      class="self-center"
      width="24px"
      height="24px"
      stroke="#F5F5F5"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6.99999C19 6.99999 13.5 6.99999 11.5 12.5C9.5 18 5 18 2 18"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M20 5C20 5 21.219 6.21895 22 7C21.219 7.78105 20 9 20 9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M22 18C19 18 13.5 18 11.5 12.5C9.5 6.99999 5 7.00001 2 7"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M20 20C20 20 21.219 18.781 22 18C21.219 17.219 20 16 20 16"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
    <!-- this second svg shows when we toggle shuffle -->
    <svg
      v-else
      class="self-center"
      width="24px"
      height="24px"
      stroke="#FFC67D"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6.99999C19 6.99999 13.5 6.99999 11.5 12.5C9.5 18 5 18 2 18"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M20 5C20 5 21.219 6.21895 22 7C21.219 7.78105 20 9 20 9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M22 18C19 18 13.5 18 11.5 12.5C9.5 6.99999 5 7.00001 2 7"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M20 20C20 20 21.219 18.781 22 18C21.219 17.219 20 16 20 16"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</template>
