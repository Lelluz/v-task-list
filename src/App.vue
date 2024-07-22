<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
/* import Greet from "./components/Greet.vue"; */
</script>

<template>
  <div class="min-h-screen bg-stone-900 text-white p-5">
    <h1 class="text-3xl font-bold mb-5 text-dandelion-400">Vue Task List App</h1>
    <div class="bg-stone-800 p-5 rounded shadow-md">
      <input
        type="text"
        placeholder="Add a new task"
        class="border border-stone-600 bg-stone-700 text-white p-2 rounded w-full mb-5 placeholder-gray-400"
      />
      <ul>
        <li class="flex justify-between items-center mb-3">
          <span class="text-dandelion-300">Sample Task</span>
          <div>
            <button class="bg-dandelion-500 text-white px-3 py-1 rounded mr-2">
              Done
            </button>
            <button class="bg-dandelion-700 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>
