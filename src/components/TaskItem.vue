<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { PencilSquareIcon, XCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['delete-task']);

const deleteTask = () => {
  emit('delete-task', props.task.id);
};
</script>

<template>
  <li class="flex justify-between items-center p-5 bg-stone-800 rounded">
    <span class="text-dandelion-300">
      {{ task.text }}
    </span>
    <div class="flex">
      <button class="bg-dandelion-500 text-white px-1 py-1 rounded mr-2">
        <PencilSquareIcon class="w-6 h-6" />
      </button>
      <button @click="deleteTask" class="bg-dandelion-700 text-white px-1 py-1 rounded">
        <XCircleIcon class="w-6 h-6" />
      </button>
    </div>
  </li>
</template>

<style scoped>
</style>